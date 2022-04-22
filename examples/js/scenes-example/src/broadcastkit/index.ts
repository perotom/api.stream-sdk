
/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */

import { ApiStream, LiveApiModel, LayoutApiModel, LiveKitUtils } from "@api.stream/sdk";
import { nanoid } from "nanoid";

export class BroadcastKit {
  static DEFAULT_DISSOLVE_DURATION_MS = 250;

  MOCK_LAYOUT = false;

  private collection?: LiveApiModel.Collection;
  public project?: LiveApiModel.Project;

  private scenes: BroadcastKit.Scene[] = [];

  private api: ApiStream;
  private rendering: LiveApiModel.Rendering;
  private sceneTransitions: Map<BroadcastKit.SceneTransitionType, LayoutApiModel.Transition>;
  private insertTransforms: Map<BroadcastKit.InsertTransformType, BroadcastKit.InsertTransform>;

  constructor ( rendering: LiveApiModel.Rendering, opts: ApiStream.ApiStreamOptions ) {
    if ( opts.env == 'dev' )
      this.MOCK_LAYOUT = true;
    this.api = new ApiStream( opts );
    this.rendering = rendering;

    this.sceneTransitions = new Map<BroadcastKit.SceneTransitionType, LayoutApiModel.Transition>();
    this.sceneTransitions.set( 'dissolve', { fromLayoutIds: [], crossfade: { durationMs: BroadcastKit.DEFAULT_DISSOLVE_DURATION_MS } } );
    this.sceneTransitions.set( 'cut', { fromLayoutIds: [], cut: {} } );
    this.sceneTransitions.set( 'stinger-apistream', {
      fromLayoutIds: [], stinger: {
        cut: {
          cutPointMs: 475,
          media: {
            url: "https://www.api.stream/assets/example-stinger.webm",
            volume: 1
          }
        }
      }
    } );
    this.sceneTransitions.set( 'push-right', {
      fromLayoutIds: [], swipe: {
        direction: LayoutApiModel.Transition_TransitionDirection.TRANSITION_DIRECTION_RIGHT,
        durationMs: 500,
        combinedAnimation: LayoutApiModel.Transition_TransitionSwipeType.TRANSITION_SWIPE_TYPE_COMBINED
      }
    } );

    this.insertTransforms = new Map<BroadcastKit.InsertTransformType, BroadcastKit.InsertTransform>();
    this.insertTransforms.set( 'pip-ur', {
      width: ( rendering.video.width / 2 ) - ( rendering.video.width * .05 ),
      height: ( rendering.video.height / 2 ) - ( rendering.video.height * .05 ),
      x: ( rendering.video.width / 2 ) - ( rendering.video.width * .05 ),
      y: ( rendering.video.height * .05 )
    } );
    this.insertTransforms.set( 'pip-ll', {
      width: ( rendering.video.width / 2 ) - ( rendering.video.width * .05 ),
      height: ( rendering.video.height / 2 ) - ( rendering.video.height * .05 ),
      x: ( rendering.video.width * .05 ),
      y: ( rendering.video.height / 2 ) - ( rendering.video.width * .05 ),
    } );

  }

  async load ( accessToken: string ) {
    await this.api.load( accessToken );
  }

  getScenes ( includeBlack = false ): BroadcastKit.Scene[] {
    if ( includeBlack )
      return this.scenes;
    else
      return this.scenes.filter( scene => scene.name != 'black' );
  }

  getInsertTransforms (): string[] {
    return Array.from( this.insertTransforms.keys() );
  }

  getInsertTransform ( name: BroadcastKit.InsertTransformType ): BroadcastKit.InsertTransform {
    return this.insertTransforms.get( name );
  }

  getServiceUserId (): string {
    return this.api.getAccessToken().serviceUserId;
  }

  getDestinationUrl ( name: string ): string {
    let destination = this.project.destinations.find( destination => destination.metadata.name === name );
    return destination.address.rtmpPush.url + "/" + destination.address.rtmpPush.key;
  }

  getScene ( sceneName: string ): BroadcastKit.Scene {
    return this.scenes.find( scene => scene.name === sceneName );
  }

