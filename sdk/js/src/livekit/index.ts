/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
import * as LiveKitServer from "@api.stream/livekit-server-sdk";
import jwtDecode from 'jwt-decode';

export class LiveKitUtils {
  static decodeJwt ( sfuToken: string ): LiveKitServer.ClaimGrants {
    return jwtDecode<LiveKitServer.ClaimGrants>( sfuToken, { header: false } );
  }

  static isRoomAdmin ( sfuToken: string ): boolean {
    let grants = LiveKitUtils.decodeJwt( sfuToken );
    return grants.video.roomAdmin;
  }

  static getRoomName ( sfuToken: string ): string {
    let grants = LiveKitUtils.decodeJwt( sfuToken );
    return grants.video.room;
  }
}