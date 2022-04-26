/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package stream.api;

import stream.api.live.*;
import stream.api.utils.ApiKeyCredential;
import stream.api.utils.AccessTokenRefreshCallback;
import stream.api.utils.ResponseMetadata;

import java.util.logging.Logger;

public class LiveApi extends ApiClient {
    private static final Logger logger = Logger.getLogger(LiveApi.class.getName());

    public static final String LIVEAPI_EVENT_PREFIX = "apistream:live";

    private AccessTokenRefreshCallback accessTokenRefreshCallback;
    private ResponseMetadata responseMetadata;

    public CollectionServiceGrpc.CollectionServiceBlockingStub collection;
    public ProjectServiceGrpc.ProjectServiceBlockingStub project;
    public SourceServiceGrpc.SourceServiceBlockingStub source;
    public DestinationServiceGrpc.DestinationServiceBlockingStub destination;
    public AuthenticationServiceGrpc.AuthenticationServiceBlockingStub authentication;
    public final BackendAuthenticationServiceGrpc.BackendAuthenticationServiceBlockingStub backendAuthentication;
    public final PublicAuthenticationServiceGrpc.PublicAuthenticationServiceBlockingStub publicAuthentication;



    public LiveApi(String server, String sessionId, String version, String sdkVersion, String apiKey, AccessTokenRefreshCallback callback) {
        super(server, sessionId, version, sdkVersion);
        this.accessTokenRefreshCallback = callback;

        backendAuthentication = BackendAuthenticationServiceGrpc.newBlockingStub(channel).withCallCredentials(metadata).withCallCredentials(new ApiKeyCredential(apiKey));
        publicAuthentication = PublicAuthenticationServiceGrpc.newBlockingStub(channel).withCallCredentials(metadata);
    }

    public void setAcccessToken(String accessToken) {
        super.setAccessToken(accessToken);

        if (responseMetadata == null) {
            responseMetadata = new ResponseMetadata(this.accessTokenRefreshCallback);

            collection = CollectionServiceGrpc.newBlockingStub(channel).withCallCredentials(metadata).withCallCredentials(jwtCredential).withInterceptors(responseMetadata);
            project = ProjectServiceGrpc.newBlockingStub(channel).withCallCredentials(metadata).withCallCredentials(jwtCredential).withInterceptors(responseMetadata);
            source = SourceServiceGrpc.newBlockingStub(channel).withCallCredentials(metadata).withCallCredentials(jwtCredential).withInterceptors(responseMetadata);
            destination = DestinationServiceGrpc.newBlockingStub(channel).withCallCredentials(metadata).withCallCredentials(jwtCredential).withInterceptors(responseMetadata);
            authentication = AuthenticationServiceGrpc.newBlockingStub(channel).withCallCredentials(metadata).withCallCredentials(jwtCredential).withInterceptors(responseMetadata);
        }
    }
}