  getBackgrounds ( scene: BroadcastKit.Scene ): BroadcastKit.Source[] {
    return scene.sources.filter( source => source.layer == 'background' );
  }

  getInserts ( scene: BroadcastKit.Scene ): BroadcastKit.Source[] {
    return scene.sources.filter( source => source.layer == 'insert' );
  }

  getSceneTransitions (): string[] {
    return Array.from( this.sceneTransitions.keys() );
  }

  getInsertTransitions (): string[] {
    return BroadcastKit.InsertTransitionTypeArray.map( transitionType => transitionType.toString() );
  }

  getBackgroundTransitions (): string[] {
    return BroadcastKit.BackgroundTransitionTypeArray.map( transitionType => transitionType.toString() );
  }

  getAudioSources ( scene: BroadcastKit.Scene ): BroadcastKit.Source[] {
    return scene.sources.filter( source => ( source.layer == 'background' && ( source.type == 'cam' || source.type == 'media' || source.type == 'webrtc' ) ) );
  }

  getBackgroundSource ( scene: BroadcastKit.Scene, backgroundSourceName: string ): BroadcastKit.Source {
    return scene.sources.find( source => source.layer == 'background' && source.name === backgroundSourceName );
  }

  getInsertSource ( scene: BroadcastKit.Scene, insertSourceName: string ): BroadcastKit.Source {
    return scene.sources.find( source => source.layer == 'insert' && source.name === insertSourceName );
  }

  getSelectedBackground ( scene: BroadcastKit.Scene ): BroadcastKit.Source {
    return scene.sources.find( source => source.layer == 'background' && source.videoSelected === true );
  }

  getSelectedAudioSources ( scene: BroadcastKit.Scene ): BroadcastKit.Source[] {
    return scene.sources.filter( source => source.layer == 'background' && source.audioSelected === true );
  }

  getSelectedInsertSources ( scene: BroadcastKit.Scene ): BroadcastKit.Source[] {
    return scene.sources.filter( source => source.layer == 'insert' && source.videoSelected === true );
  }

  getInsertSourceGfxUrl ( scene: BroadcastKit.Scene, insertSourceName: string ): string {
    return scene.sources.find( source => source.layer == 'insert' && source.name === insertSourceName ).layerConfig.data.url;
  }

  getLiveSource ( name: string ): BroadcastKit.Camera {
    // Look up an existing source from the project state.
    const existingSource = this.project?.sources.find( src => src.metadata?.[ 'name' ] === name );

    if ( existingSource ) {
      return {
        name: name,
        srcId: existingSource.sourceId as string,
        url: ( existingSource.address.rtmpPush ) ? existingSource.address.rtmpPush.url : existingSource.address.rtmpPull.url
      };
    }
  }

  async getRendererUrl (): Promise<string> {
    let response = await this.api.LiveApi().authentication.createGuestAccessToken( {
      collectionId: this.collection.collectionId,
      projectId: this.project.projectId,
      role: LiveApiModel.Role.ROLE_VIEWER,
      token: {
        direct: {
          displayName: "preview",
          serviceUserId: "preview"
        }
      }
    } );
    return "https://rmc-layout-render.streamjar.io/?at=" + response.accessToken + "&debug=true";
  };

  //Find or create to a collection
  async getOrCreateCollection () {
    // Find the first collection under this authentication scope.
    let collection = await this.api.LiveApi().collection.getCollections( {} )
      .then( resp => {
        return resp.collections[ 0 ];
      } );

    // Create the collection if it doesn't exist.
    if ( !collection ) {
      collection = await this.api.LiveApi().collection?.createCollection( {} )
        .then( response => response.collection );
    }

    // Subscribe to any collection events via the EventsAPI
    await this.api.LiveApi().subscribeToCollection( this.collection?.collectionId as string );

    this.collection = collection;

    return collection;
  }

