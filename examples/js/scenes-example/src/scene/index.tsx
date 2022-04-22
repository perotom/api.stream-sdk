/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
import React, { useEffect, useRef, useState } from 'react';

import { BroadcastKit } from '../broadcastkit/index';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type { } from '@mui/lab/themeAugmentation';

import { ButtonGroupConfig, CreateButtonGroupState, GetDirection } from '../shared/utils';

const Root = styled( 'div' )( ( { theme } ) => ( {
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing( 1 ),
  },
} ) );

export const Scene = ( props: { broadcastKit: BroadcastKit; scene: BroadcastKit.Scene; } ) => {

  let buttonGroupMap = new Map<string, ButtonGroupConfig>();

  CreateButtonGroupState( buttonGroupMap, ( newValue: string ) => {
    props.broadcastKit.selectAudioInScene( props.scene, newValue, GetDirection( buttonGroupMap, props.scene.name + ".selectAudio", newValue ) );
  }, props.scene.name + ".selectAudio", props.broadcastKit.getSelectedAudioSources( props.scene ).map( source => source.name ), false, false );
  CreateButtonGroupState( buttonGroupMap, undefined, props.scene.name + ".backgroundTransition", [ 'dissolve' ] );
  CreateButtonGroupState( buttonGroupMap, ( newValue: string ) => {
    props.broadcastKit.transitionBackgroundInScene( props.scene, newValue, buttonGroupMap.get( props.scene.name + ".backgroundTransition" ).reactValue, 250 );
  },
    props.scene.name + ".selectBackground", [ ( props.broadcastKit.getSelectedBackground( props.scene ) ) ? props.broadcastKit.getSelectedBackground( props.scene ).name : undefined ] );

  CreateButtonGroupState( buttonGroupMap, ( newValue: string ) => {
    props.broadcastKit.selectInsertInScene( props.scene, newValue, GetDirection( buttonGroupMap, props.scene.name + ".selectInsert", newValue ), buttonGroupMap.get( props.scene.name + ".insertTransition" ).reactValue, 250 );
  }, props.scene.name + ".selectInsert", props.broadcastKit.getSelectedInsertSources( props.scene ).map( source => source.name ), false, false );

  CreateButtonGroupState( buttonGroupMap, undefined, props.scene.name + ".insertTransition", [ 'dissolve' ] );

  return <Card variant="outlined">
    <Root>
      <Typography variant="h3" component="div" gutterBottom>
        {props.scene.name}
      </Typography>

      <Divider textAlign="left">INSERT</Divider>

      <Stack
        direction="row"
        spacing={2}
      >

        <Card>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Source
            </Typography>

            <ToggleButtonGroup
              orientation="horizontal"
              color="primary"
              value={buttonGroupMap.get( props.scene.name + ".selectInsert" ).reactValue}
              onChange={buttonGroupMap.get( props.scene.name + ".selectInsert" ).handleChange}
            >
              {props.broadcastKit.getInserts( props.scene ).map( ( insert, i ) => {
                return < ToggleButton key={insert.name} value={insert.name} >{insert.name}</ToggleButton>;
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
              value={buttonGroupMap.get( props.scene.name + ".insertTransition" ).reactValue}
              exclusive
              onChange={buttonGroupMap.get( props.scene.name + ".insertTransition" ).handleChange}
            >
              {props.broadcastKit.getInsertTransitions().map( ( transition, i ) => {
                return < ToggleButton key={transition} value={transition} >{transition}</ToggleButton>;
              } )}
            </ToggleButtonGroup>
          </CardContent>
        </Card>
      </Stack>

      <Divider textAlign="left">BACKGROUND</Divider>

      <Stack
        direction="row"
        spacing={2}
      >
        <Card>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Source
            </Typography>

            <ToggleButtonGroup
              orientation="horizontal"
              color="primary"
              exclusive
              value={buttonGroupMap.get( props.scene.name + ".selectBackground" ).reactValue}
              onChange={buttonGroupMap.get( props.scene.name + ".selectBackground" ).handleChange}
            >
              {props.broadcastKit.getBackgrounds( props.scene ).map( ( background, i ) => {
                return < ToggleButton key={background.name} value={background.name} >{background.name}</ToggleButton>;
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
              value={buttonGroupMap.get( props.scene.name + ".backgroundTransition" ).reactValue}
              exclusive
              onChange={buttonGroupMap.get( props.scene.name + ".backgroundTransition" ).handleChange}
            >
              {props.broadcastKit.getBackgroundTransitions().map( ( transition, i ) => {
                return < ToggleButton key={transition} value={transition} >{transition}</ToggleButton>;
              } )}
            </ToggleButtonGroup>
          </CardContent></Card>
      </Stack>

      <Divider textAlign="left">AUDIO</Divider>

      <Stack
        direction="row"
        spacing={2}
      >
        <Card>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Source
            </Typography>

            <ToggleButtonGroup
              orientation="horizontal"
              color="primary"
              value={buttonGroupMap.get( props.scene.name + ".selectAudio" ).reactValue}
              onChange={buttonGroupMap.get( props.scene.name + ".selectAudio" ).handleChange}
            >
              {props.broadcastKit.getAudioSources( props.scene ).map( ( background, i ) => {
                return < ToggleButton key={background.name} value={background.name} >{background.name}</ToggleButton>;
              } )}
            </ToggleButtonGroup>
          </CardContent>
        </Card>
      </Stack>
    </Root>
  </Card>;
};