/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package stream.api.live;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * The Collection Service operates on collections, which contain projects and
 * collection live sources used in projects.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.45.0)",
    comments = "Source: live/v21/api.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class CollectionServiceGrpc {

  private CollectionServiceGrpc() {}

  public static final String SERVICE_NAME = "live.v21.CollectionService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<stream.api.live.CreateCollectionRequest,
      stream.api.live.CreateCollectionResponse> getCreateCollectionMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CreateCollection",
      requestType = stream.api.live.CreateCollectionRequest.class,
      responseType = stream.api.live.CreateCollectionResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.CreateCollectionRequest,
      stream.api.live.CreateCollectionResponse> getCreateCollectionMethod() {
    io.grpc.MethodDescriptor<stream.api.live.CreateCollectionRequest, stream.api.live.CreateCollectionResponse> getCreateCollectionMethod;
    if ((getCreateCollectionMethod = CollectionServiceGrpc.getCreateCollectionMethod) == null) {
      synchronized (CollectionServiceGrpc.class) {
        if ((getCreateCollectionMethod = CollectionServiceGrpc.getCreateCollectionMethod) == null) {
          CollectionServiceGrpc.getCreateCollectionMethod = getCreateCollectionMethod =
              io.grpc.MethodDescriptor.<stream.api.live.CreateCollectionRequest, stream.api.live.CreateCollectionResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CreateCollection"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.CreateCollectionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.CreateCollectionResponse.getDefaultInstance()))
              .setSchemaDescriptor(new CollectionServiceMethodDescriptorSupplier("CreateCollection"))
              .build();
        }
      }
    }
    return getCreateCollectionMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.GetCollectionRequest,
      stream.api.live.GetCollectionResponse> getGetCollectionMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetCollection",
      requestType = stream.api.live.GetCollectionRequest.class,
      responseType = stream.api.live.GetCollectionResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.GetCollectionRequest,
      stream.api.live.GetCollectionResponse> getGetCollectionMethod() {
    io.grpc.MethodDescriptor<stream.api.live.GetCollectionRequest, stream.api.live.GetCollectionResponse> getGetCollectionMethod;
    if ((getGetCollectionMethod = CollectionServiceGrpc.getGetCollectionMethod) == null) {
      synchronized (CollectionServiceGrpc.class) {
        if ((getGetCollectionMethod = CollectionServiceGrpc.getGetCollectionMethod) == null) {
          CollectionServiceGrpc.getGetCollectionMethod = getGetCollectionMethod =
              io.grpc.MethodDescriptor.<stream.api.live.GetCollectionRequest, stream.api.live.GetCollectionResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetCollection"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GetCollectionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GetCollectionResponse.getDefaultInstance()))
              .setSchemaDescriptor(new CollectionServiceMethodDescriptorSupplier("GetCollection"))
              .build();
        }
      }
    }
    return getGetCollectionMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.GetCollectionsRequest,
      stream.api.live.GetCollectionsResponse> getGetCollectionsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetCollections",
      requestType = stream.api.live.GetCollectionsRequest.class,
      responseType = stream.api.live.GetCollectionsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.GetCollectionsRequest,
      stream.api.live.GetCollectionsResponse> getGetCollectionsMethod() {
    io.grpc.MethodDescriptor<stream.api.live.GetCollectionsRequest, stream.api.live.GetCollectionsResponse> getGetCollectionsMethod;
    if ((getGetCollectionsMethod = CollectionServiceGrpc.getGetCollectionsMethod) == null) {
      synchronized (CollectionServiceGrpc.class) {
        if ((getGetCollectionsMethod = CollectionServiceGrpc.getGetCollectionsMethod) == null) {
          CollectionServiceGrpc.getGetCollectionsMethod = getGetCollectionsMethod =
              io.grpc.MethodDescriptor.<stream.api.live.GetCollectionsRequest, stream.api.live.GetCollectionsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetCollections"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GetCollectionsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GetCollectionsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new CollectionServiceMethodDescriptorSupplier("GetCollections"))
              .build();
        }
      }
    }
    return getGetCollectionsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.UpdateCollectionRequest,
      stream.api.live.UpdateCollectionResponse> getUpdateCollectionMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdateCollection",
      requestType = stream.api.live.UpdateCollectionRequest.class,
      responseType = stream.api.live.UpdateCollectionResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.UpdateCollectionRequest,
      stream.api.live.UpdateCollectionResponse> getUpdateCollectionMethod() {
    io.grpc.MethodDescriptor<stream.api.live.UpdateCollectionRequest, stream.api.live.UpdateCollectionResponse> getUpdateCollectionMethod;
    if ((getUpdateCollectionMethod = CollectionServiceGrpc.getUpdateCollectionMethod) == null) {
      synchronized (CollectionServiceGrpc.class) {
        if ((getUpdateCollectionMethod = CollectionServiceGrpc.getUpdateCollectionMethod) == null) {
          CollectionServiceGrpc.getUpdateCollectionMethod = getUpdateCollectionMethod =
              io.grpc.MethodDescriptor.<stream.api.live.UpdateCollectionRequest, stream.api.live.UpdateCollectionResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UpdateCollection"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.UpdateCollectionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.UpdateCollectionResponse.getDefaultInstance()))
              .setSchemaDescriptor(new CollectionServiceMethodDescriptorSupplier("UpdateCollection"))
              .build();
        }
      }
    }
    return getUpdateCollectionMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.DeleteCollectionRequest,
      stream.api.live.DeleteCollectionResponse> getDeleteCollectionMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeleteCollection",
      requestType = stream.api.live.DeleteCollectionRequest.class,
      responseType = stream.api.live.DeleteCollectionResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.DeleteCollectionRequest,
      stream.api.live.DeleteCollectionResponse> getDeleteCollectionMethod() {
    io.grpc.MethodDescriptor<stream.api.live.DeleteCollectionRequest, stream.api.live.DeleteCollectionResponse> getDeleteCollectionMethod;
    if ((getDeleteCollectionMethod = CollectionServiceGrpc.getDeleteCollectionMethod) == null) {
      synchronized (CollectionServiceGrpc.class) {
        if ((getDeleteCollectionMethod = CollectionServiceGrpc.getDeleteCollectionMethod) == null) {
          CollectionServiceGrpc.getDeleteCollectionMethod = getDeleteCollectionMethod =
              io.grpc.MethodDescriptor.<stream.api.live.DeleteCollectionRequest, stream.api.live.DeleteCollectionResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeleteCollection"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.DeleteCollectionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.DeleteCollectionResponse.getDefaultInstance()))
              .setSchemaDescriptor(new CollectionServiceMethodDescriptorSupplier("DeleteCollection"))
              .build();
        }
      }
    }
    return getDeleteCollectionMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static CollectionServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<CollectionServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<CollectionServiceStub>() {
        @java.lang.Override
        public CollectionServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new CollectionServiceStub(channel, callOptions);
        }
      };
    return CollectionServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static CollectionServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<CollectionServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<CollectionServiceBlockingStub>() {
        @java.lang.Override
        public CollectionServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new CollectionServiceBlockingStub(channel, callOptions);
        }
      };
    return CollectionServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static CollectionServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<CollectionServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<CollectionServiceFutureStub>() {
        @java.lang.Override
        public CollectionServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new CollectionServiceFutureStub(channel, callOptions);
        }
      };
    return CollectionServiceFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * The Collection Service operates on collections, which contain projects and
   * collection live sources used in projects.
   * </pre>
   */
  public static abstract class CollectionServiceImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Create Collection
     * Create a new collection of related projects and collection live sources
     * </pre>
     */
    public void createCollection(stream.api.live.CreateCollectionRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.CreateCollectionResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCreateCollectionMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get Collection
     * Get an existing collection of related projects and collection live sources
     * </pre>
     */
    public void getCollection(stream.api.live.GetCollectionRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GetCollectionResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetCollectionMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get Collections
     * Get all collections owned by the user
     * </pre>
     */
    public void getCollections(stream.api.live.GetCollectionsRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GetCollectionsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetCollectionsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Update Collection
     * Update select collection document data
     * </pre>
     */
    public void updateCollection(stream.api.live.UpdateCollectionRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.UpdateCollectionResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateCollectionMethod(), responseObserver);
    }

    /**
     * <pre>
     * Delete Collection
     * Delete a collection of related projects and collection live sources
     * </pre>
     */
    public void deleteCollection(stream.api.live.DeleteCollectionRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.DeleteCollectionResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeleteCollectionMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getCreateCollectionMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.CreateCollectionRequest,
                stream.api.live.CreateCollectionResponse>(
                  this, METHODID_CREATE_COLLECTION)))
          .addMethod(
            getGetCollectionMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.GetCollectionRequest,
                stream.api.live.GetCollectionResponse>(
                  this, METHODID_GET_COLLECTION)))
          .addMethod(
            getGetCollectionsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.GetCollectionsRequest,
                stream.api.live.GetCollectionsResponse>(
                  this, METHODID_GET_COLLECTIONS)))
          .addMethod(
            getUpdateCollectionMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.UpdateCollectionRequest,
                stream.api.live.UpdateCollectionResponse>(
                  this, METHODID_UPDATE_COLLECTION)))
          .addMethod(
            getDeleteCollectionMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.DeleteCollectionRequest,
                stream.api.live.DeleteCollectionResponse>(
                  this, METHODID_DELETE_COLLECTION)))
          .build();
    }
  }

  /**
   * <pre>
   * The Collection Service operates on collections, which contain projects and
   * collection live sources used in projects.
   * </pre>
   */
  public static final class CollectionServiceStub extends io.grpc.stub.AbstractAsyncStub<CollectionServiceStub> {
    private CollectionServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected CollectionServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new CollectionServiceStub(channel, callOptions);
    }

    /**
     * <pre>
     * Create Collection
     * Create a new collection of related projects and collection live sources
     * </pre>
     */
    public void createCollection(stream.api.live.CreateCollectionRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.CreateCollectionResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCreateCollectionMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get Collection
     * Get an existing collection of related projects and collection live sources
     * </pre>
     */
    public void getCollection(stream.api.live.GetCollectionRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GetCollectionResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetCollectionMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get Collections
     * Get all collections owned by the user
     * </pre>
     */
    public void getCollections(stream.api.live.GetCollectionsRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GetCollectionsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetCollectionsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Update Collection
     * Update select collection document data
     * </pre>
     */
    public void updateCollection(stream.api.live.UpdateCollectionRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.UpdateCollectionResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateCollectionMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Delete Collection
     * Delete a collection of related projects and collection live sources
     * </pre>
     */
    public void deleteCollection(stream.api.live.DeleteCollectionRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.DeleteCollectionResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeleteCollectionMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * The Collection Service operates on collections, which contain projects and
   * collection live sources used in projects.
   * </pre>
   */
  public static final class CollectionServiceBlockingStub extends io.grpc.stub.AbstractBlockingStub<CollectionServiceBlockingStub> {
    private CollectionServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected CollectionServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new CollectionServiceBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Create Collection
     * Create a new collection of related projects and collection live sources
     * </pre>
     */
    public stream.api.live.CreateCollectionResponse createCollection(stream.api.live.CreateCollectionRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCreateCollectionMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get Collection
     * Get an existing collection of related projects and collection live sources
     * </pre>
     */
    public stream.api.live.GetCollectionResponse getCollection(stream.api.live.GetCollectionRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetCollectionMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get Collections
     * Get all collections owned by the user
     * </pre>
     */
    public stream.api.live.GetCollectionsResponse getCollections(stream.api.live.GetCollectionsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetCollectionsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Update Collection
     * Update select collection document data
     * </pre>
     */
    public stream.api.live.UpdateCollectionResponse updateCollection(stream.api.live.UpdateCollectionRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateCollectionMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Delete Collection
     * Delete a collection of related projects and collection live sources
     * </pre>
     */
    public stream.api.live.DeleteCollectionResponse deleteCollection(stream.api.live.DeleteCollectionRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeleteCollectionMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * The Collection Service operates on collections, which contain projects and
   * collection live sources used in projects.
   * </pre>
   */
  public static final class CollectionServiceFutureStub extends io.grpc.stub.AbstractFutureStub<CollectionServiceFutureStub> {
    private CollectionServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected CollectionServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new CollectionServiceFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Create Collection
     * Create a new collection of related projects and collection live sources
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.CreateCollectionResponse> createCollection(
        stream.api.live.CreateCollectionRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCreateCollectionMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get Collection
     * Get an existing collection of related projects and collection live sources
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.GetCollectionResponse> getCollection(
        stream.api.live.GetCollectionRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetCollectionMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get Collections
     * Get all collections owned by the user
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.GetCollectionsResponse> getCollections(
        stream.api.live.GetCollectionsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetCollectionsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Update Collection
     * Update select collection document data
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.UpdateCollectionResponse> updateCollection(
        stream.api.live.UpdateCollectionRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateCollectionMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Delete Collection
     * Delete a collection of related projects and collection live sources
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.DeleteCollectionResponse> deleteCollection(
        stream.api.live.DeleteCollectionRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeleteCollectionMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_CREATE_COLLECTION = 0;
  private static final int METHODID_GET_COLLECTION = 1;
  private static final int METHODID_GET_COLLECTIONS = 2;
  private static final int METHODID_UPDATE_COLLECTION = 3;
  private static final int METHODID_DELETE_COLLECTION = 4;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final CollectionServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(CollectionServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_CREATE_COLLECTION:
          serviceImpl.createCollection((stream.api.live.CreateCollectionRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.CreateCollectionResponse>) responseObserver);
          break;
        case METHODID_GET_COLLECTION:
          serviceImpl.getCollection((stream.api.live.GetCollectionRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.GetCollectionResponse>) responseObserver);
          break;
        case METHODID_GET_COLLECTIONS:
          serviceImpl.getCollections((stream.api.live.GetCollectionsRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.GetCollectionsResponse>) responseObserver);
          break;
        case METHODID_UPDATE_COLLECTION:
          serviceImpl.updateCollection((stream.api.live.UpdateCollectionRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.UpdateCollectionResponse>) responseObserver);
          break;
        case METHODID_DELETE_COLLECTION:
          serviceImpl.deleteCollection((stream.api.live.DeleteCollectionRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.DeleteCollectionResponse>) responseObserver);
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

  private static abstract class CollectionServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    CollectionServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return stream.api.live.Api.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("CollectionService");
    }
  }

  private static final class CollectionServiceFileDescriptorSupplier
      extends CollectionServiceBaseDescriptorSupplier {
    CollectionServiceFileDescriptorSupplier() {}
  }

  private static final class CollectionServiceMethodDescriptorSupplier
      extends CollectionServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    CollectionServiceMethodDescriptorSupplier(String methodName) {
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
      synchronized (CollectionServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new CollectionServiceFileDescriptorSupplier())
              .addMethod(getCreateCollectionMethod())
              .addMethod(getGetCollectionMethod())
              .addMethod(getGetCollectionsMethod())
              .addMethod(getUpdateCollectionMethod())
              .addMethod(getDeleteCollectionMethod())
              .build();
        }
      }
    }
    return result;
  }
}
