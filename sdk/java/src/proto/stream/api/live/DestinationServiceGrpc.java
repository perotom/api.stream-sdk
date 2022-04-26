/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package stream.api.live;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * The Destination Service operates on Project Destinations. Destinations
 * designate where a Broadcast associated with a Project is distributed
 * downstream.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.45.0)",
    comments = "Source: live/v21/api.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class DestinationServiceGrpc {

  private DestinationServiceGrpc() {}

  public static final String SERVICE_NAME = "live.v21.DestinationService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<stream.api.live.CreateDestinationRequest,
      stream.api.live.CreateDestinationResponse> getCreateDestinationMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CreateDestination",
      requestType = stream.api.live.CreateDestinationRequest.class,
      responseType = stream.api.live.CreateDestinationResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.CreateDestinationRequest,
      stream.api.live.CreateDestinationResponse> getCreateDestinationMethod() {
    io.grpc.MethodDescriptor<stream.api.live.CreateDestinationRequest, stream.api.live.CreateDestinationResponse> getCreateDestinationMethod;
    if ((getCreateDestinationMethod = DestinationServiceGrpc.getCreateDestinationMethod) == null) {
      synchronized (DestinationServiceGrpc.class) {
        if ((getCreateDestinationMethod = DestinationServiceGrpc.getCreateDestinationMethod) == null) {
          DestinationServiceGrpc.getCreateDestinationMethod = getCreateDestinationMethod =
              io.grpc.MethodDescriptor.<stream.api.live.CreateDestinationRequest, stream.api.live.CreateDestinationResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CreateDestination"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.CreateDestinationRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.CreateDestinationResponse.getDefaultInstance()))
              .setSchemaDescriptor(new DestinationServiceMethodDescriptorSupplier("CreateDestination"))
              .build();
        }
      }
    }
    return getCreateDestinationMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.GetDestinationRequest,
      stream.api.live.GetDestinationResponse> getGetDestinationMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetDestination",
      requestType = stream.api.live.GetDestinationRequest.class,
      responseType = stream.api.live.GetDestinationResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.GetDestinationRequest,
      stream.api.live.GetDestinationResponse> getGetDestinationMethod() {
    io.grpc.MethodDescriptor<stream.api.live.GetDestinationRequest, stream.api.live.GetDestinationResponse> getGetDestinationMethod;
    if ((getGetDestinationMethod = DestinationServiceGrpc.getGetDestinationMethod) == null) {
      synchronized (DestinationServiceGrpc.class) {
        if ((getGetDestinationMethod = DestinationServiceGrpc.getGetDestinationMethod) == null) {
          DestinationServiceGrpc.getGetDestinationMethod = getGetDestinationMethod =
              io.grpc.MethodDescriptor.<stream.api.live.GetDestinationRequest, stream.api.live.GetDestinationResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetDestination"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GetDestinationRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GetDestinationResponse.getDefaultInstance()))
              .setSchemaDescriptor(new DestinationServiceMethodDescriptorSupplier("GetDestination"))
              .build();
        }
      }
    }
    return getGetDestinationMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.UpdateDestinationRequest,
      stream.api.live.UpdateDestinationResponse> getUpdateDestinationMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdateDestination",
      requestType = stream.api.live.UpdateDestinationRequest.class,
      responseType = stream.api.live.UpdateDestinationResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.UpdateDestinationRequest,
      stream.api.live.UpdateDestinationResponse> getUpdateDestinationMethod() {
    io.grpc.MethodDescriptor<stream.api.live.UpdateDestinationRequest, stream.api.live.UpdateDestinationResponse> getUpdateDestinationMethod;
    if ((getUpdateDestinationMethod = DestinationServiceGrpc.getUpdateDestinationMethod) == null) {
      synchronized (DestinationServiceGrpc.class) {
        if ((getUpdateDestinationMethod = DestinationServiceGrpc.getUpdateDestinationMethod) == null) {
          DestinationServiceGrpc.getUpdateDestinationMethod = getUpdateDestinationMethod =
              io.grpc.MethodDescriptor.<stream.api.live.UpdateDestinationRequest, stream.api.live.UpdateDestinationResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UpdateDestination"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.UpdateDestinationRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.UpdateDestinationResponse.getDefaultInstance()))
              .setSchemaDescriptor(new DestinationServiceMethodDescriptorSupplier("UpdateDestination"))
              .build();
        }
      }
    }
    return getUpdateDestinationMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.DeleteDestinationRequest,
      stream.api.live.DeleteDestinationResponse> getDeleteDestinationMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeleteDestination",
      requestType = stream.api.live.DeleteDestinationRequest.class,
      responseType = stream.api.live.DeleteDestinationResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.DeleteDestinationRequest,
      stream.api.live.DeleteDestinationResponse> getDeleteDestinationMethod() {
    io.grpc.MethodDescriptor<stream.api.live.DeleteDestinationRequest, stream.api.live.DeleteDestinationResponse> getDeleteDestinationMethod;
    if ((getDeleteDestinationMethod = DestinationServiceGrpc.getDeleteDestinationMethod) == null) {
      synchronized (DestinationServiceGrpc.class) {
        if ((getDeleteDestinationMethod = DestinationServiceGrpc.getDeleteDestinationMethod) == null) {
          DestinationServiceGrpc.getDeleteDestinationMethod = getDeleteDestinationMethod =
              io.grpc.MethodDescriptor.<stream.api.live.DeleteDestinationRequest, stream.api.live.DeleteDestinationResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeleteDestination"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.DeleteDestinationRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.DeleteDestinationResponse.getDefaultInstance()))
              .setSchemaDescriptor(new DestinationServiceMethodDescriptorSupplier("DeleteDestination"))
              .build();
        }
      }
    }
    return getDeleteDestinationMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static DestinationServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<DestinationServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<DestinationServiceStub>() {
        @java.lang.Override
        public DestinationServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new DestinationServiceStub(channel, callOptions);
        }
      };
    return DestinationServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static DestinationServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<DestinationServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<DestinationServiceBlockingStub>() {
        @java.lang.Override
        public DestinationServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new DestinationServiceBlockingStub(channel, callOptions);
        }
      };
    return DestinationServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static DestinationServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<DestinationServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<DestinationServiceFutureStub>() {
        @java.lang.Override
        public DestinationServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new DestinationServiceFutureStub(channel, callOptions);
        }
      };
    return DestinationServiceFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * The Destination Service operates on Project Destinations. Destinations
   * designate where a Broadcast associated with a Project is distributed
   * downstream.
   * </pre>
   */
  public static abstract class DestinationServiceImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Create Destination
     * Create a new Destination
     * </pre>
     */
    public void createDestination(stream.api.live.CreateDestinationRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.CreateDestinationResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCreateDestinationMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get Destination
     * Get an existing Destination.
     * </pre>
     */
    public void getDestination(stream.api.live.GetDestinationRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GetDestinationResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetDestinationMethod(), responseObserver);
    }

    /**
     * <pre>
     * Update Destination
     * Update a destination
     * </pre>
     */
    public void updateDestination(stream.api.live.UpdateDestinationRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.UpdateDestinationResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateDestinationMethod(), responseObserver);
    }

    /**
     * <pre>
     * Delete Destination
     * Delete a destination
     * </pre>
     */
    public void deleteDestination(stream.api.live.DeleteDestinationRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.DeleteDestinationResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeleteDestinationMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getCreateDestinationMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.CreateDestinationRequest,
                stream.api.live.CreateDestinationResponse>(
                  this, METHODID_CREATE_DESTINATION)))
          .addMethod(
            getGetDestinationMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.GetDestinationRequest,
                stream.api.live.GetDestinationResponse>(
                  this, METHODID_GET_DESTINATION)))
          .addMethod(
            getUpdateDestinationMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.UpdateDestinationRequest,
                stream.api.live.UpdateDestinationResponse>(
                  this, METHODID_UPDATE_DESTINATION)))
          .addMethod(
            getDeleteDestinationMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.DeleteDestinationRequest,
                stream.api.live.DeleteDestinationResponse>(
                  this, METHODID_DELETE_DESTINATION)))
          .build();
    }
  }

  /**
   * <pre>
   * The Destination Service operates on Project Destinations. Destinations
   * designate where a Broadcast associated with a Project is distributed
   * downstream.
   * </pre>
   */
  public static final class DestinationServiceStub extends io.grpc.stub.AbstractAsyncStub<DestinationServiceStub> {
    private DestinationServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected DestinationServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new DestinationServiceStub(channel, callOptions);
    }

    /**
     * <pre>
     * Create Destination
     * Create a new Destination
     * </pre>
     */
    public void createDestination(stream.api.live.CreateDestinationRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.CreateDestinationResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCreateDestinationMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get Destination
     * Get an existing Destination.
     * </pre>
     */
    public void getDestination(stream.api.live.GetDestinationRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GetDestinationResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetDestinationMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Update Destination
     * Update a destination
     * </pre>
     */
    public void updateDestination(stream.api.live.UpdateDestinationRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.UpdateDestinationResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateDestinationMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Delete Destination
     * Delete a destination
     * </pre>
     */
    public void deleteDestination(stream.api.live.DeleteDestinationRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.DeleteDestinationResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeleteDestinationMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * The Destination Service operates on Project Destinations. Destinations
   * designate where a Broadcast associated with a Project is distributed
   * downstream.
   * </pre>
   */
  public static final class DestinationServiceBlockingStub extends io.grpc.stub.AbstractBlockingStub<DestinationServiceBlockingStub> {
    private DestinationServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected DestinationServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new DestinationServiceBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Create Destination
     * Create a new Destination
     * </pre>
     */
    public stream.api.live.CreateDestinationResponse createDestination(stream.api.live.CreateDestinationRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCreateDestinationMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get Destination
     * Get an existing Destination.
     * </pre>
     */
    public stream.api.live.GetDestinationResponse getDestination(stream.api.live.GetDestinationRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetDestinationMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Update Destination
     * Update a destination
     * </pre>
     */
    public stream.api.live.UpdateDestinationResponse updateDestination(stream.api.live.UpdateDestinationRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateDestinationMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Delete Destination
     * Delete a destination
     * </pre>
     */
    public stream.api.live.DeleteDestinationResponse deleteDestination(stream.api.live.DeleteDestinationRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeleteDestinationMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * The Destination Service operates on Project Destinations. Destinations
   * designate where a Broadcast associated with a Project is distributed
   * downstream.
   * </pre>
   */
  public static final class DestinationServiceFutureStub extends io.grpc.stub.AbstractFutureStub<DestinationServiceFutureStub> {
    private DestinationServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected DestinationServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new DestinationServiceFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Create Destination
     * Create a new Destination
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.CreateDestinationResponse> createDestination(
        stream.api.live.CreateDestinationRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCreateDestinationMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get Destination
     * Get an existing Destination.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.GetDestinationResponse> getDestination(
        stream.api.live.GetDestinationRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetDestinationMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Update Destination
     * Update a destination
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.UpdateDestinationResponse> updateDestination(
        stream.api.live.UpdateDestinationRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateDestinationMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Delete Destination
     * Delete a destination
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.DeleteDestinationResponse> deleteDestination(
        stream.api.live.DeleteDestinationRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeleteDestinationMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_CREATE_DESTINATION = 0;
  private static final int METHODID_GET_DESTINATION = 1;
  private static final int METHODID_UPDATE_DESTINATION = 2;
  private static final int METHODID_DELETE_DESTINATION = 3;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final DestinationServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(DestinationServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_CREATE_DESTINATION:
          serviceImpl.createDestination((stream.api.live.CreateDestinationRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.CreateDestinationResponse>) responseObserver);
          break;
        case METHODID_GET_DESTINATION:
          serviceImpl.getDestination((stream.api.live.GetDestinationRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.GetDestinationResponse>) responseObserver);
          break;
        case METHODID_UPDATE_DESTINATION:
          serviceImpl.updateDestination((stream.api.live.UpdateDestinationRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.UpdateDestinationResponse>) responseObserver);
          break;
        case METHODID_DELETE_DESTINATION:
          serviceImpl.deleteDestination((stream.api.live.DeleteDestinationRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.DeleteDestinationResponse>) responseObserver);
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

  private static abstract class DestinationServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    DestinationServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return stream.api.live.Api.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("DestinationService");
    }
  }

  private static final class DestinationServiceFileDescriptorSupplier
      extends DestinationServiceBaseDescriptorSupplier {
    DestinationServiceFileDescriptorSupplier() {}
  }

  private static final class DestinationServiceMethodDescriptorSupplier
      extends DestinationServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    DestinationServiceMethodDescriptorSupplier(String methodName) {
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
      synchronized (DestinationServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new DestinationServiceFileDescriptorSupplier())
              .addMethod(getCreateDestinationMethod())
              .addMethod(getGetDestinationMethod())
              .addMethod(getUpdateDestinationMethod())
              .addMethod(getDeleteDestinationMethod())
              .build();
        }
      }
    }
    return result;
  }
}
