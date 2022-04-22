/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
import React, { useEffect, useRef, useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Style from '../shared/shared.module.css';
import '../index.css';

import ReCAPTCHA from "react-google-recaptcha";
import axios, { AxiosResponse } from 'axios';
import { nanoid } from 'nanoid';

import type { } from '@mui/lab/themeAugmentation';

// NOT A SECRET
const RECAPTCHA_SITE_KEY = '6Lc0HIUfAAAAAIdsyq7vB_3c3skiVvltzdUTCUSx';

// Determine whether this is running on API.stream
const isLiveURL = () => {
  return [ 'live.api.stream', 'live.stream.horse', 'localhost' ].some( ( x ) =>
    location.host.includes( x ),
  );
};

const storage = {
  quality: localStorage.getItem( 'quality' ) || '720p/30/CPU',
};

export const Login = ( props: {
  apiKey: string | undefined,
  onLogin: ( {
    token,
    quality
  }: {
    token: string;
    quality: string;
  } ) => void;
} ) => {
  const { onLogin } = props;
  const [ recaptchaToken, setRecaptchaToken ] = useState<string>();
  const [ quality, setQuality ] = useState( storage.quality );

  const login = async ( e: any ) => {
    e.preventDefault();

    let token: string;
    // If this demo is running on API.stream, use captcha login
    if ( isLiveURL() && ( props.apiKey == undefined ) ) {
      const http = axios.create( {
        baseURL: location.host.includes( 'localhost' )
          ? 'https://live.stream.horse/live/v2'
          : `https://${ location.host }/live/v2`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
        },
      } );
      let res = await http.post( `/demo/token`, {
        serviceId: "DEMO_API",
        serviceUserId: nanoid( 21 ),
        displayName: 'ApiDemo',
        recaptchaToken: recaptchaToken,
      } );
      token = res.data.accessToken as string;
    }
    // If you are running this demo locally, you will need to obtain an access token
    // as described here: https://www.api.stream/docs/api/auth/
    else {
      const http = axios.create( {
        baseURL: location.host.includes( 'localhost' )
          ? 'https://live.stream.horse/live/v2'
          : `https://${ location.host }/live/v2`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'X-Api-Key': `${ props.apiKey }`,
        },
      } );
      let res = await http.post( `/authentication/token`, {
        serviceUserId: nanoid( 21 ),
        displayName: 'ApiDemo',
      } );
      token = res.data.accessToken as string;
    }

    onLogin( { token, quality } );
  };

  return (
    <form
      className={Style.column}
      onSubmit={login}
      style={{ width: 310, alignItems: 'flex-end' }}
    >
      <div className={Style.column}>
        <div style={{ marginTop: 10, height: 78 }}>
          <ReCAPTCHA
            theme="dark"
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={( token: string ) => {
              setRecaptchaToken( token );
            }}
          />
        </div>
      </div>

      <FormControl fullWidth>
        <InputLabel id="quality-select-label">Quality</InputLabel>
        <Select
          labelId="quality-select-label"
          id="quality-select"
          value={quality}
          label="Quality"
          onChange={( e ) => {
            setQuality( e.target.value );
          }}
        >
          <MenuItem value={'720p/30/CPU'}>720p/30/CPU</MenuItem>
          <MenuItem value={'1080p/30/CPU'}>1080p/30/CPU</MenuItem>
          <MenuItem value={'1080p/60/GPU'}>1080p/60/GPU</MenuItem>
        </Select>
      </FormControl>

      <button
        disabled={!recaptchaToken}
        onClick={login}
        style={{ marginTop: 8, width: 70 }}
      >
        Start
      </button>

    </form >
  );
};