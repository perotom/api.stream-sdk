/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
/**
 * API.stream Scene Example
 * https://api.stream/
 *
 * This is a demonstratory backend application showing off some of the features present across
 * the API.stream backend services. This specific example programatically adds several live RTMP
 * sources to a project along with an external URL, uses the Layout API to create a simple 2D
 * composition with basic animation, and the Live API to produce a live broadcast to a RTMP
 * destination.
 */

import { ApiStream, LiveApiModel, LayoutApiModel } from "@api.stream/sdk";

import { ErrorType, Category, CategoryServiceFactory, CategoryConfiguration, LogLevel } from "typescript-logging";
CategoryServiceFactory.setDefaultConfiguration( new CategoryConfiguration( LogLevel.Info ) );
export const appLogger = new Category( "scenes" );

// your API.stream DEVELOPMENT API_KEY
const APISTREAM_API_KEY = "";
// live stream RTMP destination
const DESTINATION_RTMP_URL = "";
// an arbitrary user ID (used to secure documents)
const SERVICE_USER_ID = "SPACELY";

// output rendering parameters
const RENDERING: LiveApiModel.Rendering = {
  video: {
    height: 720,
    width: 1280,
    framerate: 30,
  },
  quality: LiveApiModel.RenderingQuality.RENDERING_QUALITY_STANDARD
};

let state: {
  collection?: LiveApiModel.Collection;
  project?: LiveApiModel.Project;
  layouts: LayoutApiModel.Layout[];
} = { layouts: [] };

type LayerType = 'image' | 'video' | 'source' | 'webrtc' | 'webpage' | 'square';

const api = new ApiStream( { logLevel: 'Trace', apiKey: APISTREAM_API_KEY } );

async function demo () {
  try {
    // create a 'user' access token
    const credentials = await api.LiveApi().backendAuthentication?.createAccessToken( { serviceUserId: SERVICE_USER_ID } ) as LiveApiModel.CreateAccessTokenResponse;
    // load it
    await api.load( credentials.accessToken );

    // create/fetch a project and collection to interact with.
    await getOrCreateCollection();
    await getOrCreateProject();

    // create/fetch 2 live RTMP video sources
    let game = await getOrCreateSource( "gameVideo" );
    let camera = await getOrCreateSource( "camera" );

    // create/fetch a live streaming RTMP destination
    await getOrCreateDestination( DESTINATION_RTMP_URL, SERVICE_USER_ID );

    // Setup scene 1
    const scene1 = await getOrCreateLayout( "scene1" );
    // add a background webpage
    await getOrCreateLayer( scene1, 'webpage', {
      data: { url: 'https://example.org' }, width: 1280, height: 720, x: 0, y: 0
    } );
    // overlay a RTMP source on top of it
    const gameLayer = await getOrCreateLayer( scene1, 'source', {
      data: {
        // Specify the source to display
        source: { id: game, volume: 1 },

        // onDisconnect enables you to customize the action when the source is disconnected.
        // 'slate' displays a disconnected image, 'hide' will remove the source from view and 'remain' will leave the frozen source.
        onDisconnect: 'slate',

        // If `onDisconnect` is set to 'slate', you can customize the image that we overlay the frozen source with.
        // disconnectedSlate: {
        //   url: 'https://example-image'
        // }
      }, width: 640, height: 360 /* assuming 16:9 source */
    } );

    // Setup scene 2
    const scene2 = await getOrCreateLayout( "scene2" );
    // add a background webpage
    await getOrCreateLayer( scene2, 'webpage', {
      data: { url: 'https://example.org' }, width: 1280, height: 720, x: 0, y: 0
    } );

    // overlay a RTMP source on top of it
    const cameraLayer = await getOrCreateLayer( scene2, 'source', { data: { source: { id: camera, volume: 1 } }, width: 640, height: 360 /* assuming 16:9 source */ } );

    // Start the broadcast.
    await api.LiveApi().project?.startProjectBroadcast( {
      collectionId: state.collection?.collectionId,
      projectId: state.project?.projectId
    } );

    // get status
    let response = await api.LiveApi().project.getProjectBroadcastStatus( {
      collectionId: state.collection?.collectionId,
      projectId: state.project?.projectId
    } );

    console.log( response.status?.region?.toString() );

    // manipulate the scenes
    for ( let i = 0; i < 5; i++ ) {
      appLogger.info( "Starting an iteration" );

      // animate the game layer
      await modifyLayer( scene1, gameLayer.id, {
        x: i * 50,
        y: i * 50,
        requestAnimation: [ {
          properties: [ 'x', 'y' ],
          durationMs: 500,
          easingMode: 'linear',
        } ]
      } );

      // wait 10 seconds
      await sleep( 10000 );

      // switch scenes
      appLogger.info( "Switching scene: " + state.layouts[ i % state.layouts.length ].id );
      await api.LiveApi().project?.updateProject( {
        collectionId: state.collection?.collectionId,
        projectId: state.project?.projectId,
        composition: {
          scene: {
            selectedLayoutId: state.layouts[ i % state.layouts.length ].id
          },
        },
        updateMask: [ "composition.scene.selectedLayoutId" ],
      } );
    }

    // stop the broadcast
    await api.LiveApi().project?.stopProjectBroadcast( {
      collectionId: state.collection?.collectionId,
      projectId: state.project?.projectId
    } );
  }
  catch ( err ) {
    appLogger.error( "unknown error", err as ErrorType );
  }
}

async function sleep ( ms: number ) {
  return new Promise( resolve => setTimeout( resolve, ms ) );
}