  /**
   * Find or create a project.
   */
  async getOrCreateProject ( debug: boolean = false ) {
    // Use the first project if we've already loaded the scene.
    if ( this.collection?.projects?.length ) {
      const response = await this.api.LiveApi().project?.getProject( { collectionId: this.collection.collectionId, projectId: this.collection?.projects[ 0 ].projectId, status: false } );

      // update to latest rendering properties
      const response2 = await this.api.LiveApi().project?.updateProject( {
        collectionId: this.collection.collectionId,
        projectId: this.collection?.projects[ 0 ].projectId,
        rendering: this.rendering,
        composition: {
          scene: { debug: debug }
        },
        updateMask: [ "rendering", "composition.scene.debug" ]
      } );
      this.project = response2.project;
    }
    else {
      // Create a new project
      const response = await this.api.LiveApi().project?.createProject( {
        collectionId: this.collection?.collectionId,
        metadata: {},
        rendering: this.rendering,
        composition: {
          scene: {
            debug: debug
          }
        },
        webrtc: {
          hosted: {}
        }
      } );
      this.project = response.project;
    }

    // Subscribe to any project events.
    await this.api.LiveApi().subscribeToProject( this.collection?.collectionId, this.project?.projectId );

    let black = await this.getOrCreateScene( 'black' );
    await this.getOrAddMatteToScene( black, 'black', 'black', 'background' );
    await this.commitScene( black );
    await this.setInitialState( black, true, 'black', 'black' );

    return this.project;
  }

  async commitScene ( scene: BroadcastKit.Scene ) {

    if ( this.MOCK_LAYOUT ) {
      scene.layoutId = nanoid( 14 );
      for ( let source of scene.sources ) {
        source.layerId = nanoid( 14 );
      }
      return;
    }

    let layersToAdd: Partial<LayoutApiModel.Layer>[] = [];
    let layersToDelete: LayoutApiModel.Layer[] = [];

    const layout = await this.getOrCreateLayout( scene.name );
    scene.layoutId = layout.id;

    // list existing layers in this layout
    const response = await this.api.LayoutApi().layer.listLayers( { layoutId: scene.layoutId } );
    const rootLayer = response.layers.find( layer => layer.type === 'root' );

    for ( let source of scene.sources ) {
      let existingLayer = response.layers.find( layer => ( layer.metadata.name === source.name ) && ( layer.metadata.layer == source.layer ) );
      if ( existingLayer == undefined )
        layersToAdd.push( source.layerConfig );
      else
        source.layerId = existingLayer.id;
    }
    for ( let layer of response.layers ) {
      let source = scene.sources.find( source => ( layer.metadata.name === source.name ) && ( layer.metadata.layer == source.layer ) );
      if ( ( source == undefined ) && ( layer.id != rootLayer.id ) )
        layersToDelete.push( layer );
    }

    let layersToAddIndicies: string[] = [];
    for ( let i = 0; i < layersToAdd.length; i++ )
      layersToAddIndicies.push( `index:${ i }` );

    let batch: LayoutApiModel.BatchLayerRequest_BatchItem[] = [];

    for ( let layer of layersToAdd ) {
      batch.push( {
        create: {
          ...layer,
          requestAnimation: [],
        },
      } );
    }
    for ( let layer of layersToDelete ) {
      batch.push( {
        delete: {
          id: layer.id
        }
      } );
    }

    let response2 = await this.api.LayoutApi().layer.batch( {
      layoutId: scene.layoutId,
      layers: [
        ...batch,
        {
          update: {
            id: rootLayer?.id,
            children: layersToAddIndicies,
            requestAnimation: []
          }
        }
      ]
    } );

    for ( let layer of response2.layers ) {
      if ( layer.create ) {
        let source = scene.sources.find( source => ( layer.create.metadata.name === source.name ) && ( layer.create.metadata.layer == source.layer ) );
        source.layerId = layer.create.id;
      }
    }
  }

  async modifyLayer ( layoutId: string, layerId: string, data: Partial<LayoutApiModel.Layer> ) {
    if ( this.MOCK_LAYOUT ) {
      return {
        layoutId: layoutId,
        id: layerId,
      };
    }

    // modify an existing layer
    await this.api.LayoutApi().layer.updateLayer( {
      layoutId: layoutId,
      layerId: layerId,
      layer: {
        ...data,
      }
    } );
  }

