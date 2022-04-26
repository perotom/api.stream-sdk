/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package stream.api.utils;

import io.grpc.CallOptions;
import io.grpc.Channel;
import io.grpc.ClientCall;
import io.grpc.ClientInterceptor;
import io.grpc.Metadata;
import io.grpc.MethodDescriptor;
import io.grpc.Status;

import java.util.logging.Logger;

import static io.grpc.Metadata.ASCII_STRING_MARSHALLER;

public class ResponseMetadata implements ClientInterceptor {
    static final String BEARER_TYPE = "Bearer";
    static final Metadata.Key<String> AUTHORIZATION_METADATA_KEY = Metadata.Key.of("Authorization", ASCII_STRING_MARSHALLER);

    private static final Logger logger = Logger.getLogger(LogInterceptor.class.getName());
    public AccessTokenRefreshCallback accessTokenRefreshCallback;

    public ResponseMetadata(AccessTokenRefreshCallback accessTokenRefreshCallback) {
        this.accessTokenRefreshCallback = accessTokenRefreshCallback;
    }

    @Override
    public <M, R> ClientCall<M, R> interceptCall(
            final MethodDescriptor<M, R> method, CallOptions callOptions, Channel next) {
        return new BackendForwardingClientCall<M, R>(method,
                next.newCall(method, callOptions)) {

            @Override
            public void sendMessage(M message) {
                super.sendMessage(message);
            }

            @Override
            public void start(Listener<R> responseListener, Metadata headers) {
                BackendListener<R> backendListener = new BackendListener<>(responseListener, accessTokenRefreshCallback);
                super.start(backendListener, headers);
            }
        };
    }

    private class BackendListener<R> extends ClientCall.Listener<R> {

        ClientCall.Listener<R> responseListener;
        public AccessTokenRefreshCallback accessTokenRefreshCallback;

        protected BackendListener(ClientCall.Listener<R> responseListener, AccessTokenRefreshCallback accessTokenRefreshCallback) {
            super();
            this.accessTokenRefreshCallback = accessTokenRefreshCallback;
            this.responseListener = responseListener;
        }

        @Override
        public void onMessage(R message) {
            responseListener.onMessage(message);
        }

        @Override
        public void onHeaders(Metadata headers) {
            if (headers.containsKey(AUTHORIZATION_METADATA_KEY)) {
                String[] parts = headers.get(AUTHORIZATION_METADATA_KEY).split(" ");
                if ((parts.length == 2) && (parts[0].equals(BEARER_TYPE)))
                    this.accessTokenRefreshCallback.accessTokenRefreshCallback(parts[1]);
            }

            responseListener.onHeaders(headers);
        }

        @Override
        public void onClose(Status status, Metadata trailers) {
            responseListener.onClose(status, trailers);
        }

        @Override
        public void onReady() {
            responseListener.onReady();
        }
    }

    private class BackendForwardingClientCall<M, R> extends io.grpc.ForwardingClientCall.SimpleForwardingClientCall<M, R> {

        protected BackendForwardingClientCall(MethodDescriptor<M, R> method, ClientCall delegate) {
            super(delegate);
        }
    }
}