async function getOrCreateLayer ( layoutId: string, type: LayerType, config: Partial<LayoutApiModel.Layer> ): Promise<LayoutApiModel.Layer> {
  // list existing layers in this layout
  const response = await api.LayoutApi().layer.listLayers( { layoutId: layoutId } );

  // When a layout is created with the "scene" type, a layer with type "root" will be automatically created. Any 
  // layers should be assigned as children to that.
  const rootLayer = response.layers.find( layer => layer.type === 'root' );

  // Find a layer that roughly matches what we're looking for.
  const existingLayer = response.layers.find( layer => layer.type === type && JSON.stringify( config.data ) === JSON.stringify( layer.data ) );

  if ( existingLayer ) {
    return existingLayer;
  }

  // create a new layer
  const layer = await api.LayoutApi().layer.createLayer( {
    layoutId: layoutId,
    layer: {
      type,
      parentId: rootLayer?.id,
      ...config,
    },
  } );

  return layer;
}

async function modifyLayer ( layoutId: string, layerId: string, data: Partial<LayoutApiModel.Layer> ) {
  // modify an existing layer
  await api.LayoutApi().layer.updateLayer( {
    layoutId: layoutId,
    layerId: layerId,
    layer: {
      ...data,
    }
  } );
}

async function getOrCreateLayout ( name: string ): Promise<string> {
  // list all layouts associated with this collection/project
  let lresponse = await api.LayoutApi().layout.listLayouts( {
    collectionId: state.collection?.collectionId,
    projectId: state.project?.projectId,
  } );
  state.layouts = lresponse.layouts;

  // find our layout
  for ( let layout of lresponse.layouts ) {
    if ( layout.metadata[ 'name' ] == name ) {
      return layout.id;
    }
  }

  // create a new layout
  let nlresponse = await api.LayoutApi().layout.createLayout( {
    layout: {
      width: state.project?.rendering?.video?.width,
      height: state.project?.rendering?.video?.height,
      collectionId: state.collection?.collectionId,
      projectId: state.project?.projectId,

      // Important: set the type to be of a "scene".
      type: LayoutApiModel.LayoutType.LAYOUT_TYPE_SCENE,

      metadata: {
        name: name
      }
    }
  } );
  state.layouts.push( nlresponse );
  return nlresponse.id;
}

//Find or create to a collection
async function getOrCreateCollection () {
  // Find the first collection under this authentication scope.
  let collection = await api.LiveApi().collection.getCollections( {} )
    .then( resp => {
      return resp.collections[ 0 ];
    } );

  // Create the collection if it doesn't exist.
  if ( !collection ) {
    collection = await api.LiveApi().collection?.createCollection( {} )
      .then( response => response.collection! );
  }

  // Subscribe to any collection events via the EventsAPI
  await api.LiveApi().subscribeToCollection( state.collection?.collectionId as string );

  state.collection = collection;

  return collection;
}

/**
 * Find or create a project.
 */
async function getOrCreateProject () {
  // Use the first project if we've already loaded the scene.
  if ( state.collection?.projects?.length ) {
    const response = await api.LiveApi().project?.getProject( { collectionId: state.collection.collectionId, projectId: state.collection?.projects[ 0 ].projectId, status: false } );

    // update to latest rendering properties
    const response2 = await api.LiveApi().project?.updateProject( {
      collectionId: state.collection.collectionId,
      projectId: state.collection?.projects[ 0 ].projectId,
      rendering: RENDERING,
      updateMask: [ "rendering" ]
    } );
    state.project = response2.project;

    return state.project;
  }

  // Create a new project
  const response = await api.LiveApi().project?.createProject( {
    collectionId: state.collection?.collectionId,
    metadata: {},
    rendering: RENDERING,
    composition: {
      // The scene composition type enables use of the `selectedLayoutId` property.
      scene: {
      }
    },
  } );

  state.project = response.project;

  // Subscribe to any project events.
  await api.LiveApi().subscribeToProject( state.collection?.collectionId!, state.project?.projectId! );

  return response.project;
}

async function getOrCreateSource ( name: string ): Promise<string> {
  // Look up an existing source from the project state.
  const existingSource = state.project?.sources.find( src => src.metadata?.[ 'name' ] === name );

  if ( existingSource ) {
    return existingSource.sourceId;
  }

  // Create a new source if it doesn't exist.
  const response = await api.LiveApi().source?.createSource( {
    collectionId: state.collection?.collectionId,
    address: {
      rtmpPush: {
        enabled: true
      },
    },
    metadata: {
      name: name
    }
  } );
  appLogger.info( "created source: " + response );

  const projectResponse = await api.LiveApi().source?.addSourceToProject( {
    collectionId: state.collection?.collectionId,
    projectId: state.project?.projectId,
    sourceId: response.source?.sourceId
  } );

  state.project = projectResponse.project;

  return response.source?.sourceId as string;
}

async function getOrCreateDestination ( url: string, key: string ) {
  // does it exist?
  for ( let destination of state.project?.destinations as LiveApiModel.Destination[] ) {
    if ( ( destination.address?.rtmpPush?.url == url ) && ( destination.address?.rtmpPush?.key == key ) ) {
      return;
    }
  }

  let dresponse = await api.LiveApi().destination?.createDestination( {
    collectionId: state.collection?.collectionId,
    projectId: state.project?.projectId,
    address: {
      rtmpPush: {
        key: key,
        url: url,
      },
    },
    enabled: true,
  } );

  let presponse = await api.LiveApi().project?.getProject( {
    collectionId: state.collection?.collectionId,
    projectId: state.project?.projectId,
  } );

  state.project = presponse.project;
}

demo();