  async getOrCreateLayout ( name: string ): Promise<LayoutApiModel.Layout> {
    // list all layouts associated with this collection/project
    let lresponse = await this.api.LayoutApi().layout.listLayouts( {
      collectionId: this.collection?.collectionId,
      projectId: this.project?.projectId,
    } );

    // find our layout
    for ( let layout of lresponse.layouts ) {
      if ( layout.metadata[ 'name' ] == name ) {
        return layout;
      }
    }

    // create a new layout
    let nlresponse = await this.api.LayoutApi().layout.createLayout( {
      layout: {
        width: this.project?.rendering?.video?.width,
        height: this.project?.rendering?.video?.height,
        collectionId: this.collection?.collectionId,
        projectId: this.project?.projectId,

        // Important: set the type to be of a "scene".
        type: LayoutApiModel.LayoutType.LAYOUT_TYPE_SCENE,

        metadata: {
          name: name
        }
      }
    } );

    return nlresponse;
  }

  async getOrCreateLiveSource ( name: string, sourceUrl?: string ): Promise<BroadcastKit.Camera> {
    // Look up an existing source from the project state.
    const existingSource = this.project?.sources.find( src => src.metadata?.[ 'name' ] === name );

    if ( existingSource ) {
      return {
        name: name,
        srcId: existingSource.sourceId as string,
        url: ( existingSource.address.rtmpPush ) ? existingSource.address.rtmpPush.url : existingSource.address.rtmpPull.url
      };
    }

    let sourceAddress: LiveApiModel.DeepPartial<LiveApiModel.SourceAddress>;

    if ( sourceUrl != undefined ) {
      sourceAddress = {
        rtmpPull: {
          url: sourceUrl
        },
      };
    } else {
      sourceAddress = {
        rtmpPush: {
          enabled: true
        },
      };
    }

    // Create a new source if it doesn't exist.
    const response = await this.api.LiveApi().source?.createSource( {
      collectionId: this.collection?.collectionId,
      address: sourceAddress,
      metadata: {
        name: name
      }
    } );

    const projectResponse = await this.api.LiveApi().source?.addSourceToProject( {
      collectionId: this.collection?.collectionId,
      projectId: this.project?.projectId,
      sourceId: response.source?.sourceId
    } );

    this.project = projectResponse.project;

    return {
      name: name,
      srcId: response.source?.sourceId as string,
      url: ( response.source.address.rtmpPush ) ? response.source.address.rtmpPush.url : response.source.address.rtmpPull.url
    };
  }

  async getOrCreateDestination ( name: string, url: string, key: string ) {
    // does it exist?
    for ( let destination of this.project?.destinations as LiveApiModel.Destination[] ) {
      if ( destination.metadata[ 'name' ] == name ) {
        let dresponse = await this.api.LiveApi().destination?.updateDestination( {
          collectionId: this.collection?.collectionId,
          projectId: this.project?.projectId,
          destinationId: destination.destinationId,
          address: {
            rtmpPush: {
              key: key,
              url: url,
            },
          },
          enabled: true,
          updateMask: [ 'address', 'enabled' ]
        } );
        destination = dresponse.destination;
        return;
      }
    }

    let dresponse = await this.api.LiveApi().destination?.createDestination( {
      collectionId: this.collection?.collectionId,
      projectId: this.project?.projectId,
      metadata: {
        name: name
      },
      address: {
        rtmpPush: {
          key: key,
          url: url,
        },
      },
      enabled: true,
    } );
    this.project?.destinations.push( dresponse.destination );
  }

  async startBroadcast () {
    await this.api.LiveApi().project?.startProjectBroadcast( {
      collectionId: this.collection?.collectionId,
      projectId: this.project?.projectId
    } );
  }

  async stopBroadcast () {
    await this.api.LiveApi().project?.stopProjectBroadcast( {
      collectionId: this.collection?.collectionId,
      projectId: this.project?.projectId
    } );
  }

  makeFullscreenTransform (): BroadcastKit.InsertTransform {
    return {
      width: this.project.rendering.video.width,
      height: this.project.rendering.video.height,
      x: 0,
      y: 0
    };
  }

