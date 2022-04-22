/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
/**
 * @summary an API for creating cloud video applications
 */

import * as EventApiModel from '@api.stream/protocol-event-api';
import { default as Websocket } from 'isomorphic-ws'; // cross-platform ws
import { v4 as uuid } from 'uuid';
import * as NiceGrpc from 'nice-grpc-web';
import { PublishEventRequest, PublishEventResponse } from '@api.stream/protocol-event-api';
import { isMatch } from 'matcher';

import { ApiClient } from "../api";

const clientVersion = require( "../version/index.js" );

type SupportedStreamEvents = typeof EventApiModel.eventsApiSupportedEvents[ number ];

// Extend layout api types with our own hooks
export type ExtendedEventType = SupportedStreamEvents | 'connected' | 'disconnected';
export type ExtendedStreamResponse = EventApiModel.EventsStreamResponse & {
  connected?: undefined;
  disconnected?: undefined;
};

// Expose event handler types.
export type EventMessageType<T extends ExtendedEventType> =
  ExtendedStreamResponse[ T ];

export type EventHandlerFn<T extends ExtendedEventType> = (
  payload: EventMessageType<T>,
  metadata: { isFromCurrentSession: boolean; }
) => void;

export interface IEventListenerOptions {
  /** ignore events created by this session */
  ignoreSessionEvents?: boolean;
  /** if ignoreSessionEvents=true, allow specific events */
  allowedSessionEvents?: string[];
}

export interface IEventListenerOptionsEvent {
  name?: string | string[];
}

// Constants
const WS_PING_INTERVAL = 20000;
const WS_PING_TIMEOUT = 10000;
const WS_RECONNECT_DELAY = 2000;
const WS_MAX_BADAUTH_ATTEMPTS = 3;

type EventsClient = NiceGrpc.Client<typeof EventApiModel.EventServiceDefinition>;

const LOG_CATEGORY = 'EventApi';

export class EventApi extends ApiClient {
  public static APISTREAM_EVENT_PREFIX = "apistream";

  private ws: Websocket;

  // Cached subscriptions.
  private subscriptions = new Set<string>();

  // Event handlers
  private eventHandlers: {
    [ key: string ]: ( {
      handler: EventHandlerFn<any>;
    } & IEventListenerOptions & IEventListenerOptionsEvent )[];
  } = {};

  // Map of async calls.
  private calls: {
    [ key: string ]: {
      method: string;
      resolve ( data: any ): void,
      reject ( err: Error ): void;
      timeout: NodeJS.Timeout;
    };
  } = {};

  private messageQueue: any[] = [];

  // Websocket state
  private pingLoop: NodeJS.Timeout;
  private reconnectTimeout: NodeJS.Timeout;
  private websocketReady = false;
  private reconnectionAttempts: number = 0;
  private badAuthentication: boolean = false;

  private eventsClient?: NiceGrpc.Client<typeof EventApiModel.EventServiceDefinition> = null;

  constructor (
    sessionId: string,
    server: string,
    private readonly websocketServer: string,
    sdkVersion: string,
    apiLogCallback?: ApiClient.ApiLogCallback,
    eventLogCallback?: ApiClient.EventLogCallback
  ) {
    super( sessionId, server, sdkVersion, LOG_CATEGORY, apiLogCallback, eventLogCallback );
  }

  /**
   * Publish a custom event
   * 
   * note: if this session has an established stream, all custom
   * events will use that transport.
   * 
   * @param request 
   * @returns 
   */
  public publish ( ...request: Parameters<EventsClient[ 'publish' ]> ): Promise<EventApiModel.PublishEventResponse> {
    if ( this.websocketReady ) {
      return this.call<Partial<PublishEventRequest>, PublishEventResponse>( 'publish', request[ 0 ] );
    } else {
      return this.eventsClient.publish( ...request );
    }
  }

