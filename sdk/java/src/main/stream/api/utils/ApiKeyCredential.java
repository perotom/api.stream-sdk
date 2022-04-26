/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package stream.api.utils;

import io.grpc.CallCredentials;
import io.grpc.Metadata;
import io.grpc.Status;
import java.util.concurrent.Executor;
import static io.grpc.Metadata.ASCII_STRING_MARSHALLER;

public class ApiKeyCredential extends CallCredentials {
    static final Metadata.Key<String> API_KEY_METADATA_KEY = Metadata.Key.of("X-Api-Key", ASCII_STRING_MARSHALLER);

    private final String apiKey;

    public ApiKeyCredential(String apiKey) {
        this.apiKey = apiKey;
    }

    @Override
    public void applyRequestMetadata(final RequestInfo requestInfo, final Executor executor,
                                     final MetadataApplier metadataApplier) {

        executor.execute(new Runnable() {
            @Override
            public void run() {
                try {
                    Metadata headers = new Metadata();
                    headers.put(API_KEY_METADATA_KEY,
                            apiKey);
                    metadataApplier.apply(headers);
                } catch (Throwable e) {
                    metadataApplier.fail(Status.UNAUTHENTICATED.withCause(e));
                }
            }
        });
    }

    @Override
    public void thisUsesUnstableApi() {
        // noop
    }
}