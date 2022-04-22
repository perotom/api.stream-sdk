/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */

/**
 * @summary an API for creating cloud video applications
 */

import * as NiceGrpc from 'nice-grpc-web';

import { ApiClient } from "../api";
import { EventApi } from '../eventapi';

import * as LiveApiModel from './proto/ts/live/v21/api';

import { EventMessageType } from '../eventapi';
import { RequiresSdkAuthentication } from '../api/decorator';

const LOG_CATEGORY = 'LiveApi';

export class LiveApi extends ApiClient {
  private static LIVEAPI_EVENT_PREFIX = 'apistream:live';
  private accessTokenRefreshCallback: LiveApi.AccessTokenRefreshCallback;

  private eventApi: EventApi;
  private handlers: { [ key: string ]: ( ( payload: unknown, type: LiveApiModel.EventSubType ) => void )[]; } = {};

  // access to the collection service
  @RequiresSdkAuthentication()
  collection: NiceGrpc.Client<
    typeof LiveApiModel.CollectionServiceDefinition
  >;
  // access to the project service
  @RequiresSdkAuthentication()
  project: NiceGrpc.Client<
    typeof LiveApiModel.ProjectServiceDefinition
  >;
  // access to the source service
  @RequiresSdkAuthentication()
  source: NiceGrpc.Client<
    typeof LiveApiModel.SourceServiceDefinition
  >;
  // access to the destination service
  @RequiresSdkAuthentication()
  destination: NiceGrpc.Client<
    typeof LiveApiModel.DestinationServiceDefinition
  >;
  // access to the frontend authentication service
  @RequiresSdkAuthentication()
  authentication: NiceGrpc.Client<
    typeof LiveApiModel.AuthenticationServiceDefinition
  >;
  // access to the backend authentication service
  backendAuthentication?: NiceGrpc.Client<
    typeof LiveApiModel.BackendAuthenticationServiceDefinition
  >;
  // access to the demo authentication service
  publicAuthentication: NiceGrpc.Client<
    typeof LiveApiModel.PublicAuthenticationServiceDefinition
  >;

  constructor ( sessionId: string, eventApi: EventApi, server: string, onAccessTokenRefresh: LiveApi.AccessTokenRefreshCallback, apiKey?: string, sdkVersion?: string, apiLogCallback?: ApiClient.ApiLogCallback ) {
    super( sessionId, server, sdkVersion, LOG_CATEGORY, apiLogCallback );
    this.eventApi = eventApi;
    this.accessTokenRefreshCallback = onAccessTokenRefresh;

    this.publicAuthentication = this.clientFactory.create(
      LiveApiModel.PublicAuthenticationServiceDefinition,
      this.channel
    );

    if ( apiKey != undefined ) {
      this.backendAuthentication = this.clientFactory.create(
        LiveApiModel.BackendAuthenticationServiceDefinition,
        this.channel,
        {
          '*': { metadata: NiceGrpc.Metadata( { 'X-Api-Key': apiKey } ) }
        },
      );
    }

    this.eventApi.on( 'event', { name: `${ LiveApi.LIVEAPI_EVENT_PREFIX }:*`, ignoreSessionEvents: true, allowedSessionEvents: [ `${ LiveApi.LIVEAPI_EVENT_PREFIX }:EVENT_TYPE_PROJECT:EVENT_SUB_TYPE_STATE` ] }, this.eventCallback.bind( this ) );
  }

  /**
 * Register an event handler
 *
 * @param type Type of event
 * @param handler 
 */
  public on<T extends LiveApiModel.EventType> (
    type: T,
    handler: LiveApi.EventHandlerFn<T>
  ): void {
    this.handlers[ type ] = <any> this.handlers[ type ] ?? [];
    this.handlers[ type ].push( handler );
  }

  /**
   * Unregister an event handler
   *
   * @param type Type of event
   * @param handler 
   */
  public off<T extends LiveApiModel.EventType> (
    type: T,
    handler: LiveApi.EventHandlerFn<T>
  ): void {
    this.handlers[ type ] = this.handlers[ type ].filter( i => i !== handler );
  }

  private emitToHandlers<T extends LiveApiModel.EventType> (
    name: T,
    subType: LiveApiModel.EventSubType,
    payload: LiveApi.EventMessageType<T>
  ): void {
    for ( const handler of ( this.handlers[ name ] ?? [] ) ) {
      handler( Object.values( payload ).find( i => !!i ), subType );
    }
  }