  /**
   * Open the connection
   */
  public connect (): void {
    if ( !this.ws ) {
      // Cleanup existing connection state
      this.cleanup();

      const currentAccessToken = this.accessToken;

      // Open new connection
      const query = [ `version=${ clientVersion }`, `sessionid=${ this.sessionId }` ];

      if ( this.sdkVersion ) {
        query.push( `sdkversion=${ this.sdkVersion }` );
      }

      this.ws = new Websocket( `${ this.websocketServer }/stream?${ query.join( '&' ) }`, [
        'Bearer', this.accessToken
      ] );

      let error: any;

      this.ws.addEventListener( 'message', ( msg ) => {
        const data = JSON.parse( msg.data.toString() );
        const message: EventApiModel.EventsStreamResponse = data.result;

        if ( data.error ) {
          error = data.error;
          this.handleEvent( 'error', {
            error: {
              code: data.code,
              message: data.message,
            }
          } );

          // Track disconnects caused by a bad authentication token.
          if ( [ 'You do not have permission to this resource', 'You do not have permission to this resource' ].includes( data.message ) ) {
            this.badAuthentication = true;
          }
        }

        if ( !message ) {
          return;
        }

        if ( message.reconnectBefore && message.reconnectBefore.reauthenticate && this.accessToken === currentAccessToken ) {
          this.badAuthentication = true;
        }

        // Check we're exposing a type the SDK recognizes.
        const eventName = EventApiModel.eventsApiSupportedEvents.find( name => !!message[ name ] );
        if ( eventName ) {
          this.handleEvent( eventName, <any> message );
        }
      } );

      this.ws.addEventListener( 'open', () => {
        this.log.info( "websocket connected" );

        this.call( 'ping', 'hello', { timeout: WS_PING_TIMEOUT, skipQueue: true } )
          .then( () => {
            this.ready();
          } )
          .catch( ( e: Error ) => {
            if ( !error && e.message !== 'Stream connection closed' ) {
              this.disconnect( 'hello timeout' );
            }
          } );
      } );

      // Handle disconnection
      this.ws.addEventListener( 'close', ( event ) => {
        if ( error ) {
          this.reconnect( `${ error?.message ?? 'unknown' }` );
        } else {
          this.reconnect( `closed - ${ event.reason || event.code }` );
        }
      } );

      // Catch errors for logging
      this.ws.addEventListener( 'error', ( err ) => {
        error = err;
      } );
    }
  }

  /**
   * Subscribe to an event
   *
   * note: if a connection does not exist, one will be established.
   *
   * @param type 
   * @param payload 
   */
  public async subscribe ( name: string, payload: Omit<EventApiModel.SubscribePayload, 'name'> = {} ): Promise<void> {
    return this.call( 'subscribe', { name, ...payload } )
      .then( () => {
        this.subscriptions.add( JSON.stringify( { name, ...payload } ) );
      } );
  }

  /**
   * Unsubscribe from an event
   * @param type 
   * @param payload 
   */
  public async unsubscribe ( name: string, payload: Omit<EventApiModel.SubscribePayload, 'name'> = {} ): Promise<void> {
    this.subscriptions.delete( JSON.stringify( { name, payload } ) );

    await this.call( 'unsubscribe', { name, ...payload } );
  }

  /**
   * Register an event handler
   *
   * @param type Type of event
   * @param handler 
   */
  public on ( type: 'connected', fn: () => void ): void;
  public on ( type: 'disconnected', fn: () => void ): void;
  public on ( type: 'reconnectBefore', fn: EventHandlerFn<'reconnectBefore'> ): void;
  public on ( type: 'event', fn: EventHandlerFn<'event'> ): void;
  public on ( type: 'event', data: IEventListenerOptions & IEventListenerOptionsEvent, fn: EventHandlerFn<'event'> ): void;
  public on<T extends ExtendedEventType> ( type: T, dataOrFn: IEventListenerOptions & IEventListenerOptionsEvent | EventHandlerFn<T>, fn?: any ): void {
    const handler = fn ? fn : dataOrFn;
    const options: IEventListenerOptions & IEventListenerOptionsEvent = {
      ignoreSessionEvents: false,
      allowedSessionEvents: [],
      ...( fn ? dataOrFn : {} ),
    };

    if ( !this.eventHandlers[ type ] ) {
      this.eventHandlers[ type ] = [];
    }

    this.eventHandlers[ type ].push( {
      ...options,
      handler,
    } );
  }

