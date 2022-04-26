/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package stream.api;

import stream.api.layout.*;

import java.util.logging.Logger;

public class LayoutApi extends ApiClient {
    private static final Logger logger = Logger.getLogger(LayoutApi.class.getName());

    public LayerServiceGrpc.LayerServiceBlockingStub layer;
    public LayoutServiceGrpc.LayoutServiceBlockingStub layout;

    public LayoutApi(String server, String sessionId, String version, String sdkVersion) {
        super(server, sessionId, version, sdkVersion);
    }

    public void setAcccessToken(String accessToken) {
        super.setAccessToken(accessToken);

        if (layer == null) {
            layer = LayerServiceGrpc.newBlockingStub(channel).withCallCredentials(metadata).withCallCredentials(jwtCredential);
            layout = LayoutServiceGrpc.newBlockingStub(channel).withCallCredentials(metadata).withCallCredentials(jwtCredential);
        }
      }
}
