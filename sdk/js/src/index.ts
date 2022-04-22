/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
/**
 * @summary an API for creating cloud video applications
 */

import jwtDecode from 'jwt-decode';
import { v4 as uuid } from 'uuid';

import { LogLevel } from "typescript-logging";

import { LayoutApi } from './layoutapi';
import { LiveApi } from "./liveapi";
import { EventApi } from "./eventapi";

import * as LiveApiModel from './liveapi/proto/ts/live/v21/api';
import * as LayoutApiModel from '@api.stream/protocol-layout-api';
import * as EventApiModel from '@api.stream/protocol-event-api';
export { LiveApiModel, LayoutApiModel, EventApiModel };

import { LiveKitUtils } from "./livekit";
export { LiveKitUtils };

import { Category } from 'typescript-logging-category-style';
import { logger } from './api/logger';
import { ApiClient } from './api';

const CLIENT_VERSION = require( "./version/index.js" );

const LIVEAPI_SERVERS = {
  "dev": "http://127.0.0.1:8081",
  "stage": "https://live.stream.horse/grpcweb/live/v2",
  "prod": "https://live.api.stream/grpcweb/live/v2"
};

const LAYOUTAPI_SERVERS = {
  "dev": 'https://live.stream.horse/grpcweb/layout/v2',
  "stage": 'https://live.stream.horse/grpcweb/layout/v2',
  "prod": 'https://live.api.stream/grpcweb/layout/v2'
};

const EVENTAPI_WS_SERVERS = {
  "dev": 'wss://live.stream.horse/event/v2',
  "stage": 'wss://live.stream.horse/event/v2',
  "prod": 'wss://live.api.stream/event/v2'
};

const EVENTAPI_SERVERS = {
  "dev": 'https://live.stream.horse/grpcweb/event/v2',
  "stage": 'https://live.stream.horse/grpcweb/event/v2',
  "prod": 'https://live.api.stream/grpcweb/event/v2'
};

const LIVEKIT_SERVERS = {
  "dev": "wss://live.stream.horse/webrtc/v2",
  "stage": "wss://live.stream.horse/webrtc/v2",
  "prod": "wss://live.api.stream/webrtc/v2"
};

const LIVEKIT_ADMIN_SERVERS = {
  "dev": "https://live.stream.horse/webrtc/v2",
  "stage": "https://live.stream.horse/webrtc/v2",
  "prod": "https://live.api.stream/webrtc/v2"
};

export module ApiStream {
  // this needs to match the backing proto
  export interface GuestProject {
    // the id of the collection
    collectionId?: string;
    // the id of the project
    projectId?: string;
    // the role of the guest in the project
    role: LiveApiModel.Role;
  }
  export interface AccessToken {
    serviceUserId: string;
    userId: string;
    displayName?: string;
    guestControl?: ApiStream.GuestProject;
    trial: boolean;
    demo: boolean;
  }

  export type Environment = 'dev' | 'stage' | 'prod';
  export type LoggerLevel = 'Trace' | 'Debug' | 'Info' | 'Warn' | 'Error' | 'Fatal';

  // ApiStream API options
  export interface ApiStreamOptions {
    // the version number of the parent SDK (if applicable) to be transmitted in requests to the server
    sdkVersion?: string,
    // the application environment (prod, stage) used to select the appropriate backend servers
    env?: ApiStream.Environment,
    // the level of logging (Trace, Debug, Info, Warn, Error, Fatal) provided by the ApiStream client 
    logLevel?: ApiStream.LoggerLevel,
    // API key used for access to backend authentication service (not used for frontend applications)
    apiKey?: string,
    // override auto-gen sessionId for this client
    sessionId?: string,

    // Override API endpoints
    overrideEndpoints?: {
      // override the auto-selected live-api backend server (used for debugging)
      liveApiServer?: string,
      // override the auto-selected layout-api backend server (used for debugging)
      layoutApiServer?: string,
      // override the auto-selected event-api backend server (used for debugging)
      eventApiServer?: string;
      // override the auto-selected event-api backend websocket server (used for debugging)
      eventApiWebSocketServer?: string;
    };