  public off ( type: 'connected', fn: () => void ): void;
  public off ( type: 'disconnected', fn: () => void ): void;
  public off ( type: 'reconnectBefore', fn: EventHandlerFn<'reconnectBefore'> ): void;
  public off ( type: 'event', fn: EventHandlerFn<'event'> ): void;
  public off ( type: 'event', data: IEventListenerOptions & IEventListenerOptionsEvent, fn: EventHandlerFn<'event'> ): void;
  public off<T extends ExtendedEventType> ( type: T, dataOrFn: IEventListenerOptions & IEventListenerOptionsEvent | EventHandlerFn<T>, fn?: any ): void {
    const handler = fn ? fn : dataOrFn;
    const options: IEventListenerOptions & IEventListenerOptionsEvent = {
      ignoreSessionEvents: false,
      allowedSessionEvents: [],
      ...( fn ? dataOrFn : {} ),
    };

    this.eventHandlers[ type ] = ( this.eventHandlers[ type ] ?? [] ).filter( eventHandler => {
      // Check if we're de-registering the same event handler.
      if (
        eventHandler.ignoreSessionEvents === options.ignoreSessionEvents &&
        eventHandler.allowedSessionEvents === options.allowedSessionEvents &&
        eventHandler.handler === handler &&
        eventHandler.name === options.name
      ) {
        return false;
      }

      return true;
    } );
  }

  /**
   * Disconnect the websocket connection
   */
  public disconnect ( reason: string ): void {
    this.log.warn( `disconnected from events reason=${ reason }` );

    // Cleanup RPC calls that were made during this request.
    Object.values( this.calls ).forEach( i => {
      clearTimeout( i.timeout );
      i.reject( new Error( 'Stream connection closed' ) );
    } );
    this.calls = {};

    this.cleanup();
  }

  protected _setup ( options: NiceGrpc.CallOptions ): void {
    this.eventsClient = this.clientFactory.create(
      EventApiModel.EventServiceDefinition,
      this.channel,
      {
        '*': options,
      },
    );

    // If the socket is marked as having bad authentication,
    // clear the state and enable the websocket to reconnect.
    if ( this.badAuthentication ) {
      this.badAuthentication = false;
      this.reconnectionAttempts = 0;
      this.reconnect( 'updated token' );
    }
  }

  /**
   * Called when the websocket is ready.
   */
  private ready (): void {
    this.reconnectionAttempts = 0;
    this.badAuthentication = false;
    this.websocketReady = true;
    this.handleEvent( 'connected', { connected: undefined } );

    // Re-emit any subscriptions
    for ( const sub of this.subscriptions.values() ) {
      this.send( { subscribe: JSON.parse( sub ), correlationId: uuid() } );
    }

    for ( const msg of this.messageQueue ) {
      this.send( msg );
    }

    this.messageQueue = [];

    this.pingLoop = setInterval( () => {
      this.ping();
    }, WS_PING_INTERVAL );
  }

  private ping (): void {
    this.call( 'ping', `${ +new Date() }`, { timeout: WS_PING_TIMEOUT } )
      .catch( () => {
        // Timeout or failed ping
        this.reconnect( 'connection stalled' );
      } );
  }


  /**
   * Reconnect event stream
   *
   * @param reason Rec
   */
  private reconnect ( reason: string ): void {
    this.disconnect( reason );

    this.reconnectTimeout = setTimeout( () => {
      this.reconnectionAttempts++;

      if ( this.badAuthentication && this.reconnectionAttempts >= WS_MAX_BADAUTH_ATTEMPTS ) {
        this.log.warn( 'Maximum number of reconnection attempts reached with bad authentication, please re-authenticate the SDK' );

        return;
      }

      this.connect();
    }, WS_RECONNECT_DELAY );
  }

  /**
   * Send a raw message to the websocket.
   *
   * @param data 
   */
  private send ( data: any ): void {
    if ( this.ws && this.ws.readyState === this.ws.OPEN ) {
      this.ws.send( JSON.stringify( data ) );
    } else {
      this.log.warn( 'Message sent to a disconnected stream' );
    }
  }

