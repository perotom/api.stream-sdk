/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
import React, { useEffect, useRef, useState } from 'react';

import { BroadcastKit } from '../broadcastkit/index';

import { LiveApiModel } from "@api.stream/sdk";

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type { } from '@mui/lab/themeAugmentation';
import TextField from '@mui/material/TextField';

import { ApiLogger, ApiLogCallback, EventLogCallback } from '../log';
import { ExternalSources } from '../external';
import { Scene } from '../scene';
import { Login } from '../login';
import { ButtonGroupConfig, CreateButtonGroupState, IsFulfilled } from '../shared/utils';

//const DEBUG_DEV_SERVER = 'https://live.stream.horse/live/v2';
const DEBUG_DEV_SERVER = 'http://127.0.0.1:7070';

const API_KEY: string | undefined = undefined;

const Project = ( props: { broadcastKit: BroadcastKit; } ) => {
  // const renderContainer = useRef();

  const [ isLive, setIsLive ] = useState( false );

  const [ programAddress, setProgramAddress ] = useState( props.broadcastKit.getDestinationUrl( 'primary' ) );

  let buttonGroupMap = new Map<string, ButtonGroupConfig>();

  CreateButtonGroupState( buttonGroupMap, ( newValue: string ) => {
    if ( newValue == 'start' )
      props.broadcastKit.startBroadcast();
    else
      props.broadcastKit.stopBroadcast();
  }, "broadcast", [ 'stop' ] );
  CreateButtonGroupState( buttonGroupMap, ( newValue: string ) => {
    props.broadcastKit.transitionToScene( buttonGroupMap.get( "sceneTransition" ).reactValue, props.broadcastKit.getScene( newValue ) );
  }, "selectScene", [ 'black' ] );
  CreateButtonGroupState( buttonGroupMap, undefined, "sceneTransition", [ 'dissolve' ] );

  let scenes = props.broadcastKit.getScenes();

  return (
    <Stack
      direction="column"
      spacing={2}
    >
      <div style={{ fontSize: 11, marginBottom: 14 }}>
        <div>
          <a
            onClick={() => {
              // Clear the session and reload
              localStorage.removeItem( 'token' );
              window.location.reload();
            }}
          >
            Reset
          </a>
        </div>
      </div>

      <Stack
        direction="row"
        spacing={2}
      >
        {scenes.map( ( scene, i ) => {
          return <Scene broadcastKit={props.broadcastKit} scene={scene} />;
        } )}
      </Stack >

      <Stack
        direction="row"
        spacing={2}
      >
        <Card variant="outlined">
          <Stack
            direction="row"
            spacing={2}
          >
            <Card>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Scene
                </Typography>

                <ToggleButtonGroup
                  orientation="vertical"
                  color="primary"
                  value={buttonGroupMap.get( "selectScene" ).reactValue}
                  exclusive
                  onChange={buttonGroupMap.get( "selectScene" ).handleChange}
                >
                  {props.broadcastKit.getScenes( true ).map( ( scene, i ) => {
                    return < ToggleButton key={scene.name} value={scene.name} >{scene.name}</ToggleButton>;
                  } )}
                </ToggleButtonGroup>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Transition
                </Typography>

                <ToggleButtonGroup
                  orientation="vertical"
                  color="primary"
                  value={buttonGroupMap.get( "sceneTransition" ).reactValue}
                  exclusive
                  onChange={buttonGroupMap.get( "sceneTransition" ).handleChange}
                >
                  {props.broadcastKit.getSceneTransitions().map( ( transition, i ) => {
                    return < ToggleButton key={transition} value={transition} >{transition}</ToggleButton>;
                  } )}
                </ToggleButtonGroup>
              </CardContent>
            </Card>
          </Stack>
        </Card>

        <Card variant="outlined">
          <ExternalSources broadcastKit={props.broadcastKit} />;
        </Card>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
      >
        <Card variant="outlined">
          <Stack
            direction="row"
            spacing={2}
          >



            <Card>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Broadcast
                </Typography>
                <ToggleButtonGroup
                  orientation="vertical"
                  color="primary"
                  value={buttonGroupMap.get( "broadcast" ).reactValue}
                  exclusive
                  onChange={buttonGroupMap.get( "broadcast" ).handleChange}
                >
                  < ToggleButton value="start">Start</ToggleButton>
                  < ToggleButton value="stop" >Stop</ToggleButton>
                </ToggleButtonGroup>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Program
                </Typography>

                <TextField
                  fullWidth
                  id="outlined-read-only-input"
                  label="Program"
                  value={programAddress}
                  InputProps={{
                    readOnly: true,
                  }} />
              </CardContent>
            </Card>
          </Stack>


        </Card>
      </Stack >
      <ApiLogger />
    </Stack >
  );
};

interface SceneState {
  name: string,
  defaultBackgroundSource: string,
}