    // callback for logging every API call
    apiLogCallback?: ApiClient.ApiLogCallback;
    eventLogCallback?: ApiClient.EventLogCallback;
  }
}

export class ApiStream {
  // the live-api
  private readonly liveApi: LiveApi;
  // the layout-api
  private readonly layoutApi: LayoutApi;
  // the event-api
  private readonly eventApi: EventApi;

  private decodedAccessToken?: ApiStream.AccessToken;
  private env: ApiStream.Environment;

  private static ACCESS_TOKEN_QUERY_PARAM = "at";
  protected log?: Category;

  /**
   * Returns the live api client
   * 
   * @returns the live api client
   */
  public LiveApi (): LiveApi {
    return this.liveApi;
  }

  /**
   * Returns the layout api client
   * 
   * @returns the layout api client
   */
  public LayoutApi (): LayoutApi {
    return this.layoutApi;
  }


  /**
   * Returns the layout api client
   * 
   * @returns the layout api client
   */
  public EventApi (): EventApi {
    return this.eventApi;
  }

  /**
   * Create an ApiStream API Client
   */
  constructor ( opts: ApiStream.ApiStreamOptions = {} ) {
    const options: ApiStream.ApiStreamOptions = {
      env: 'prod',
      logLevel: 'Warn',
      ...opts,
    };

    this.env = options.env;

    let sessionId = uuid();
    if ( options.sessionId != undefined )
      sessionId = options.sessionId;

    this.log = logger.getCategory( 'ApiStream' );
    this.setLogLevel( ( options.env == 'dev' ) ? 'Trace' : options.logLevel );

    const overrideEndpoints = options.overrideEndpoints ?? {};

    if ( overrideEndpoints.liveApiServer == undefined )
      overrideEndpoints.liveApiServer = LIVEAPI_SERVERS[ this.env ];

    if ( overrideEndpoints.layoutApiServer == undefined )
      overrideEndpoints.layoutApiServer = LAYOUTAPI_SERVERS[ this.env ];

    if ( overrideEndpoints.eventApiServer == undefined )
      overrideEndpoints.eventApiServer = EVENTAPI_SERVERS[ this.env ];

    if ( overrideEndpoints.eventApiWebSocketServer == undefined )
      overrideEndpoints.eventApiWebSocketServer = EVENTAPI_WS_SERVERS[ this.env ];

    this.eventApi = new EventApi( sessionId, overrideEndpoints.eventApiServer, overrideEndpoints.eventApiWebSocketServer, options.sdkVersion, options.apiLogCallback, options.eventLogCallback );
    this.layoutApi = new LayoutApi( sessionId, this.eventApi, overrideEndpoints.layoutApiServer, options.sdkVersion, options.apiLogCallback );
    this.liveApi = new LiveApi( sessionId, this.eventApi, overrideEndpoints.liveApiServer, this.setAccessToken.bind( this ), options.apiKey, options.sdkVersion, options.apiLogCallback );

    // Handle the event api's authentication expiring
    // this handles the case where no calls have been made to the live API but the access
    // token is coming up for expiration. (e.g a browser left open)
    this.eventApi.on( 'reconnectBefore', evt => {
      if ( evt.reauthenticate ) {
        // Fire _a_ request to the live API so we get an updated access token.
        this.liveApi.authentication.refreshAccessToken( {} )
          .catch( () => { /* */ } );
      }
    } );

    this.log.info( "api.stream: sessionid=" + sessionId + ", version=" + CLIENT_VERSION + ", sdkVersion=" + options.sdkVersion );
  }

  private setLogLevel ( level: ApiStream.LoggerLevel ) {
    try {
      let logLevel = LogLevel.toLogLevel( level as string );

      logger.updateRuntimeSettings( {
        level: logLevel,
      } );
    }
    catch ( err ) {
      this.log.warn( `unknown logging level ${ level }` );
    }
  }