  getOrAddMatteToScene ( scene: BroadcastKit.Scene, name: string, color: string, layer: BroadcastKit.BusLayer,
    insertTransform?: BroadcastKit.InsertTransform ) {
    if ( scene.sources.find( source => ( source.type == 'matte' && source.name == name && source.layer == layer ) ) != undefined )
      return;

    let transform = this.makeFullscreenTransform();
    if ( layer == 'insert' ) {
      if ( insertTransform == undefined )
        insertTransform = this.makeFullscreenTransform();
      transform = {
        x: insertTransform.x + ( insertTransform.width / 2 ),
        y: insertTransform.y + ( insertTransform.height / 2 ),
        width: 0,
        height: 0
      };
    }

    let ml: Partial<LayoutApiModel.Layer> = {
      type: 'square',
      data: {
        backgroundColor: color
      },
      metadata: {
        name: name,
        layer: layer
      },
      opacity: 0,
      ...transform
    };

    scene.sources.push( {
      name: name,
      type: 'matte',
      layer: layer,
      videoSelected: false,
      audioSelected: false,
      layerConfig: ml,
      insertTransform: insertTransform
    } );
  }

  getOrAddCameraToScene ( scene: BroadcastKit.Scene, camera: BroadcastKit.Camera, layer: BroadcastKit.BusLayer,
    insertTransform?: BroadcastKit.InsertTransform ) {
    if ( scene.sources.find( source => ( source.type == 'cam' && source.name == camera.name && source.layer == layer ) ) != undefined )
      return;

    let transform = this.makeFullscreenTransform();
    if ( layer == 'insert' ) {
      if ( insertTransform == undefined )
        insertTransform = this.makeFullscreenTransform();
      transform = {
        x: insertTransform.x + ( insertTransform.width / 2 ),
        y: insertTransform.y + ( insertTransform.height / 2 ),
        width: 0,
        height: 0
      };
    }

    const sl: Partial<LayoutApiModel.Layer> = {
      type: 'source',
      data: {
        source: {
          id: camera.srcId,
          volume: 0
        },
        onDisconnect: 'slate',
      },
      metadata: {
        name: camera.name,
        layer: layer
      },
      opacity: 0,
      ...transform
    };


    scene.sources.push( {
      name: camera.name,
      type: 'cam',
      layer: layer,
      videoSelected: false,
      audioSelected: false,
      layerConfig: sl,
      insertTransform: insertTransform
    } );
  }

  getOrAddGraphicsToScene ( scene: BroadcastKit.Scene, name: string, url: string, layer: BroadcastKit.BusLayer,
    insertTransform?: BroadcastKit.InsertTransform ) {
    if ( scene.sources.find( source => ( source.type == 'gfx' && source.name == name && source.layer == layer ) ) != undefined )
      return;

    let transform = this.makeFullscreenTransform();
    if ( layer == 'insert' ) {
      if ( insertTransform == undefined )
        insertTransform = this.makeFullscreenTransform();
      transform = {
        x: insertTransform.x + ( insertTransform.width / 2 ),
        y: insertTransform.y + ( insertTransform.height / 2 ),
        width: 0,
        height: 0
      };
    }

    const il: Partial<LayoutApiModel.Layer> = {
      type: 'webpage',
      data: {
        url: url,
        mode: 'keep-loaded'
      },
      metadata: {
        name: name,
        layer: layer
      },
      opacity: 0,
      ...transform
    };

    scene.sources.push( {
      name: name,
      type: 'gfx',
      layer: layer,
      videoSelected: false,
      audioSelected: false,
      layerConfig: il,
      insertTransform: insertTransform
    } );
  }

  getOrAddMediaToScene ( scene: BroadcastKit.Scene, name: string, url: string, layer: BroadcastKit.BusLayer,
    insertTransform?: BroadcastKit.InsertTransform ) {
    if ( scene.sources.find( source => ( source.type == 'media' && source.name == name && source.layer == layer ) ) != undefined )
      return;

    let transform = this.makeFullscreenTransform();
    if ( insertTransform && layer == 'insert' )
      transform = insertTransform;

    const ml = {
      type: 'video',
      data: {
        media: {
          url: url,
          volume: 0
        }
      },
      metadata: {
        name: name,
        layer: layer
      },
      opacity: 0,
      ...transform
    };

    scene.sources.push( {
      name: name,
      type: 'media',
      layer: layer,
      videoSelected: false,
      audioSelected: false,
      layerConfig: ml,
      insertTransform: insertTransform
    } );
  }

