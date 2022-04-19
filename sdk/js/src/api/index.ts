/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
/**
 * @summary an API for creating cloud video applications
 */

import * as NiceGrpc from 'nice-grpc-web';
import { isAbortError } from 'abort-controller-x';
import detectNode from 'detect-node';
import * as NodeTransport from '@improbable-eng/grpc-web-node-http-transport';
import { Category } from 'typescript-logging-category-style';
import { logger } from './logger';

const clientVersion = require( "../version/index.js" );

export class ApiClient {
  protected channel: NiceGrpc.Channel;
  protected accessToken?: string;
  protected clientFactory?: NiceGrpc.ClientFactory;
  protected sdkVersion?: string;
  protected version?: string;
  protected log?: Category;
  protected sessionId: string;
  protected grpcOptions: NiceGrpc.CallOptions;

  async * logMiddleware<Request, Response> (
    call: NiceGrpc.ClientMiddlewareCall<Request, Response>,
    options: NiceGrpc.CallOptions ) {
    const { path } = call.method;

    try {
      const result = yield* call.next( call.request, options );
      this.log.debug( `-> ${ path }: ok` );
      this.log.trace( `${ JSON.stringify( call.request ) } -> ${ path }: ${ JSON.stringify( result ) }` );
      return result;
    } catch ( error ) {
      this.log.trace( `${ JSON.stringify( call.request ) } -> ${ path }` );

      if ( error instanceof NiceGrpc.ClientError ) {
        this.log.warn( `-> ${ path }: error: ${ NiceGrpc.Status[ error.code ] }: ${ error.details }` );
      } else if ( isAbortError( error ) ) {
        this.log.warn( `-> ${ path }: cancel` );
      } else {
        this.log.warn( `-> ${ path }: error: ${ error?.stack }` );
      }

      throw error;
    }
  }

  constructor ( sessionId: string, server: string, sdkVersion?: string, logCategory?: string ) {
    this.sessionId = sessionId;
    this.sdkVersion = sdkVersion;
    this.version = clientVersion;
    this.log = logger.getCategory( logCategory );

    // If we're running under node, we need to use a specific transport (nice-grpc-web doesn't work natively).
    this.channel = NiceGrpc.createChannel( server, detectNode ? NodeTransport.NodeHttpTransport() : undefined );
    this.clientFactory = NiceGrpc.createClientFactory().use( this.logMiddleware.bind( this ) );
  }

  public setAccessToken ( accessToken: string ) {
    if ( ( this.accessToken == undefined ) || ( this.accessToken != accessToken ) ) {
      this.log.debug( "access token refreshed" );
      this.accessToken = accessToken;
      this.setup();
    }
  }

  protected makeGrpcMetadata (): NiceGrpc.Metadata {
    let metadata = NiceGrpc.Metadata( {
      Authorization: `Bearer ${ this.accessToken }`,
      Version: this.version,
      SessionId: this.sessionId
    } );
    if ( this.sdkVersion != undefined ) {
      metadata.set( "SdkVersion", this.sdkVersion );
    }
    return metadata;
  }

  protected setup (): void {
    let options = {
      metadata: this.makeGrpcMetadata(),
    };
    this._setup( options );
  }

  protected _setup ( options: NiceGrpc.CallOptions ): void {
  }
}
