/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package stream.api;

import com.google.protobuf.Value;
import org.junit.jupiter.api.Test;
import stream.api.layout.*;
import stream.api.live.*;

import java.util.logging.Logger;

public class TestHarness {
    private static final Logger logger = Logger.getLogger(TestHarness.class.getName());
    // INSERT YOUR API KEY HERE
    private static final String API_KEY = "x";
    private static final String SERVICE_USER = "TEST";
    @Test
    public void connect() {
        try {
            ApiStream.Options options = new ApiStream.Options();
            options.env = ApiStream.Environment.STAGE;
            options.apiKey = API_KEY;
            ApiStream apiStream = new ApiStream(options);

            CreateAccessTokenRequest.Builder accessTokenRequest = CreateAccessTokenRequest.newBuilder()
                    .setServiceUserId("TEST");
            CreateAccessTokenResponse accessTokenResponse = apiStream.LiveApi().backendAuthentication.createAccessToken(accessTokenRequest.build());
            logger.info("collectionResponse =" + accessTokenResponse);

            apiStream.load(accessTokenResponse.getAccessToken());

            CreateCollectionRequest.Builder collectionRequest = CreateCollectionRequest.newBuilder();
            CreateCollectionResponse collectionResponse = apiStream.LiveApi().collection.createCollection(collectionRequest.build());
            logger.info("collectionResponse =" + collectionResponse);

            CreateProjectRequest.Builder projectRequest = CreateProjectRequest.newBuilder()
                            .setCollectionId(collectionResponse.getCollection().getCollectionId())
                            .setMetadata(Value.newBuilder().setStringValue("hello world"))
                            .setComposition(Composition.newBuilder()
                                    .setScene(SceneComposition.newBuilder())
                            );
            CreateProjectResponse projectResponse = apiStream.LiveApi().project.createProject(projectRequest.build());
            logger.info("projectResponse =" + collectionResponse);

            CreateLayoutRequest.Builder layoutRequest = CreateLayoutRequest.newBuilder()
                    .setLayout(PartialLayout.newBuilder()
                            .setCollectionId(collectionResponse.getCollection().getCollectionId())
                            .setProjectId(projectResponse.getProject().getCollectionId()));
            Layout layoutResponse = apiStream.LayoutApi().layout.createLayout(layoutRequest.build());
            logger.info("layoutResponse =" + layoutResponse);
        } catch (Exception e) {
            logger.warning("failed: " + e.toString());
        }
    }
}
