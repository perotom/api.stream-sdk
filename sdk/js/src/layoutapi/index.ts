/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
/**
 * @summary an API for creating cloud video applications
 */

import * as NiceGrpc from 'nice-grpc-web';
import * as LayoutApiModel from '@api.stream/protocol-layout-api';

import { ApiClient } from "../api";
import { EventApi } from '../eventapi';
import { RequiresSdkAuthentication } from '../api/decorator';

export type LayoutApiEventHandler<T extends LayoutApiModel.EventType> = (
  payload: LayoutApiModel.LayoutApiEventType<T>[ typeof LayoutApiModel.layoutApiEventMap[ T ] ],
  subType: LayoutApiModel.EventSubType,
) => void;

const LOG_CATEGORY = 'LayoutApi';

export class LayoutApi extends ApiClient {
  private static LAYOUTAPI_EVENT_PREFIX = 'apistream:layout';

  // access to the layout service
  @RequiresSdkAuthentication()
  layout: NiceGrpc.Client<typeof LayoutApiModel.LayoutServiceDefinition>;

  // access to the layer service
  @RequiresSdkAuthentication()
  layer: NiceGrpc.Client<typeof LayoutApiModel.LayerServiceDefinition>;

  private eventApi: EventApi;

  private handlers: { [ key: string ]: ( ( payload: unknown, subtype: string ) => void )[]; } = {};

  constructor (
    sessionId: string,
    eventApi: EventApi,
    server: string,
    sdkVersion?: string,
    apiLogCallback?: ApiClient.ApiLogCallback
  ) {
    super( sessionId, server, sdkVersion, LOG_CATEGORY, apiLogCallback );
    this.eventApi = eventApi;

    this.eventApi.on( 'event', { name: `${ LayoutApi.LAYOUTAPI_EVENT_PREFIX }:*`, ignoreSessionEvents: true }, ( evt ) => {
      const [ , eventName ] = evt.name.split( `${ LayoutApi.LAYOUTAPI_EVENT_PREFIX }:` );
      const [ type, subtype ] = eventName.split( ':' );
      const payload = evt.payload;

      for ( const handler of ( this.handlers[ type ] ?? [] ) ) {
        handler( Object.values( payload ).find( i => !!i ), subtype );
      }
    } );
  }

  protected _setup ( options: NiceGrpc.CallOptions ): void {
    this.layer = this.clientFactory.create(
      LayoutApiModel.LayerServiceDefinition,
      this.channel,
      {
        '*': options,
      },
    );

    this.layout = this.clientFactory.create(
      LayoutApiModel.LayoutServiceDefinition,
      this.channel,
      {
        '*': options,
      },
    );
  }

  /**
   * Subscribe to all events for a given layout.
   *
   * @param layoutId - the id of the layout to which you want to subscribe to layout events
   */
  public async subscribeToLayout ( layoutId: string ): Promise<void> {
    await Promise.all( [
      this.eventApi.subscribe( `${ LayoutApi.LAYOUTAPI_EVENT_PREFIX }:${ LayoutApiModel.EventType.EVENT_TYPE_LAYER }:*`, { target: { layoutId } } ),
      this.eventApi.subscribe( `${ LayoutApi.LAYOUTAPI_EVENT_PREFIX }:${ LayoutApiModel.EventType.EVENT_TYPE_LAYOUT }:*`, { target: { layoutId } } ),
    ] );
  };

  /**
   * Unsubscribe from all events for a given layout.
   *
   * @param layoutId - the id of the layout to which you want to unsubscribe to layout events
   */
  public async unsubscribeFromLayout ( layoutId: string ): Promise<void> {
    await Promise.all( [
      this.eventApi.unsubscribe( `${ LayoutApi.LAYOUTAPI_EVENT_PREFIX }:${ LayoutApiModel.EventType.EVENT_TYPE_LAYER }:*`, { target: { layoutId } } ),
      this.eventApi.unsubscribe( `${ LayoutApi.LAYOUTAPI_EVENT_PREFIX }:${ LayoutApiModel.EventType.EVENT_TYPE_LAYOUT }:*`, { target: { layoutId } } ),
    ] );
  }

  /**
   * Subscribe to all events for layouts in a project.
   *
   * @param collectionId - the id of the collection the layouts are in.
   * @param projectId - the id of the project the layouts are in.
   */
  public async subscribeToLayoutsInProject ( collectionId: string, projectId: string ): Promise<void> {
    await Promise.all( [
      this.eventApi.subscribe( `${ LayoutApi.LAYOUTAPI_EVENT_PREFIX }:${ LayoutApiModel.EventType.EVENT_TYPE_LAYER }:*`, { target: { collectionId, projectId } } ),
      this.eventApi.subscribe( `${ LayoutApi.LAYOUTAPI_EVENT_PREFIX }:${ LayoutApiModel.EventType.EVENT_TYPE_LAYOUT }:*`, { target: { collectionId, projectId } } ),
    ] );
  };

  /**
   * Unsubscribe from all events for layouts in a project.
   *
   * @param collectionId - the id of the collection the layouts are in.
   * @param projectId - the id of the project the layouts are in.
   */
  public async unsubscribeFromLayoutsInProject ( collectionId: string, projectId: string ): Promise<void> {
    await Promise.all( [
      this.eventApi.unsubscribe( `${ LayoutApi.LAYOUTAPI_EVENT_PREFIX }:${ LayoutApiModel.EventType.EVENT_TYPE_LAYER }:*`, { target: { collectionId, projectId } } ),
      this.eventApi.unsubscribe( `${ LayoutApi.LAYOUTAPI_EVENT_PREFIX }:${ LayoutApiModel.EventType.EVENT_TYPE_LAYOUT }:*`, { target: { collectionId, projectId } } ),
    ] );
  }

  /**
   * Register an event handler
   *
   * @param type Type of event
   * @param handler 
   */
  public on<T extends LayoutApiModel.EventType> (
    type: T,
    handler: LayoutApiEventHandler<T>
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
  public off<T extends LayoutApiModel.EventType> (
    type: T,
    handler: LayoutApiEventHandler<T>
  ): void {
    this.handlers[ type ] = this.handlers[ type ].filter( i => i !== handler );
  }
}
