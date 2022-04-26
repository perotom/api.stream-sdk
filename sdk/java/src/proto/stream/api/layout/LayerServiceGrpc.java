/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package stream.api.layout;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * Layers
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.45.0)",
    comments = "Source: apis/layout/v2/api.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class LayerServiceGrpc {

  private LayerServiceGrpc() {}

  public static final String SERVICE_NAME = "apis.layout.v2.LayerService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<stream.api.layout.ListLayersRequest,
      stream.api.layout.ListLayersResponse> getListLayersMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListLayers",
      requestType = stream.api.layout.ListLayersRequest.class,
      responseType = stream.api.layout.ListLayersResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.layout.ListLayersRequest,
      stream.api.layout.ListLayersResponse> getListLayersMethod() {
    io.grpc.MethodDescriptor<stream.api.layout.ListLayersRequest, stream.api.layout.ListLayersResponse> getListLayersMethod;
    if ((getListLayersMethod = LayerServiceGrpc.getListLayersMethod) == null) {
      synchronized (LayerServiceGrpc.class) {
        if ((getListLayersMethod = LayerServiceGrpc.getListLayersMethod) == null) {
          LayerServiceGrpc.getListLayersMethod = getListLayersMethod =
              io.grpc.MethodDescriptor.<stream.api.layout.ListLayersRequest, stream.api.layout.ListLayersResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ListLayers"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.ListLayersRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.ListLayersResponse.getDefaultInstance()))
              .setSchemaDescriptor(new LayerServiceMethodDescriptorSupplier("ListLayers"))
              .build();
        }
      }
    }
    return getListLayersMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.layout.CreateLayerRequest,
      stream.api.layout.Layer> getCreateLayerMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CreateLayer",
      requestType = stream.api.layout.CreateLayerRequest.class,
      responseType = stream.api.layout.Layer.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.layout.CreateLayerRequest,
      stream.api.layout.Layer> getCreateLayerMethod() {
    io.grpc.MethodDescriptor<stream.api.layout.CreateLayerRequest, stream.api.layout.Layer> getCreateLayerMethod;
    if ((getCreateLayerMethod = LayerServiceGrpc.getCreateLayerMethod) == null) {
      synchronized (LayerServiceGrpc.class) {
        if ((getCreateLayerMethod = LayerServiceGrpc.getCreateLayerMethod) == null) {
          LayerServiceGrpc.getCreateLayerMethod = getCreateLayerMethod =
              io.grpc.MethodDescriptor.<stream.api.layout.CreateLayerRequest, stream.api.layout.Layer>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CreateLayer"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.CreateLayerRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.Layer.getDefaultInstance()))
              .setSchemaDescriptor(new LayerServiceMethodDescriptorSupplier("CreateLayer"))
              .build();
        }
      }
    }
    return getCreateLayerMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.layout.GetLayerRequest,
      stream.api.layout.Layer> getGetLayerMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetLayer",
      requestType = stream.api.layout.GetLayerRequest.class,
      responseType = stream.api.layout.Layer.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.layout.GetLayerRequest,
      stream.api.layout.Layer> getGetLayerMethod() {
    io.grpc.MethodDescriptor<stream.api.layout.GetLayerRequest, stream.api.layout.Layer> getGetLayerMethod;
    if ((getGetLayerMethod = LayerServiceGrpc.getGetLayerMethod) == null) {
      synchronized (LayerServiceGrpc.class) {
        if ((getGetLayerMethod = LayerServiceGrpc.getGetLayerMethod) == null) {
          LayerServiceGrpc.getGetLayerMethod = getGetLayerMethod =
              io.grpc.MethodDescriptor.<stream.api.layout.GetLayerRequest, stream.api.layout.Layer>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetLayer"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.GetLayerRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.Layer.getDefaultInstance()))
              .setSchemaDescriptor(new LayerServiceMethodDescriptorSupplier("GetLayer"))
              .build();
        }
      }
    }
    return getGetLayerMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.layout.UpdateLayerRequest,
      stream.api.layout.Layer> getUpdateLayerMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdateLayer",
      requestType = stream.api.layout.UpdateLayerRequest.class,
      responseType = stream.api.layout.Layer.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.layout.UpdateLayerRequest,
      stream.api.layout.Layer> getUpdateLayerMethod() {
    io.grpc.MethodDescriptor<stream.api.layout.UpdateLayerRequest, stream.api.layout.Layer> getUpdateLayerMethod;
    if ((getUpdateLayerMethod = LayerServiceGrpc.getUpdateLayerMethod) == null) {
      synchronized (LayerServiceGrpc.class) {
        if ((getUpdateLayerMethod = LayerServiceGrpc.getUpdateLayerMethod) == null) {
          LayerServiceGrpc.getUpdateLayerMethod = getUpdateLayerMethod =
              io.grpc.MethodDescriptor.<stream.api.layout.UpdateLayerRequest, stream.api.layout.Layer>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UpdateLayer"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.UpdateLayerRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.Layer.getDefaultInstance()))
              .setSchemaDescriptor(new LayerServiceMethodDescriptorSupplier("UpdateLayer"))
              .build();
        }
      }
    }
    return getUpdateLayerMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.layout.DeleteLayerRequest,
      stream.api.layout.DeleteLayerResponse> getDeleteLayerMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeleteLayer",
      requestType = stream.api.layout.DeleteLayerRequest.class,
      responseType = stream.api.layout.DeleteLayerResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.layout.DeleteLayerRequest,
      stream.api.layout.DeleteLayerResponse> getDeleteLayerMethod() {
    io.grpc.MethodDescriptor<stream.api.layout.DeleteLayerRequest, stream.api.layout.DeleteLayerResponse> getDeleteLayerMethod;
    if ((getDeleteLayerMethod = LayerServiceGrpc.getDeleteLayerMethod) == null) {
      synchronized (LayerServiceGrpc.class) {
        if ((getDeleteLayerMethod = LayerServiceGrpc.getDeleteLayerMethod) == null) {
          LayerServiceGrpc.getDeleteLayerMethod = getDeleteLayerMethod =
              io.grpc.MethodDescriptor.<stream.api.layout.DeleteLayerRequest, stream.api.layout.DeleteLayerResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeleteLayer"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.DeleteLayerRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.DeleteLayerResponse.getDefaultInstance()))
              .setSchemaDescriptor(new LayerServiceMethodDescriptorSupplier("DeleteLayer"))
              .build();
        }
      }
    }
    return getDeleteLayerMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.layout.BatchLayerRequest,
      stream.api.layout.BatchLayerResponse> getBatchMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Batch",
      requestType = stream.api.layout.BatchLayerRequest.class,
      responseType = stream.api.layout.BatchLayerResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.layout.BatchLayerRequest,
      stream.api.layout.BatchLayerResponse> getBatchMethod() {
    io.grpc.MethodDescriptor<stream.api.layout.BatchLayerRequest, stream.api.layout.BatchLayerResponse> getBatchMethod;
    if ((getBatchMethod = LayerServiceGrpc.getBatchMethod) == null) {
      synchronized (LayerServiceGrpc.class) {
        if ((getBatchMethod = LayerServiceGrpc.getBatchMethod) == null) {
          LayerServiceGrpc.getBatchMethod = getBatchMethod =
              io.grpc.MethodDescriptor.<stream.api.layout.BatchLayerRequest, stream.api.layout.BatchLayerResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Batch"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.BatchLayerRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.BatchLayerResponse.getDefaultInstance()))
              .setSchemaDescriptor(new LayerServiceMethodDescriptorSupplier("Batch"))
              .build();
        }
      }
    }
    return getBatchMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static LayerServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<LayerServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<LayerServiceStub>() {
        @java.lang.Override
        public LayerServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new LayerServiceStub(channel, callOptions);
        }
      };
    return LayerServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static LayerServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<LayerServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<LayerServiceBlockingStub>() {
        @java.lang.Override
        public LayerServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new LayerServiceBlockingStub(channel, callOptions);
        }
      };
    return LayerServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static LayerServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<LayerServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<LayerServiceFutureStub>() {
        @java.lang.Override
        public LayerServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new LayerServiceFutureStub(channel, callOptions);
        }
      };
    return LayerServiceFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * Layers
   * </pre>
   */
  public static abstract class LayerServiceImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * List all layers
     * </pre>
     */
    public void listLayers(stream.api.layout.ListLayersRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.ListLayersResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getListLayersMethod(), responseObserver);
    }

    /**
     * <pre>
     * Create a layer
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public void createLayer(stream.api.layout.CreateLayerRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.Layer> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCreateLayerMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a single layer
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public void getLayer(stream.api.layout.GetLayerRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.Layer> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetLayerMethod(), responseObserver);
    }

    /**
     * <pre>
     * Update a layer
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public void updateLayer(stream.api.layout.UpdateLayerRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.Layer> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateLayerMethod(), responseObserver);
    }

    /**
     * <pre>
     * Delete a layer
     * </pre>
     */
    public void deleteLayer(stream.api.layout.DeleteLayerRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.DeleteLayerResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeleteLayerMethod(), responseObserver);
    }

    /**
     * <pre>
     * Batch update
     * buf:lint:ignore RPC_REQUEST_STANDARD_NAME
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * </pre>
     */
    public void batch(stream.api.layout.BatchLayerRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.BatchLayerResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getBatchMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getListLayersMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.layout.ListLayersRequest,
                stream.api.layout.ListLayersResponse>(
                  this, METHODID_LIST_LAYERS)))
          .addMethod(
            getCreateLayerMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.layout.CreateLayerRequest,
                stream.api.layout.Layer>(
                  this, METHODID_CREATE_LAYER)))
          .addMethod(
            getGetLayerMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.layout.GetLayerRequest,
                stream.api.layout.Layer>(
                  this, METHODID_GET_LAYER)))
          .addMethod(
            getUpdateLayerMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.layout.UpdateLayerRequest,
                stream.api.layout.Layer>(
                  this, METHODID_UPDATE_LAYER)))
          .addMethod(
            getDeleteLayerMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.layout.DeleteLayerRequest,
                stream.api.layout.DeleteLayerResponse>(
                  this, METHODID_DELETE_LAYER)))
          .addMethod(
            getBatchMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.layout.BatchLayerRequest,
                stream.api.layout.BatchLayerResponse>(
                  this, METHODID_BATCH)))
          .build();
    }
  }

  /**
   * <pre>
   * Layers
   * </pre>
   */
  public static final class LayerServiceStub extends io.grpc.stub.AbstractAsyncStub<LayerServiceStub> {
    private LayerServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected LayerServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new LayerServiceStub(channel, callOptions);
    }

    /**
     * <pre>
     * List all layers
     * </pre>
     */
    public void listLayers(stream.api.layout.ListLayersRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.ListLayersResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getListLayersMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Create a layer
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public void createLayer(stream.api.layout.CreateLayerRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.Layer> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCreateLayerMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a single layer
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public void getLayer(stream.api.layout.GetLayerRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.Layer> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetLayerMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Update a layer
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public void updateLayer(stream.api.layout.UpdateLayerRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.Layer> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateLayerMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Delete a layer
     * </pre>
     */
    public void deleteLayer(stream.api.layout.DeleteLayerRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.DeleteLayerResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeleteLayerMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Batch update
     * buf:lint:ignore RPC_REQUEST_STANDARD_NAME
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * </pre>
     */
    public void batch(stream.api.layout.BatchLayerRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.BatchLayerResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getBatchMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * Layers
   * </pre>
   */
  public static final class LayerServiceBlockingStub extends io.grpc.stub.AbstractBlockingStub<LayerServiceBlockingStub> {
    private LayerServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected LayerServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new LayerServiceBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * List all layers
     * </pre>
     */
    public stream.api.layout.ListLayersResponse listLayers(stream.api.layout.ListLayersRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getListLayersMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Create a layer
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public stream.api.layout.Layer createLayer(stream.api.layout.CreateLayerRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCreateLayerMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a single layer
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public stream.api.layout.Layer getLayer(stream.api.layout.GetLayerRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetLayerMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Update a layer
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public stream.api.layout.Layer updateLayer(stream.api.layout.UpdateLayerRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateLayerMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Delete a layer
     * </pre>
     */
    public stream.api.layout.DeleteLayerResponse deleteLayer(stream.api.layout.DeleteLayerRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeleteLayerMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Batch update
     * buf:lint:ignore RPC_REQUEST_STANDARD_NAME
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * </pre>
     */
    public stream.api.layout.BatchLayerResponse batch(stream.api.layout.BatchLayerRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getBatchMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * Layers
   * </pre>
   */
  public static final class LayerServiceFutureStub extends io.grpc.stub.AbstractFutureStub<LayerServiceFutureStub> {
    private LayerServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected LayerServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new LayerServiceFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * List all layers
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.layout.ListLayersResponse> listLayers(
        stream.api.layout.ListLayersRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getListLayersMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Create a layer
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.layout.Layer> createLayer(
        stream.api.layout.CreateLayerRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCreateLayerMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a single layer
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.layout.Layer> getLayer(
        stream.api.layout.GetLayerRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetLayerMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Update a layer
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.layout.Layer> updateLayer(
        stream.api.layout.UpdateLayerRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateLayerMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Delete a layer
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.layout.DeleteLayerResponse> deleteLayer(
        stream.api.layout.DeleteLayerRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeleteLayerMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Batch update
     * buf:lint:ignore RPC_REQUEST_STANDARD_NAME
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.layout.BatchLayerResponse> batch(
        stream.api.layout.BatchLayerRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getBatchMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_LIST_LAYERS = 0;
  private static final int METHODID_CREATE_LAYER = 1;
  private static final int METHODID_GET_LAYER = 2;
  private static final int METHODID_UPDATE_LAYER = 3;
  private static final int METHODID_DELETE_LAYER = 4;
  private static final int METHODID_BATCH = 5;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final LayerServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(LayerServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_LIST_LAYERS:
          serviceImpl.listLayers((stream.api.layout.ListLayersRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.layout.ListLayersResponse>) responseObserver);
          break;
        case METHODID_CREATE_LAYER:
          serviceImpl.createLayer((stream.api.layout.CreateLayerRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.layout.Layer>) responseObserver);
          break;
        case METHODID_GET_LAYER:
          serviceImpl.getLayer((stream.api.layout.GetLayerRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.layout.Layer>) responseObserver);
          break;
        case METHODID_UPDATE_LAYER:
          serviceImpl.updateLayer((stream.api.layout.UpdateLayerRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.layout.Layer>) responseObserver);
          break;
        case METHODID_DELETE_LAYER:
          serviceImpl.deleteLayer((stream.api.layout.DeleteLayerRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.layout.DeleteLayerResponse>) responseObserver);
          break;
        case METHODID_BATCH:
          serviceImpl.batch((stream.api.layout.BatchLayerRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.layout.BatchLayerResponse>) responseObserver);
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

  private static abstract class LayerServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    LayerServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return stream.api.layout.Api.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("LayerService");
    }
  }

  private static final class LayerServiceFileDescriptorSupplier
      extends LayerServiceBaseDescriptorSupplier {
    LayerServiceFileDescriptorSupplier() {}
  }

  private static final class LayerServiceMethodDescriptorSupplier
      extends LayerServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    LayerServiceMethodDescriptorSupplier(String methodName) {
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
      synchronized (LayerServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new LayerServiceFileDescriptorSupplier())
              .addMethod(getListLayersMethod())
              .addMethod(getCreateLayerMethod())
              .addMethod(getGetLayerMethod())
              .addMethod(getUpdateLayerMethod())
              .addMethod(getDeleteLayerMethod())
              .addMethod(getBatchMethod())
              .build();
        }
      }
    }
    return result;
  }
}
