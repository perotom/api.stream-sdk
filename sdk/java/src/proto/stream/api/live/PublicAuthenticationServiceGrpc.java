/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package stream.api.live;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * The Public Authentication Service provides token verification services
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.45.0)",
    comments = "Source: live/v21/api.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class PublicAuthenticationServiceGrpc {

  private PublicAuthenticationServiceGrpc() {}

  public static final String SERVICE_NAME = "live.v21.PublicAuthenticationService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<stream.api.live.GetJsonWebKeySetRequest,
      stream.api.live.GetJsonWebKeySetResponse> getGetJsonWebKeySetMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetJsonWebKeySet",
      requestType = stream.api.live.GetJsonWebKeySetRequest.class,
      responseType = stream.api.live.GetJsonWebKeySetResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.GetJsonWebKeySetRequest,
      stream.api.live.GetJsonWebKeySetResponse> getGetJsonWebKeySetMethod() {
    io.grpc.MethodDescriptor<stream.api.live.GetJsonWebKeySetRequest, stream.api.live.GetJsonWebKeySetResponse> getGetJsonWebKeySetMethod;
    if ((getGetJsonWebKeySetMethod = PublicAuthenticationServiceGrpc.getGetJsonWebKeySetMethod) == null) {
      synchronized (PublicAuthenticationServiceGrpc.class) {
        if ((getGetJsonWebKeySetMethod = PublicAuthenticationServiceGrpc.getGetJsonWebKeySetMethod) == null) {
          PublicAuthenticationServiceGrpc.getGetJsonWebKeySetMethod = getGetJsonWebKeySetMethod =
              io.grpc.MethodDescriptor.<stream.api.live.GetJsonWebKeySetRequest, stream.api.live.GetJsonWebKeySetResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetJsonWebKeySet"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GetJsonWebKeySetRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GetJsonWebKeySetResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PublicAuthenticationServiceMethodDescriptorSupplier("GetJsonWebKeySet"))
              .build();
        }
      }
    }
    return getGetJsonWebKeySetMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.GuestCodeRedirectRequest,
      stream.api.live.GuestCodeRedirectResponse> getGuestCodeRedirectMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GuestCodeRedirect",
      requestType = stream.api.live.GuestCodeRedirectRequest.class,
      responseType = stream.api.live.GuestCodeRedirectResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.GuestCodeRedirectRequest,
      stream.api.live.GuestCodeRedirectResponse> getGuestCodeRedirectMethod() {
    io.grpc.MethodDescriptor<stream.api.live.GuestCodeRedirectRequest, stream.api.live.GuestCodeRedirectResponse> getGuestCodeRedirectMethod;
    if ((getGuestCodeRedirectMethod = PublicAuthenticationServiceGrpc.getGuestCodeRedirectMethod) == null) {
      synchronized (PublicAuthenticationServiceGrpc.class) {
        if ((getGuestCodeRedirectMethod = PublicAuthenticationServiceGrpc.getGuestCodeRedirectMethod) == null) {
          PublicAuthenticationServiceGrpc.getGuestCodeRedirectMethod = getGuestCodeRedirectMethod =
              io.grpc.MethodDescriptor.<stream.api.live.GuestCodeRedirectRequest, stream.api.live.GuestCodeRedirectResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GuestCodeRedirect"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GuestCodeRedirectRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GuestCodeRedirectResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PublicAuthenticationServiceMethodDescriptorSupplier("GuestCodeRedirect"))
              .build();
        }
      }
    }
    return getGuestCodeRedirectMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static PublicAuthenticationServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PublicAuthenticationServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PublicAuthenticationServiceStub>() {
        @java.lang.Override
        public PublicAuthenticationServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PublicAuthenticationServiceStub(channel, callOptions);
        }
      };
    return PublicAuthenticationServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static PublicAuthenticationServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PublicAuthenticationServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PublicAuthenticationServiceBlockingStub>() {
        @java.lang.Override
        public PublicAuthenticationServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PublicAuthenticationServiceBlockingStub(channel, callOptions);
        }
      };
    return PublicAuthenticationServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static PublicAuthenticationServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PublicAuthenticationServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PublicAuthenticationServiceFutureStub>() {
        @java.lang.Override
        public PublicAuthenticationServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PublicAuthenticationServiceFutureStub(channel, callOptions);
        }
      };
    return PublicAuthenticationServiceFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * The Public Authentication Service provides token verification services
   * </pre>
   */
  public static abstract class PublicAuthenticationServiceImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Get Public Keys
     * Get public keys used to sign access tokens
     * </pre>
     */
    public void getJsonWebKeySet(stream.api.live.GetJsonWebKeySetRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GetJsonWebKeySetResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetJsonWebKeySetMethod(), responseObserver);
    }

    /**
     * <pre>
     * Exchange Guest Access Token
     * Exchange a guest access token with updated user identifiers
     * </pre>
     */
    public void guestCodeRedirect(stream.api.live.GuestCodeRedirectRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GuestCodeRedirectResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGuestCodeRedirectMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getGetJsonWebKeySetMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.GetJsonWebKeySetRequest,
                stream.api.live.GetJsonWebKeySetResponse>(
                  this, METHODID_GET_JSON_WEB_KEY_SET)))
          .addMethod(
            getGuestCodeRedirectMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.GuestCodeRedirectRequest,
                stream.api.live.GuestCodeRedirectResponse>(
                  this, METHODID_GUEST_CODE_REDIRECT)))
          .build();
    }
  }

  /**
   * <pre>
   * The Public Authentication Service provides token verification services
   * </pre>
   */
  public static final class PublicAuthenticationServiceStub extends io.grpc.stub.AbstractAsyncStub<PublicAuthenticationServiceStub> {
    private PublicAuthenticationServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PublicAuthenticationServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PublicAuthenticationServiceStub(channel, callOptions);
    }

    /**
     * <pre>
     * Get Public Keys
     * Get public keys used to sign access tokens
     * </pre>
     */
    public void getJsonWebKeySet(stream.api.live.GetJsonWebKeySetRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GetJsonWebKeySetResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetJsonWebKeySetMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Exchange Guest Access Token
     * Exchange a guest access token with updated user identifiers
     * </pre>
     */
    public void guestCodeRedirect(stream.api.live.GuestCodeRedirectRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GuestCodeRedirectResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGuestCodeRedirectMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * The Public Authentication Service provides token verification services
   * </pre>
   */
  public static final class PublicAuthenticationServiceBlockingStub extends io.grpc.stub.AbstractBlockingStub<PublicAuthenticationServiceBlockingStub> {
    private PublicAuthenticationServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PublicAuthenticationServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PublicAuthenticationServiceBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Get Public Keys
     * Get public keys used to sign access tokens
     * </pre>
     */
    public stream.api.live.GetJsonWebKeySetResponse getJsonWebKeySet(stream.api.live.GetJsonWebKeySetRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetJsonWebKeySetMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Exchange Guest Access Token
     * Exchange a guest access token with updated user identifiers
     * </pre>
     */
    public stream.api.live.GuestCodeRedirectResponse guestCodeRedirect(stream.api.live.GuestCodeRedirectRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGuestCodeRedirectMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * The Public Authentication Service provides token verification services
   * </pre>
   */
  public static final class PublicAuthenticationServiceFutureStub extends io.grpc.stub.AbstractFutureStub<PublicAuthenticationServiceFutureStub> {
    private PublicAuthenticationServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PublicAuthenticationServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PublicAuthenticationServiceFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Get Public Keys
     * Get public keys used to sign access tokens
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.GetJsonWebKeySetResponse> getJsonWebKeySet(
        stream.api.live.GetJsonWebKeySetRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetJsonWebKeySetMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Exchange Guest Access Token
     * Exchange a guest access token with updated user identifiers
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.GuestCodeRedirectResponse> guestCodeRedirect(
        stream.api.live.GuestCodeRedirectRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGuestCodeRedirectMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_GET_JSON_WEB_KEY_SET = 0;
  private static final int METHODID_GUEST_CODE_REDIRECT = 1;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final PublicAuthenticationServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(PublicAuthenticationServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_GET_JSON_WEB_KEY_SET:
          serviceImpl.getJsonWebKeySet((stream.api.live.GetJsonWebKeySetRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.GetJsonWebKeySetResponse>) responseObserver);
          break;
        case METHODID_GUEST_CODE_REDIRECT:
          serviceImpl.guestCodeRedirect((stream.api.live.GuestCodeRedirectRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.GuestCodeRedirectResponse>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class PublicAuthenticationServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    PublicAuthenticationServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return stream.api.live.Api.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("PublicAuthenticationService");
    }
  }

  private static final class PublicAuthenticationServiceFileDescriptorSupplier
      extends PublicAuthenticationServiceBaseDescriptorSupplier {
    PublicAuthenticationServiceFileDescriptorSupplier() {}
  }

  private static final class PublicAuthenticationServiceMethodDescriptorSupplier
      extends PublicAuthenticationServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    PublicAuthenticationServiceMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (PublicAuthenticationServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new PublicAuthenticationServiceFileDescriptorSupplier())
              .addMethod(getGetJsonWebKeySetMethod())
              .addMethod(getGuestCodeRedirectMethod())
              .build();
        }
      }
    }
    return result;
  }
}
