/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
/**
 * API.stream Backend Authorizaation Example
 * https://api.stream/
 *
 * @summary an exemplary fake partner backend showing user-to-lightstream authentication
 */

import express, { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

// in this example, we use express as the partner backend server
const LISTEN_PORT = 3000;
const app = express();
app.use( express.json() );

// initialize LightstreamApi with the secret API key assigned to partner
// (only to be used on backend/B2B connections from partner to lightstream)
const APISTREAM_API_KEY = 'abc123'; // CHANGEME
const APISTREAM_SERVER = 'https://live.api.stream/live/v2';

// setup REST call to LightstreamAPI
const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": true,
  "X-Requested-With": "XMLHttpRequest",
  "X-Api-Key": `${ APISTREAM_API_KEY }`
};
const http = axios.create( {
  baseURL: APISTREAM_SERVER,
  headers
} );

// is this user authorized on the partner's system?
function authenticateUser ( user: string, password: string ): boolean {
  // TODO: check if this user is actually authorized on partner system
  return true;
}

// pretend partner-hosted API to authenticate user of partner's system
async function login ( request: Request, response: Response, next: NextFunction ) {

  // user of partner system
  let user = request.body[ 'user' ];
  let password = request.body[ 'password' ];

  // is this user authorized on the partner's system?
  let authenticated = authenticateUser( user, password );

  // user of partner's system authorized, obtain a lightstream access token on their behalf
  if ( authenticated ) {
    try {
      let res = await http.post(
        `/authentication/token`,
        { serviceUserId: user }
      );
      response.status( 200 ).json( res.data );
    }
    catch ( err ) {
      response.status( 401 ).send( "Unable to authenticate" );
    }
  }
  else {
    response.status( 401 ).send( "Not authenticated" );
  }
};

// start server
app.post( '/login', login );
app.listen( LISTEN_PORT, () => {
  console.log( `listening on port ${ LISTEN_PORT }.` );
} );

/*
CURL TEST: curl -v -X POST http://127.0.0.1:3000/login -H 'Content-Type: application/json' -d '{"user":"bobsmith","password":"1234"}'
*/