  getOrAddStillToScene ( scene: BroadcastKit.Scene, name: string, url: string, layer: BroadcastKit.BusLayer,
    insertTransform?: BroadcastKit.InsertTransform ) {
    if ( scene.sources.find( source => ( source.type == 'media' && source.name == name && source.layer == layer ) ) != undefined )
      return;

    let transform = this.makeFullscreenTransform();
    if ( layer == 'insert' ) {
      if ( insertTransform == undefined )
        insertTransform = this.makeFullscreenTransform();
      transform = {
        x: insertTransform.x + ( insertTransform.width / 2 ),
        y: insertTransform.y + ( insertTransform.height / 2 ),
        width: 0,
        height: 0
      };
    }

    const ml = {
      type: 'image',
      data: {
        media: {
          url: url
        }
      },
      metadata: {
        name: name,
        layer: layer
      },
      opacity: 0,
      ...transform
    };

    scene.sources.push( {
      name: name,
      type: 'still',
      layer: layer,
      videoSelected: false,
      audioSelected: false,
      layerConfig: ml,
      insertTransform: insertTransform
    } );
  }

  getOrAddWebRtcToScene ( scene: BroadcastKit.Scene, name: string, participantId: string, layer: BroadcastKit.BusLayer,
    insertTransform?: BroadcastKit.InsertTransform ) {
    if ( scene.sources.find( source => ( source.type == 'webrtc' && source.name == name && source.layer == layer ) ) != undefined )
      return;

    let transform = this.makeFullscreenTransform();
    if ( layer == 'insert' ) {
      if ( insertTransform == undefined )
        insertTransform = this.makeFullscreenTransform();
      transform = {
        x: insertTransform.x + ( insertTransform.width / 2 ),
        y: insertTransform.y + ( insertTransform.height / 2 ),
        width: 0,
        height: 0
      };
    }

    const ml = {
      type: 'webrtc',
      data: {
        webrtc: {
          id: participantId,
          type: 'webcam',
          volume: 0
        }
      },
      metadata: {
        name: name,
        layer: layer
      },
      opacity: 0,
      ...transform
    };

    scene.sources.push( {
      name: name,
      type: 'webrtc',
      layer: layer,
      videoSelected: false,
      audioSelected: false,
      layerConfig: ml,
      insertTransform: insertTransform
    } );
  }

  async updateGraphicsInScene ( scene: BroadcastKit.Scene, name: string, url: string ) {

    const graphics = scene.sources.filter( src => src.name === name );

    let batch: LayoutApiModel.BatchLayerRequest_BatchItem[] = [];
    for ( let source of graphics ) {
      batch.push( {
        update: {
          id: source.layerId,
          data: {
            url: url
          },
          requestAnimation: []
        }
      } );
      source.layerConfig.data.url = url;
    }

    await this.api.LayoutApi().layer.batch( {
      layoutId: scene.layoutId,
      layers: batch
    } );
  }


  getOrCreateScene ( name: string ): BroadcastKit.Scene {

    let scene: BroadcastKit.Scene = {
      name: name,
      sources: [],
      selected: false,
      selectedTransition: undefined
    };
    this.scenes.push( scene );

    return scene;
  };

  buildData ( source: BroadcastKit.Source, volume: number ): any {
    let data: any = {};
    switch ( source.type ) {
      case 'cam':
        data = {
          source: {
            id: source.layerConfig.data.source.id,
            volume: volume
          },
          onDisconnect: 'slate',
        };
        break;

      case 'media':
        data = {
          media: {
            url: source.layerConfig.data.media.url,
            volume: volume
          },
        };
        break;

      case 'webrtc':
        data = {
          webrtc: {
            id: source.layerConfig.data.webrtc.id,
            type: 'webcam',
            volume: volume
          }
        };
        break;

      case 'matte':
        data = {
          backgroundColor: source.layerConfig.data.backgroundColor
        };
        break;
    }

    return data;
  }

