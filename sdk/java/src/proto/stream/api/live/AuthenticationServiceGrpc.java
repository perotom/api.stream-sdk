/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package stream.api.live;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * The Authentication Service provides token services for clients
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.45.0)",
    comments = "Source: live/v21/api.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class AuthenticationServiceGrpc {

  private AuthenticationServiceGrpc() {}

  public static final String SERVICE_NAME = "live.v21.AuthenticationService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<stream.api.live.CreateGuestAccessTokenRequest,
      stream.api.live.CreateGuestAccessTokenResponse> getCreateGuestAccessTokenMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CreateGuestAccessToken",
      requestType = stream.api.live.CreateGuestAccessTokenRequest.class,
      responseType = stream.api.live.CreateGuestAccessTokenResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.CreateGuestAccessTokenRequest,
      stream.api.live.CreateGuestAccessTokenResponse> getCreateGuestAccessTokenMethod() {
    io.grpc.MethodDescriptor<stream.api.live.CreateGuestAccessTokenRequest, stream.api.live.CreateGuestAccessTokenResponse> getCreateGuestAccessTokenMethod;
    if ((getCreateGuestAccessTokenMethod = AuthenticationServiceGrpc.getCreateGuestAccessTokenMethod) == null) {
      synchronized (AuthenticationServiceGrpc.class) {
        if ((getCreateGuestAccessTokenMethod = AuthenticationServiceGrpc.getCreateGuestAccessTokenMethod) == null) {
          AuthenticationServiceGrpc.getCreateGuestAccessTokenMethod = getCreateGuestAccessTokenMethod =
              io.grpc.MethodDescriptor.<stream.api.live.CreateGuestAccessTokenRequest, stream.api.live.CreateGuestAccessTokenResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CreateGuestAccessToken"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.CreateGuestAccessTokenRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.CreateGuestAccessTokenResponse.getDefaultInstance()))
              .setSchemaDescriptor(new AuthenticationServiceMethodDescriptorSupplier("CreateGuestAccessToken"))
              .build();
        }
      }
    }
    return getCreateGuestAccessTokenMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.RefreshAccessTokenRequest,
      stream.api.live.RefreshAccessTokenResponse> getRefreshAccessTokenMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "RefreshAccessToken",
      requestType = stream.api.live.RefreshAccessTokenRequest.class,
      responseType = stream.api.live.RefreshAccessTokenResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.RefreshAccessTokenRequest,
      stream.api.live.RefreshAccessTokenResponse> getRefreshAccessTokenMethod() {
    io.grpc.MethodDescriptor<stream.api.live.RefreshAccessTokenRequest, stream.api.live.RefreshAccessTokenResponse> getRefreshAccessTokenMethod;
    if ((getRefreshAccessTokenMethod = AuthenticationServiceGrpc.getRefreshAccessTokenMethod) == null) {
      synchronized (AuthenticationServiceGrpc.class) {
        if ((getRefreshAccessTokenMethod = AuthenticationServiceGrpc.getRefreshAccessTokenMethod) == null) {
          AuthenticationServiceGrpc.getRefreshAccessTokenMethod = getRefreshAccessTokenMethod =
              io.grpc.MethodDescriptor.<stream.api.live.RefreshAccessTokenRequest, stream.api.live.RefreshAccessTokenResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "RefreshAccessToken"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.RefreshAccessTokenRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.RefreshAccessTokenResponse.getDefaultInstance()))
              .setSchemaDescriptor(new AuthenticationServiceMethodDescriptorSupplier("RefreshAccessToken"))
              .build();
        }
      }
    }
    return getRefreshAccessTokenMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.CreateWebRtcAccessTokenRequest,
      stream.api.live.CreateWebRtcAccessTokenResponse> getCreateWebRtcAccessTokenMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CreateWebRtcAccessToken",
      requestType = stream.api.live.CreateWebRtcAccessTokenRequest.class,
      responseType = stream.api.live.CreateWebRtcAccessTokenResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.CreateWebRtcAccessTokenRequest,
      stream.api.live.CreateWebRtcAccessTokenResponse> getCreateWebRtcAccessTokenMethod() {
    io.grpc.MethodDescriptor<stream.api.live.CreateWebRtcAccessTokenRequest, stream.api.live.CreateWebRtcAccessTokenResponse> getCreateWebRtcAccessTokenMethod;
    if ((getCreateWebRtcAccessTokenMethod = AuthenticationServiceGrpc.getCreateWebRtcAccessTokenMethod) == null) {
      synchronized (AuthenticationServiceGrpc.class) {
        if ((getCreateWebRtcAccessTokenMethod = AuthenticationServiceGrpc.getCreateWebRtcAccessTokenMethod) == null) {
          AuthenticationServiceGrpc.getCreateWebRtcAccessTokenMethod = getCreateWebRtcAccessTokenMethod =
              io.grpc.MethodDescriptor.<stream.api.live.CreateWebRtcAccessTokenRequest, stream.api.live.CreateWebRtcAccessTokenResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CreateWebRtcAccessToken"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.CreateWebRtcAccessTokenRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.CreateWebRtcAccessTokenResponse.getDefaultInstance()))
              .setSchemaDescriptor(new AuthenticationServiceMethodDescriptorSupplier("CreateWebRtcAccessToken"))
              .build();
        }
      }
    }
    return getCreateWebRtcAccessTokenMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static AuthenticationServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<AuthenticationServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<AuthenticationServiceStub>() {
        @java.lang.Override
        public AuthenticationServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new AuthenticationServiceStub(channel, callOptions);
        }
      };
    return AuthenticationServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static AuthenticationServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<AuthenticationServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<AuthenticationServiceBlockingStub>() {
        @java.lang.Override
        public AuthenticationServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new AuthenticationServiceBlockingStub(channel, callOptions);
        }
      };
    return AuthenticationServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static AuthenticationServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<AuthenticationServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<AuthenticationServiceFutureStub>() {
        @java.lang.Override
        public AuthenticationServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new AuthenticationServiceFutureStub(channel, callOptions);
        }
      };
    return AuthenticationServiceFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * The Authentication Service provides token services for clients
   * </pre>
   */
  public static abstract class AuthenticationServiceImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Create Guest Access Token
     * Create an access token for a guest
     * </pre>
     */
    public void createGuestAccessToken(stream.api.live.CreateGuestAccessTokenRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.CreateGuestAccessTokenResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCreateGuestAccessTokenMethod(), responseObserver);
    }

    /**
     * <pre>
     * Refresh Access Token
     * Forcibly refresh an access token prior to expiration
     * </pre>
     */
    public void refreshAccessToken(stream.api.live.RefreshAccessTokenRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.RefreshAccessTokenResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getRefreshAccessTokenMethod(), responseObserver);
    }

    /**
     * <pre>
     * Create WebRTC Access Token
     * Create a WebRTC Access Token
     * </pre>
     */
    public void createWebRtcAccessToken(stream.api.live.CreateWebRtcAccessTokenRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.CreateWebRtcAccessTokenResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCreateWebRtcAccessTokenMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getCreateGuestAccessTokenMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.CreateGuestAccessTokenRequest,
                stream.api.live.CreateGuestAccessTokenResponse>(
                  this, METHODID_CREATE_GUEST_ACCESS_TOKEN)))
          .addMethod(
            getRefreshAccessTokenMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.RefreshAccessTokenRequest,
                stream.api.live.RefreshAccessTokenResponse>(
                  this, METHODID_REFRESH_ACCESS_TOKEN)))
          .addMethod(
            getCreateWebRtcAccessTokenMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.CreateWebRtcAccessTokenRequest,
                stream.api.live.CreateWebRtcAccessTokenResponse>(
                  this, METHODID_CREATE_WEB_RTC_ACCESS_TOKEN)))
          .build();
    }
  }

  /**
   * <pre>
   * The Authentication Service provides token services for clients
   * </pre>
   */
  public static final class AuthenticationServiceStub extends io.grpc.stub.AbstractAsyncStub<AuthenticationServiceStub> {
    private AuthenticationServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AuthenticationServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new AuthenticationServiceStub(channel, callOptions);
    }

    /**
     * <pre>
     * Create Guest Access Token
     * Create an access token for a guest
     * </pre>
     */
    public void createGuestAccessToken(stream.api.live.CreateGuestAccessTokenRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.CreateGuestAccessTokenResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCreateGuestAccessTokenMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Refresh Access Token
     * Forcibly refresh an access token prior to expiration
     * </pre>
     */
    public void refreshAccessToken(stream.api.live.RefreshAccessTokenRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.RefreshAccessTokenResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getRefreshAccessTokenMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Create WebRTC Access Token
     * Create a WebRTC Access Token
     * </pre>
     */
    public void createWebRtcAccessToken(stream.api.live.CreateWebRtcAccessTokenRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.CreateWebRtcAccessTokenResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCreateWebRtcAccessTokenMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * The Authentication Service provides token services for clients
   * </pre>
   */
  public static final class AuthenticationServiceBlockingStub extends io.grpc.stub.AbstractBlockingStub<AuthenticationServiceBlockingStub> {
    private AuthenticationServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AuthenticationServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new AuthenticationServiceBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Create Guest Access Token
     * Create an access token for a guest
     * </pre>
     */
    public stream.api.live.CreateGuestAccessTokenResponse createGuestAccessToken(stream.api.live.CreateGuestAccessTokenRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCreateGuestAccessTokenMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Refresh Access Token
     * Forcibly refresh an access token prior to expiration
     * </pre>
     */
    public stream.api.live.RefreshAccessTokenResponse refreshAccessToken(stream.api.live.RefreshAccessTokenRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getRefreshAccessTokenMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Create WebRTC Access Token
     * Create a WebRTC Access Token
     * </pre>
     */
    public stream.api.live.CreateWebRtcAccessTokenResponse createWebRtcAccessToken(stream.api.live.CreateWebRtcAccessTokenRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCreateWebRtcAccessTokenMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * The Authentication Service provides token services for clients
   * </pre>
   */
  public static final class AuthenticationServiceFutureStub extends io.grpc.stub.AbstractFutureStub<AuthenticationServiceFutureStub> {
    private AuthenticationServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AuthenticationServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new AuthenticationServiceFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Create Guest Access Token
     * Create an access token for a guest
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.CreateGuestAccessTokenResponse> createGuestAccessToken(
        stream.api.live.CreateGuestAccessTokenRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCreateGuestAccessTokenMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Refresh Access Token
     * Forcibly refresh an access token prior to expiration
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.RefreshAccessTokenResponse> refreshAccessToken(
        stream.api.live.RefreshAccessTokenRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getRefreshAccessTokenMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Create WebRTC Access Token
     * Create a WebRTC Access Token
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.CreateWebRtcAccessTokenResponse> createWebRtcAccessToken(
        stream.api.live.CreateWebRtcAccessTokenRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCreateWebRtcAccessTokenMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_CREATE_GUEST_ACCESS_TOKEN = 0;
  private static final int METHODID_REFRESH_ACCESS_TOKEN = 1;
  private static final int METHODID_CREATE_WEB_RTC_ACCESS_TOKEN = 2;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final AuthenticationServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(AuthenticationServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_CREATE_GUEST_ACCESS_TOKEN:
          serviceImpl.createGuestAccessToken((stream.api.live.CreateGuestAccessTokenRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.CreateGuestAccessTokenResponse>) responseObserver);
          break;
        case METHODID_REFRESH_ACCESS_TOKEN:
          serviceImpl.refreshAccessToken((stream.api.live.RefreshAccessTokenRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.RefreshAccessTokenResponse>) responseObserver);
          break;
        case METHODID_CREATE_WEB_RTC_ACCESS_TOKEN:
          serviceImpl.createWebRtcAccessToken((stream.api.live.CreateWebRtcAccessTokenRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.CreateWebRtcAccessTokenResponse>) responseObserver);
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

  private static abstract class AuthenticationServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    AuthenticationServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return stream.api.live.Api.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("AuthenticationService");
    }
  }

  private static final class AuthenticationServiceFileDescriptorSupplier
      extends AuthenticationServiceBaseDescriptorSupplier {
    AuthenticationServiceFileDescriptorSupplier() {}
  }

  private static final class AuthenticationServiceMethodDescriptorSupplier
      extends AuthenticationServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    AuthenticationServiceMethodDescriptorSupplier(String methodName) {
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
      synchronized (AuthenticationServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new AuthenticationServiceFileDescriptorSupplier())
              .addMethod(getCreateGuestAccessTokenMethod())
              .addMethod(getRefreshAccessTokenMethod())
              .addMethod(getCreateWebRtcAccessTokenMethod())
              .build();
        }
      }
    }
    return result;
  }
}