  private setAccessToken ( accessToken: string ) {
    this.decodedAccessToken = ApiStream.decodeAccessToken( accessToken );
    this.log.debug( "setting accessToken", accessToken, this.decodedAccessToken );
    this.layoutApi.setAccessToken( accessToken );
    this.liveApi.setAccessToken( accessToken );
    this.eventApi.setAccessToken( accessToken );
  }

  public getAccessToken (): ApiStream.AccessToken | null {
    return this.decodedAccessToken;
  }

  /**
   * Are we running as a guest role?
   * 
   * @returns {(ApiStream.GuestProject | null)} return the active project if running as a guest role
   */
  public getGuestProject (): ApiStream.GuestProject | null {
    return this.decodedAccessToken.guestControl;
  }

  /**
   * Initialize the api library and check if we are running inside of the rendering engine
   * @async
   * @param {string} accessToken - a valid ApiStream access token
   * @returns {(ApiStream.GuestProject | null)} if we are operating inside of the rendering engine, this is the active project
   */
  public async load ( accessToken?: string ): Promise<ApiStream.GuestProject | null> {
    // not specified, check if it is in the query params
    if ( accessToken == undefined ) {
      let queryParameters = this.parseQuery();
      if ( queryParameters.get( ApiStream.ACCESS_TOKEN_QUERY_PARAM ) != null ) {
        accessToken = queryParameters.get( ApiStream.ACCESS_TOKEN_QUERY_PARAM );
      }
    }

    // load access token
    if ( accessToken != undefined ) {
      this.setAccessToken( accessToken );
      // check for guest project control
      if ( this.decodedAccessToken.guestControl != undefined ) {
        this.log.info( "loading guest token and exchanging" );
        // this will in turn call set access token
        await this.LiveApi().authentication.refreshAccessToken( {} );
        this.log.info( "auto-loading project = " + JSON.stringify( this.decodedAccessToken.guestControl ) );
        return this.decodedAccessToken.guestControl;
      }
    }

    return null;
  }

  /**
   * get the signaling address of the appropriate livekit webrtc server
   *
   * @param {boolean} admin - if true, return the admin (vs. client) address
   * @returns {string} the address of the appropriate livekit webrtc server
   */
  public getLiveKitServer ( admin: boolean = false ): string {
    if ( admin )
      return LIVEKIT_ADMIN_SERVERS[ this.env ];
    else
      return LIVEKIT_SERVERS[ this.env ];
  }

  private parseQuery (): Map<string, string> {
    let queryString = window.location.search;
    let query = new Map<string, string>();
    let pairs = ( queryString[ 0 ] === '?' ? queryString.substr( 1 ) : queryString ).split( '&' );
    for ( let i = 0; i < pairs.length; i++ ) {
      let pair = pairs[ i ].split( '=' );
      if ( pair.length == 2 ) {
        query.set( decodeURIComponent( pair[ 0 ] ), decodeURIComponent( pair[ 1 ] || '' ) );
        this.log.debug( `found query param: ${ decodeURIComponent( pair[ 0 ] ) }=${ decodeURIComponent( pair[ 1 ] || '' ) }` );
      }
    }

    return query;
  }

  private static decodeAccessToken ( accessToken: string ): ApiStream.AccessToken | null {
    let rawDecodedAccessToken = jwtDecode<any>( accessToken, { header: false } );
    let decodedAccessToken: ApiStream.AccessToken = {
      serviceUserId: rawDecodedAccessToken.user.serviceUserId,
      userId: rawDecodedAccessToken.user.userId,
      displayName: rawDecodedAccessToken.user.displayName,
      trial: rawDecodedAccessToken.user.trial,
      demo: rawDecodedAccessToken.user.demo,
    };
    if ( rawDecodedAccessToken.guestControl != null ) {
      decodedAccessToken.guestControl = {
        collectionId: rawDecodedAccessToken.guestControl.collectionId,
        projectId: rawDecodedAccessToken.guestControl.projectId,
        role: LiveApiModel.roleFromJSON( rawDecodedAccessToken.guestControl.role )
      };
    }

    return decodedAccessToken;
  }
}