  async setInitialState ( scene: BroadcastKit.Scene, sceneSelect: boolean, backgroundSourceName: string, audioSourceName?: string ) {

    if ( sceneSelect ) {
      scene.selected = true;
      await this.api.LiveApi().project?.updateProject( {
        collectionId: this.collection?.collectionId,
        projectId: this.project?.projectId,
        composition: {
          scene: {
            selectedLayoutId: scene.layoutId
          },
        },
        updateMask: [ "composition.scene.selectedLayoutId" ],
      } );
    }

    let backgroundSource = this.getBackgroundSource( scene, backgroundSourceName );
    backgroundSource.videoSelected = true;

    let audioSource = this.getBackgroundSource( scene, audioSourceName );
    audioSource.audioSelected = true;
    let audioSourceData = this.buildData( audioSource, 1 );

    if ( this.MOCK_LAYOUT ) {
      return;
    }

    if ( backgroundSource.layerId == audioSourceData.layerId ) {
      await this.api.LayoutApi().layer.updateLayer( {
        layoutId: scene.layoutId,
        layerId: backgroundSource.layerId,
        layer: {
          opacity: 1,
          data: audioSourceData
        }
      } );
    } else {
      await this.api.LayoutApi().layer.batch( {
        layoutId: scene.layoutId,
        layers: [
          {
            update: {
              id: backgroundSource.layerId,
              opacity: 1,
            }
          },
          {
            update: {
              id: audioSource.layerId,
              opacity: 1,
              data: audioSourceData
            }
          },
        ],
      } );
    }
  }

  async transitionBackgroundInScene ( scene: BroadcastKit.Scene, backgroundSourceName: string, transitionType: BroadcastKit.BackgroundTransitionType = 'dissolve', durationInMs: number = BroadcastKit.DEFAULT_DISSOLVE_DURATION_MS ) {

    let newBackgroundSource = this.getBackgroundSource( scene, backgroundSourceName );
    let oldBackgroundSource = this.getSelectedBackground( scene );

    if ( oldBackgroundSource.layerId == newBackgroundSource.layerId )
      return;

    let transition: LayoutApiModel.LayerAnimation[] = [ {
      properties: [ "*" ],
      durationMs: durationInMs
    } ];

    const layer = await this.api.LayoutApi().layer.batch( {
      layers: [
        {
          update: {
            id: oldBackgroundSource.layerId,
            opacity: 0,
            requestAnimation: ( transitionType != 'cut' ) ? transition : []
          }
        },
        {
          update: {
            id: newBackgroundSource.layerId,
            opacity: 1,
            requestAnimation: ( transitionType != 'cut' ) ? transition : []
          }
        },
      ],
      layoutId: scene.layoutId,
    } );

    newBackgroundSource.videoSelected = true;
    oldBackgroundSource.videoSelected = false;
  }

  async selectAudioInScene ( scene: BroadcastKit.Scene, audioSourceName: string, direction: BroadcastKit.TransitionDirection ) {

    let audioSource = this.getBackgroundSource( scene, audioSourceName );

    if ( audioSource.audioSelected == ( direction == 'in' ) ? true : false )
      return;

    let newSourceData = this.buildData( audioSource, ( direction == 'in' ) ? 1 : 0 );

    const layer = await this.api.LayoutApi().layer.updateLayer( {
      layoutId: scene.layoutId,
      layerId: audioSource.layerId,
      layer: {
        data: newSourceData
      }
    } );

    audioSource.audioSelected = ( direction == 'in' ) ? true : false;
  }

