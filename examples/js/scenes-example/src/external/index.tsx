/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
import React, { useEffect, useRef, useState } from 'react';

import { BroadcastKit } from '../broadcastkit/index';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import type { } from '@mui/lab/themeAugmentation';
import TextField from '@mui/material/TextField';

interface CustomConfig {
  handleUrlChange?: any,
  urlValue?: string;
  setUrlValue?: any;
  handleUrlCommit?: any,

  name: string;
}

function createCustomConfigState ( customConfigArray: CustomConfig[], broadcastKit: BroadcastKit, name: string, initialUrl: string, onUrlChange?: any ) {
  let customConfig: CustomConfig = { name: name };
  customConfigArray.push( customConfig );
  [ customConfig.urlValue, customConfig.setUrlValue ] = useState( initialUrl );

  customConfig.handleUrlChange = ( event: any ) => {
    console.log( event.target.value );
    customConfig.setUrlValue( event.target.value );
  };

  customConfig.handleUrlCommit = ( event: React.MouseEvent<HTMLElement> ) => {
    console.log( customConfig.urlValue );
    if ( onUrlChange )
      onUrlChange( customConfig.urlValue );
  };
}

export const ExternalSources = ( props: { broadcastKit: BroadcastKit; } ) => {

  let customCamConfigArray: CustomConfig[] = [];
  createCustomConfigState( customCamConfigArray, props.broadcastKit, "cam3", props.broadcastKit.getLiveSource( 'cam3' ).url );
  createCustomConfigState( customCamConfigArray, props.broadcastKit, "cam4", props.broadcastKit.getLiveSource( 'cam4' ).url );

  //createCustomConfigState( customCamConfigArray, broadcastKit, "webrtc", broadcastKit.createGuestUrl('guest'));

  let customGfxConfigArray: CustomConfig[] = [];
  createCustomConfigState( customGfxConfigArray, props.broadcastKit, "gfx1", props.broadcastKit.getInsertSourceGfxUrl( props.broadcastKit.getScene( 'mix1' ), 'gfx1' ), ( newValue: string ) => {
    props.broadcastKit.updateGraphicsInScene( props.broadcastKit.getScene( 'mix1' ), 'gfx1', newValue );
  } );
  createCustomConfigState( customGfxConfigArray, props.broadcastKit, "gfx2", props.broadcastKit.getInsertSourceGfxUrl( props.broadcastKit.getScene( 'mix2' ), 'gfx2' ), ( newValue: string ) => {
    props.broadcastKit.updateGraphicsInScene( props.broadcastKit.getScene( 'mix2' ), 'gfx2', newValue );
  } );

  return (
    <Stack
      direction="column"
      spacing={2}
    >
      <Divider textAlign="left">External Cameras</Divider>
      {customCamConfigArray.map( ( config, i ) => {

        return <TextField
          fullWidth
          id="outlined-read-only-input"
          key={config.name}
          label={config.name}
          value={config.urlValue}
          InputProps={{
            readOnly: true,

          }} />;
      } )}

      <Divider textAlign="left">External Graphics</Divider>
      {customGfxConfigArray.map( ( config, i ) => {
        return <Stack direction="row" spacing={1}>
          <TextField
            fullWidth
            id="outlined-helperText"
            key={config.name}
            label={config.name}
            value={config.urlValue}
            onChange={config.handleUrlChange}
          />
          <Button key={config.name + ".update"} onClick={config.handleUrlCommit} href="#text-buttons">Update</Button>
        </Stack>;
      } )}
    </Stack>
  );
};

