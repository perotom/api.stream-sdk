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

public class RequestMetadata extends CallCredentials {
    static final Metadata.Key<String> VERSION_METADATA_KEY = Metadata.Key.of("Version", ASCII_STRING_MARSHALLER);
    static final Metadata.Key<String> SDK_VERSION_METADATA_KEY = Metadata.Key.of("SdkVersion", ASCII_STRING_MARSHALLER);
    static final Metadata.Key<String> SESSION_ID_METADATA_KEY = Metadata.Key.of("SessionId", ASCII_STRING_MARSHALLER);

    private final String sessionId;
    private final String sdkVersion;
    private final String version;

    public RequestMetadata(String sessionId, String version, String sdkVersion) {
        this.sessionId = sessionId;
        this.sdkVersion = sdkVersion;
        this.version = version;
    }

    @Override
    public void applyRequestMetadata(final RequestInfo requestInfo, final Executor executor,
                                     final MetadataApplier metadataApplier) {

        executor.execute(new Runnable() {
            @Override
            public void run() {
                try {
                    Metadata headers = new Metadata();
                    if (sessionId != null) {
                        headers.put(SESSION_ID_METADATA_KEY, sessionId);
                    }
                    if (sdkVersion != null) {
                        headers.put(SDK_VERSION_METADATA_KEY, sdkVersion);
                    }
                    if (version != null) {
                        headers.put(VERSION_METADATA_KEY, version);
                    }
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