async function buildScene ( broadcastKit: BroadcastKit, scene: SceneState, liveSources: BroadcastKit.Camera[] ): Promise<boolean> {
  let mix = broadcastKit.getOrCreateScene( scene.name );
  for ( let liveSource of liveSources ) {
    broadcastKit.getOrAddCameraToScene( mix, liveSource, 'background' );
  }
  broadcastKit.getOrAddStillToScene( mix, 'bkgnd',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Ubuntu_alternative_background.svg/1280px-Ubuntu_alternative_background.svg.png', 'background' );
  await broadcastKit.getOrAddMediaToScene( mix, 'media', "https://inf1artifactseus2.blob.core.windows.net/test-file/sync.mp4", 'background' );
  for ( let liveSource of liveSources ) {
    if ( liveSource.name == 'cam1' )
      broadcastKit.getOrAddCameraToScene( mix, liveSource, 'insert', broadcastKit.getInsertTransform( 'pip-ur' ) );
    else if ( liveSource.name == 'cam2' )
      broadcastKit.getOrAddCameraToScene( mix, liveSource, 'insert', broadcastKit.getInsertTransform( 'pip-ll' ) );
  }
  broadcastKit.getOrAddGraphicsToScene( mix, 'gfx1', "https://rainmaker.gg/overlay/e67cfd6ad57560962fddcf63611d2834/4", 'insert' );
  broadcastKit.getOrAddGraphicsToScene( mix, 'gfx2', "https://rainmaker.gg/overlay/e67cfd6ad57560962fddcf63611d2834/5", 'insert' );
  await broadcastKit.commitScene( mix );
  await broadcastKit.setInitialState( mix, false, scene.defaultBackgroundSource, scene.defaultBackgroundSource );

  return true;
}

async function setupProject ( broadcastKit: BroadcastKit ): Promise<string> {
  // create/fetch a project and collection to interact with.
  await broadcastKit.getOrCreateCollection();
  let project = await broadcastKit.getOrCreateProject( true );
  await broadcastKit.getOrCreateDestination( "primary", "rtmp://ingest.stream.horse/test", broadcastKit.getServiceUserId() );

  let createLiveSource: Promise<BroadcastKit.Camera>[] = [];
  createLiveSource.push( broadcastKit.getOrCreateLiveSource( "cam1", "rtmp://ingest.stream.horse/vod/BigBuckBunny.mp4" ) );
  createLiveSource.push( broadcastKit.getOrCreateLiveSource( "cam2", "rtmp://ingest.stream.horse/vod/TearsOfSteel.mp4" ) );
  createLiveSource.push( broadcastKit.getOrCreateLiveSource( "cam3" ) );
  createLiveSource.push( broadcastKit.getOrCreateLiveSource( "cam4" ) );
  const results = await Promise.allSettled( createLiveSource );
  const createLiveSourceSuccess = results.filter( IsFulfilled );

  let scenes: SceneState[] = [ { name: 'mix1', defaultBackgroundSource: 'cam1' }, { name: 'mix2', defaultBackgroundSource: 'cam2' } ];

  let buildSceneResults: Promise<boolean>[] = [];
  for ( let scene of scenes ) {
    buildSceneResults.push( buildScene( broadcastKit, scene, createLiveSourceSuccess.map( ls => ls.value ) ) );
  }
  const results2 = await Promise.allSettled( buildSceneResults );

  return project.projectId;
}

export const HostView = () => {
  const [ token, setToken ] = useState<string>( localStorage[ 'token' ] );
  const [ broadcastKit, setBroadcastKit ] = useState<BroadcastKit>( null );

  useEffect( () => {

    if ( !token ) return;

    // output rendering parameters
    let rendering: LiveApiModel.Rendering;

    switch ( localStorage.quality ) {
      case '720p/30/CPU':
        rendering = {
          video: {
            height: 720,
            width: 1280,
            framerate: 30,
          },
          quality: LiveApiModel.RenderingQuality.RENDERING_QUALITY_STANDARD
        };
        break;
      case '1080p/30/CPU':
        rendering = {
          video: {
            height: 1080,
            width: 1920,
            framerate: 30,
          },
          quality: LiveApiModel.RenderingQuality.RENDERING_QUALITY_STANDARD
        };
        break;
      case '1080p/60/GPU':
        rendering = {
          video: {
            height: 1080,
            width: 1920,
            framerate: 60,
          },
          quality: LiveApiModel.RenderingQuality.RENDERING_QUALITY_HIGH
        };
        break;
    }

    let bk = new BroadcastKit( rendering, { env: 'stage', logLevel: 'Trace', apiLogCallback: ApiLogCallback, eventLogCallback: EventLogCallback } );
    bk
      .load( token )
      .then( async () => {
        setupProject( bk )
          .then( e => setBroadcastKit( bk ) )
          .catch( ( e ) => {
            console.log( "ERROR:", e );
            setToken( null );
            localStorage.removeItem( 'token' );
          } );

      }
      );
  }, [ token ] );

  if ( !token ) {
    return (
      <Login apiKey={API_KEY}
        onLogin={( { token, quality } ) => {
          setToken( token );
          localStorage.setItem( 'quality', quality );
          localStorage.setItem( 'token', token );
        }}
      />
    );
  } else {
    if ( broadcastKit )
      return <Project broadcastKit={broadcastKit} />;
    else
      return <div>Loading...</div>;
  }
};

