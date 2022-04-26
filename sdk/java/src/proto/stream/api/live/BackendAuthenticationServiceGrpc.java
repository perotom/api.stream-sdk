/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package stream.api.live;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * The Backend Authentication Service provides token services for partner
 * backend systems
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.45.0)",
    comments = "Source: live/v21/api.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class BackendAuthenticationServiceGrpc {

  private BackendAuthenticationServiceGrpc() {}

  public static final String SERVICE_NAME = "live.v21.BackendAuthenticationService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<stream.api.live.CreateAccessTokenRequest,
      stream.api.live.CreateAccessTokenResponse> getCreateAccessTokenMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CreateAccessToken",
      requestType = stream.api.live.CreateAccessTokenRequest.class,
      responseType = stream.api.live.CreateAccessTokenResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.CreateAccessTokenRequest,
      stream.api.live.CreateAccessTokenResponse> getCreateAccessTokenMethod() {
    io.grpc.MethodDescriptor<stream.api.live.CreateAccessTokenRequest, stream.api.live.CreateAccessTokenResponse> getCreateAccessTokenMethod;
    if ((getCreateAccessTokenMethod = BackendAuthenticationServiceGrpc.getCreateAccessTokenMethod) == null) {
      synchronized (BackendAuthenticationServiceGrpc.class) {
        if ((getCreateAccessTokenMethod = BackendAuthenticationServiceGrpc.getCreateAccessTokenMethod) == null) {
          BackendAuthenticationServiceGrpc.getCreateAccessTokenMethod = getCreateAccessTokenMethod =
              io.grpc.MethodDescriptor.<stream.api.live.CreateAccessTokenRequest, stream.api.live.CreateAccessTokenResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CreateAccessToken"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.CreateAccessTokenRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.CreateAccessTokenResponse.getDefaultInstance()))
              .setSchemaDescriptor(new BackendAuthenticationServiceMethodDescriptorSupplier("CreateAccessToken"))
              .build();
        }
      }
    }
    return getCreateAccessTokenMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static BackendAuthenticationServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<BackendAuthenticationServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<BackendAuthenticationServiceStub>() {
        @java.lang.Override
        public BackendAuthenticationServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new BackendAuthenticationServiceStub(channel, callOptions);
        }
      };
    return BackendAuthenticationServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static BackendAuthenticationServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<BackendAuthenticationServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<BackendAuthenticationServiceBlockingStub>() {
        @java.lang.Override
        public BackendAuthenticationServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new BackendAuthenticationServiceBlockingStub(channel, callOptions);
        }
      };
    return BackendAuthenticationServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static BackendAuthenticationServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<BackendAuthenticationServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<BackendAuthenticationServiceFutureStub>() {
        @java.lang.Override
        public BackendAuthenticationServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new BackendAuthenticationServiceFutureStub(channel, callOptions);
        }
      };
    return BackendAuthenticationServiceFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * The Backend Authentication Service provides token services for partner
   * backend systems
   * </pre>
   */
  public static abstract class BackendAuthenticationServiceImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Create Access Token
     * Create an access token for a session host
     * </pre>
     */
    public void createAccessToken(stream.api.live.CreateAccessTokenRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.CreateAccessTokenResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCreateAccessTokenMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getCreateAccessTokenMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.CreateAccessTokenRequest,
                stream.api.live.CreateAccessTokenResponse>(
                  this, METHODID_CREATE_ACCESS_TOKEN)))
          .build();
    }
  }

  /**
   * <pre>
   * The Backend Authentication Service provides token services for partner
   * backend systems
   * </pre>
   */
  public static final class BackendAuthenticationServiceStub extends io.grpc.stub.AbstractAsyncStub<BackendAuthenticationServiceStub> {
    private BackendAuthenticationServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected BackendAuthenticationServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new BackendAuthenticationServiceStub(channel, callOptions);
    }

    /**
     * <pre>
     * Create Access Token
     * Create an access token for a session host
     * </pre>
     */
    public void createAccessToken(stream.api.live.CreateAccessTokenRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.CreateAccessTokenResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCreateAccessTokenMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * The Backend Authentication Service provides token services for partner
   * backend systems
   * </pre>
   */
  public static final class BackendAuthenticationServiceBlockingStub extends io.grpc.stub.AbstractBlockingStub<BackendAuthenticationServiceBlockingStub> {
    private BackendAuthenticationServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected BackendAuthenticationServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new BackendAuthenticationServiceBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Create Access Token
     * Create an access token for a session host
     * </pre>
     */
    public stream.api.live.CreateAccessTokenResponse createAccessToken(stream.api.live.CreateAccessTokenRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCreateAccessTokenMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * The Backend Authentication Service provides token services for partner
   * backend systems
   * </pre>
   */
  public static final class BackendAuthenticationServiceFutureStub extends io.grpc.stub.AbstractFutureStub<BackendAuthenticationServiceFutureStub> {
    private BackendAuthenticationServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected BackendAuthenticationServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new BackendAuthenticationServiceFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Create Access Token
     * Create an access token for a session host
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.CreateAccessTokenResponse> createAccessToken(
        stream.api.live.CreateAccessTokenRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCreateAccessTokenMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_CREATE_ACCESS_TOKEN = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final BackendAuthenticationServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(BackendAuthenticationServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_CREATE_ACCESS_TOKEN:
          serviceImpl.createAccessToken((stream.api.live.CreateAccessTokenRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.CreateAccessTokenResponse>) responseObserver);
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

  private static abstract class BackendAuthenticationServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    BackendAuthenticationServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return stream.api.live.Api.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("BackendAuthenticationService");
    }
  }

  private static final class BackendAuthenticationServiceFileDescriptorSupplier
      extends BackendAuthenticationServiceBaseDescriptorSupplier {
    BackendAuthenticationServiceFileDescriptorSupplier() {}
  }

  private static final class BackendAuthenticationServiceMethodDescriptorSupplier
      extends BackendAuthenticationServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    BackendAuthenticationServiceMethodDescriptorSupplier(String methodName) {
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
      synchronized (BackendAuthenticationServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new BackendAuthenticationServiceFileDescriptorSupplier())
              .addMethod(getCreateAccessTokenMethod())
              .build();
        }
      }
    }
    return result;
  }
}
