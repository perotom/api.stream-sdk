
/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
import React, { useEffect, useRef, useState } from 'react';

import type { } from '@mui/lab/themeAugmentation';

export interface ButtonGroupConfig {
  handleChange?: any,
  reactValue?: any;
  setReactValue?: any;

  name: string;
}

export function IsRejected ( input: PromiseSettledResult<unknown> ): input is PromiseRejectedResult {
  return input.status === 'rejected';
}

export function IsFulfilled<T> ( input: PromiseSettledResult<T> ): input is PromiseFulfilledResult<T> {
  return input.status === 'fulfilled';
}

export function GetDirection ( buttonGroupMap: Map<string, ButtonGroupConfig>, buttonGroupName: string, insertName: string ): 'in' | 'out' {
  if ( ( buttonGroupMap.get( buttonGroupName ).reactValue as string[] ).includes( insertName ) )
    return 'out';
  else
    return 'in';
}

export function CreateButtonGroupState ( buttonGroupMap: Map<string, ButtonGroupConfig>, onChange: any, name: string, initial: string[], exclusive: boolean = true, enforceActive: boolean = true ) {
  let backgroundTransitionButtonGroupMap: ButtonGroupConfig = { name: name };
  buttonGroupMap.set( name, backgroundTransitionButtonGroupMap );
  if ( exclusive )
    [ backgroundTransitionButtonGroupMap.reactValue, backgroundTransitionButtonGroupMap.setReactValue ] = useState( initial[ 0 ] );
  else
    [ backgroundTransitionButtonGroupMap.reactValue, backgroundTransitionButtonGroupMap.setReactValue ] = useState( [ initial[ 0 ] ] );

  backgroundTransitionButtonGroupMap.handleChange = ( event: React.MouseEvent<HTMLElement>, newValue: any ) => {
    if ( !enforceActive || ( enforceActive && newValue != null ) ) {
      backgroundTransitionButtonGroupMap.setReactValue( newValue );
      if ( onChange )
        onChange( ( event.target as any ).value );
    }
  };
}