  /**
   * Process a stream event
   *
   * @param name the name of the event
   * @param payload the full event stream payload
   *
   * @returns void
   */
  private handleEvent<T extends ExtendedEventType> (
    name: T,
    payload: Partial<ExtendedStreamResponse>
  ): void {
    // Check if this is part of a socket call and the correct payload is being correlated
    if ( this.calls[ payload.correlationId ] ) {
      const isMatchingResponse = EventApiModel.eventsApiEventRpcCalls[ this.calls[ payload.correlationId ].method ] === name;
      const isError = !!payload.error;

      // Only resolve the handler if it's a valid return type or an error.
      if ( isMatchingResponse || isError ) {
        this.resolveCall( name, <any> payload );

        return;
      }
    }

    // Pass through to event handlers
    for ( const handler of ( this.eventHandlers[ name as string ] ?? [] ) ) {
      if ( name === 'event' && payload.event ) {
        if ( payload.sessionId === this.sessionId && handler.ignoreSessionEvents && !handler.allowedSessionEvents.includes( payload.event.name ) ) {
          this.log.trace( "ignorning event from self: " + payload.event.name );
          continue;
        }

        if ( handler.name && !isMatch( payload.event.name, handler.name ) ) {
          continue;
        }
      } else {
        if ( payload.sessionId === this.sessionId && handler.ignoreSessionEvents ) {
          this.log.trace( "ignorning event from self" );
          continue;
        }
      }

      if ( this.eventLogCallback && name === 'event' && payload.event ) {
        let eventService: string | undefined = undefined;
        let eventType = payload.event.name;
        let eventSubType: string | undefined = undefined;

        // apistream:live:EVENT_TYPE_PROJECT:EVENT_SUB_TYPE_UPDATE
        if ( payload.event.name.startsWith( EventApi.APISTREAM_EVENT_PREFIX ) ) {
          let parts = payload.event.name.split( ':' );
          if ( parts.length == 4 ) {
            eventService = parts[ 1 ];
            eventType = parts[ 2 ];
            eventSubType = parts[ 3 ];
          }
          this.eventLogCallback( eventService, eventType, eventSubType, payload );
        }

        handler.handler( payload ? payload[ name ] as any : undefined, { isFromCurrentSession: payload.sessionId === this.sessionId } );
      }
    }

  /**
   * Make an RPC call
   * 
   * Initiates an async request via the stream. A correlationId is generated and used to track 
   * responses and errors. A handler is registered 
   * 
   * @param method request method to call
   * @param payload payload to send
   * @param opts timeout
   * @returns 
   */
  private async call<T, Q> ( method: string, payload: T, opts: { timeout: number, skipQueue?: boolean; } = { timeout: 20000, skipQueue: false } ): Promise<Q> {
    if ( !this.ws ) {
      this.connect();
    }

    const correlationId = uuid();

    return new Promise( ( resolve, reject ) => {
      const timeout = setTimeout( () => {
        // Cleanup the request
        delete this.calls[ correlationId ];

        // Reject the request.
        reject( new Error( 'Request timed out' ) );
      }, opts.timeout );

      this.calls[ correlationId ] = { resolve, reject, timeout, method };

      if ( this.websocketReady || opts.skipQueue ) {
        this.send( { [ method ]: payload, correlationId } );
      } else {
        this.messageQueue.push( { [ method ]: payload, correlationId } );
      }
    } );
  }

  /**
   * Handler for `.call()`
   * 
   * Handle response events for a socket call.
   * 
   * @param name name of responding event
   * @param payload payload of the event
   * @returns void
   */
  private resolveCall<T extends ExtendedEventType> (
    name: T,
    payload: ExtendedStreamResponse
  ): void {
    const callHandler = this.calls[ payload.correlationId ];

    if ( !callHandler ) {
      return;
    }

    // Remove timeout expiry since we received a response
    clearTimeout( callHandler.timeout );

    // Remove callHandler registration
    delete this.calls[ payload.correlationId ];

    // Use `error` to denote a rejection.
    if ( name === 'error' && payload.error ) {
      callHandler.reject( new NiceGrpc.ClientError( 'error', payload.error.code, payload.error.message ) );

      return;
    }

    // Pass through value with a resolve.
    callHandler.resolve( payload[ name ] );
  }

  /**
   * Cleanup connection
   * 
   * This cleans up the local state for a given websocket connection.
   */
  private cleanup (): void {
    clearTimeout( this.pingLoop );
    clearTimeout( this.reconnectTimeout );
    this.websocketReady = false;

    // Cleanup the existing websocket connection.
    if ( this.ws ) {
      // this.ws.removeAllListeners();
      this.ws.onclose = function () { };
      this.ws.close();
      this.ws = null;
    }
  }
}