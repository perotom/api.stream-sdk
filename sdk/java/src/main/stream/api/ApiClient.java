/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package stream.api;

import java.util.logging.Logger;

import io.grpc.*;
import stream.api.utils.JwtCredential;
import stream.api.utils.LogInterceptor;
import stream.api.utils.RequestMetadata;

public class ApiClient {
    private static final Logger logger = Logger.getLogger(ApiClient.class.getName());

    protected final ManagedChannel channel;
    protected final RequestMetadata metadata;
    protected JwtCredential jwtCredential;


    public ApiClient(String server, String sessionId, String version, String sdkVersion) {
        metadata = new RequestMetadata(sessionId, version, sdkVersion);

        if (server.contains("127.0.0.1")) {
            channel = ManagedChannelBuilder
                    .forTarget(server)
                    .intercept(new LogInterceptor())
                    .usePlaintext()
                    .build();
        }
        else {
            channel = ManagedChannelBuilder
                    .forTarget(server)
                    .intercept(new LogInterceptor())
                    .useTransportSecurity()
                    .build();
        }
    }

    public void setAccessToken(String accessToken) {
        if (jwtCredential == null)
            jwtCredential = new JwtCredential(accessToken);
        else
            jwtCredential.setJwt(accessToken);
    }
}
