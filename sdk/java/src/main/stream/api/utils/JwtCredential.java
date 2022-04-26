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

public class JwtCredential extends CallCredentials {
    static final String BEARER_TYPE = "Bearer";
    static final Metadata.Key<String> AUTHORIZATION_METADATA_KEY = Metadata.Key.of("Authorization", ASCII_STRING_MARSHALLER);

    private String jwt;

    public JwtCredential(String jwt) {
        setJwt(jwt);
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    @Override
    public void applyRequestMetadata(final RequestInfo requestInfo, final Executor executor,
                                     final MetadataApplier metadataApplier) {

        executor.execute(new Runnable() {
            @Override
            public void run() {
                try {
                    Metadata headers = new Metadata();
                    headers.put(AUTHORIZATION_METADATA_KEY,
                                String.format("%s %s", BEARER_TYPE, jwt));
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