  public async subscribeToCollection ( collectionId: string ): Promise<void> {
    await this.eventApi.subscribe( `${ LiveApi.LIVEAPI_EVENT_PREFIX }:*`, { target: { collectionId: collectionId } } );
  }

  public async unsubscribeFromCollection ( collectionId: string ): Promise<void> {
    await this.eventApi.unsubscribe( `${ LiveApi.LIVEAPI_EVENT_PREFIX }:*`, { target: { collectionId: collectionId } } );
  }

  public async subscribeToProject ( collectionId: string, projectId: string ): Promise<void> {
    await this.eventApi.subscribe( `${ LiveApi.LIVEAPI_EVENT_PREFIX }:*`, { target: { collectionId: collectionId, projectId: projectId } } );
  }

  public async unsubscribeFromProject ( collectionId: string, projectId: string ): Promise<void> {
    await this.eventApi.unsubscribe( `${ LiveApi.LIVEAPI_EVENT_PREFIX }:*`, { target: { collectionId: collectionId, projectId: projectId } } );
  }

  private eventCallback ( event: EventMessageType<'event'> ) {
    let typeAndSubType = event.name.split( `${ LiveApi.LIVEAPI_EVENT_PREFIX }:` )[ 1 ];
    let parts = typeAndSubType.split( ':' );
    let eventType = LiveApiModel.eventTypeFromJSON( parts[ 0 ] );
    let eventSubType = LiveApiModel.eventSubTypeFromJSON( parts[ 1 ] );

    this.log.info( "processing event: " + eventType + "/" + eventSubType );
    if ( LiveApi.liveApiEventMap[ eventType ] ) {
      this.emitToHandlers( eventType, eventSubType, <any> event.payload );
    }
  }

  protected _setup ( options: NiceGrpc.CallOptions ): void {
    let self = this;
    options.onHeader = function ( header: NiceGrpc.Metadata ) {
      let jwtHeader = header.get( 'Authorization' );
      if ( jwtHeader != null ) {
        // split it apart
        const headerParts = jwtHeader.split( ' ' );
        // is it malformed?
        if ( ( headerParts.length == 2 ) && ( headerParts[ 0 ] == 'Bearer' ) ) {
          let accessToken = headerParts[ 1 ];
          self.log.info( "received refresh token" );
          self.accessTokenRefreshCallback( accessToken );
        }
      }
    };

    this.collection = this.clientFactory.create(
      LiveApiModel.CollectionServiceDefinition,
      this.channel,
      {
        '*': options,
      },
    );

    this.project = this.clientFactory.create(
      LiveApiModel.ProjectServiceDefinition,
      this.channel,
      {
        '*': options,
      },
    );

    this.source = this.clientFactory.create(
      LiveApiModel.SourceServiceDefinition,
      this.channel,
      {
        '*': options,
      },
    );

    this.destination = this.clientFactory.create(
      LiveApiModel.DestinationServiceDefinition,
      this.channel,
      {
        '*': options,
      },
    );

    this.authentication = this.clientFactory.create(
      LiveApiModel.AuthenticationServiceDefinition,
      this.channel,
      {
        '*': options,
      },
    );
  }
}

export module LiveApi {
  export const liveApiEventMap = <const> {
    [ LiveApiModel.EventType.EVENT_TYPE_COLLECTION ]: 'collection',
    [ LiveApiModel.EventType.EVENT_TYPE_PROJECT ]: 'project',
    [ LiveApiModel.EventType.EVENT_TYPE_SOURCE ]: 'source',
    [ LiveApiModel.EventType.EVENT_TYPE_DESTINATION ]: 'destination',
    [ LiveApiModel.EventType.EVENT_TYPE_UNSPECIFIED ]: 'unspecified',
  };

  export type AccessTokenRefreshCallback = ( accessToken: string ) => any;

  export type EventMessageType<T extends LiveApiModel.EventType> =
    Required<Pick<LiveApiModel.LiveEvent, typeof liveApiEventMap[ T ]>>;
  export type EventHandlerFn<T extends LiveApiModel.EventType> = (
    payload: EventMessageType<T>[ typeof liveApiEventMap[ T ] ], subType: LiveApiModel.EventSubType
  ) => void;
}