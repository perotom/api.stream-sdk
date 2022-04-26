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

import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

public class LogInterceptor implements ClientInterceptor {
    private static final Logger logger = Logger.getLogger(LogInterceptor.class.getName());

    @Override
    public <M, R> ClientCall<M, R> interceptCall(
            final MethodDescriptor<M, R> method, CallOptions callOptions, Channel next) {
        return new BackendForwardingClientCall<M, R>(method,
                next.newCall(method, callOptions)) {

            @Override
            public void sendMessage(M message) {
                logger.info("Method: " + method + " Message: " + message);
                super.sendMessage(message);
            }

            @Override
            public void start(Listener<R> responseListener, Metadata headers) {
                BackendListener<R> backendListener = new BackendListener<>(methodName, responseListener);
                super.start(backendListener, headers);
            }
        };
    }

    private class BackendListener<R> extends ClientCall.Listener<R> {

        String methodName;
        ClientCall.Listener<R> responseListener;

        protected BackendListener(String methodName, ClientCall.Listener<R> responseListener) {
            super();
            this.methodName = methodName;
            this.responseListener = responseListener;
        }

        @Override
        public void onMessage(R message) {
            logger.info("Method: " + methodName + " Response: " + message);
            responseListener.onMessage(message);
        }

        @Override
        public void onHeaders(Metadata headers) {

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

        String methodName;

        protected BackendForwardingClientCall(MethodDescriptor<M, R> method, ClientCall delegate) {
            super(delegate);
            methodName = method.getFullMethodName();
        }
    }
}