  async selectInsertInScene ( scene: BroadcastKit.Scene, insertSourceName: string, direction: BroadcastKit.TransitionDirection,
    transitionType: BroadcastKit.InsertTransitionType = 'dissolve', durationInMs: number = BroadcastKit.DEFAULT_DISSOLVE_DURATION_MS ) {

    let insertSource = this.getInsertSource( scene, insertSourceName );

    if ( insertSource.videoSelected == ( direction == 'in' ) ? true : false )
      return;

    let transition: LayoutApiModel.LayerAnimation[] = [ {
      properties: [ "*" ],
      durationMs: durationInMs
    } ];

    let toTransform: BroadcastKit.InsertTransform | undefined = undefined;
    let batch: LayoutApiModel.BatchLayerRequest_BatchItem[] = [];
    if ( transitionType == 'zoom-fade' && direction == 'in' ) {
      batch.push( {
        update: {
          id: insertSource.layerId,
          opacity: 0,
          requestAnimation: [],
          x: insertSource.insertTransform.x + ( insertSource.insertTransform.width / 2 ),
          y: insertSource.insertTransform.y + ( insertSource.insertTransform.height / 2 ),
          width: 0,
          height: 0
        },
      } );
      toTransform = insertSource.insertTransform;
    } else if ( transitionType == 'zoom-fade' && direction == 'out' ) {
      toTransform = {
        x: insertSource.insertTransform.x + ( insertSource.insertTransform.width / 2 ),
        y: insertSource.insertTransform.y + ( insertSource.insertTransform.height / 2 ),
        width: 0,
        height: 0
      };
    } else {
      batch.push( {
        update: {
          id: insertSource.layerId,
          opacity: 0,
          requestAnimation: [],
          ...insertSource.insertTransform
        },
      } );
    }

    batch.push( {
      update: {
        id: insertSource.layerId,
        opacity: ( direction == 'in' ) ? 1 : 0,
        requestAnimation: ( transitionType != 'cut' ) ? transition : [],
        ...toTransform
      },
    } );

    const layer = await this.api.LayoutApi().layer.batch( {
      layers: batch,
      layoutId: scene.layoutId,
      requestAnimationMode: LayoutApiModel.RequestAnimationMode.REQUEST_ANIMATION_MODE_SERIES
    } );

    insertSource.videoSelected = ( direction == 'in' ) ? true : false;
  }

  async transitionToScene ( transitionType: BroadcastKit.SceneTransitionType, newScene: BroadcastKit.Scene ) {
    const oldScene = this.scenes.find( scene => scene.selected === true );

    if ( oldScene.layoutId == newScene.layoutId )
      return;

    let transition = this.sceneTransitions.get( transitionType );
    if ( transition != newScene.selectedTransition ) {
      await this.api.LayoutApi().layout.updateLayout( {
        layoutId: newScene.layoutId,
        layout: {
          transitions: [
            transition
          ]
        }
      } );
      newScene.selectedTransition = transition;
    }

    await this.api.LiveApi().project?.updateProject( {
      collectionId: this.collection?.collectionId,
      projectId: this.project?.projectId,
      composition: {
        scene: {
          selectedLayoutId: newScene.layoutId
        },
      },
      updateMask: [ "composition.scene.selectedLayoutId" ],
    } );

    newScene.selected = true;
    oldScene.selected = false;
  }
};

export module BroadcastKit {
  export type LayerType = 'image' | 'video' | 'source' | 'webrtc' | 'webpage' | 'square';
  export type SourceType = 'matte' | 'cam' | 'media' | 'still' | 'gfx' | 'webrtc';

  export type BusLayer = 'background' | 'insert';
  export type TransitionDirection = 'in' | 'out';

  export const BackgroundTransitionTypeArray = [ "cut", "dissolve" ] as const;
  export type BackgroundTransitionType = typeof BackgroundTransitionTypeArray[ number ];

  export const InsertTransitionTypeArray = [ "cut", "dissolve", "zoom-fade" ] as const;
  export type InsertTransitionType = typeof InsertTransitionTypeArray[ number ];

  export type SceneTransitionType = 'cut' | 'dissolve' | 'stinger-apistream' | 'push-right';
  export type InsertTransformType = 'pip-ur' | 'pip-ll';

  export interface InsertTransform {
    x: number;
    y: number;
    width: number;
    height: number;
  };

  export interface Camera {
    name: string,
    srcId: string,
    url: string,
  }

  export interface Source {
    name: string,
    layerId?: string,

    type: SourceType;
    layer: BusLayer;

    videoSelected: boolean;
    audioSelected: boolean;

    layerConfig: Partial<LayoutApiModel.Layer>;
    insertTransform?: InsertTransform;
  }

  export interface Scene {
    name: string;
    layoutId?: string;

    sources: Source[];

    selected: boolean;

    selectedTransition: LayoutApiModel.Transition;
  }
}
