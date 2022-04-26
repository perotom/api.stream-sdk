/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package stream.api.live;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * The Source Service operates on Collection Live Sources and Project Sources.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.45.0)",
    comments = "Source: live/v21/api.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class SourceServiceGrpc {

  private SourceServiceGrpc() {}

  public static final String SERVICE_NAME = "live.v21.SourceService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<stream.api.live.CreateSourceRequest,
      stream.api.live.CreateSourceResponse> getCreateSourceMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CreateSource",
      requestType = stream.api.live.CreateSourceRequest.class,
      responseType = stream.api.live.CreateSourceResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.CreateSourceRequest,
      stream.api.live.CreateSourceResponse> getCreateSourceMethod() {
    io.grpc.MethodDescriptor<stream.api.live.CreateSourceRequest, stream.api.live.CreateSourceResponse> getCreateSourceMethod;
    if ((getCreateSourceMethod = SourceServiceGrpc.getCreateSourceMethod) == null) {
      synchronized (SourceServiceGrpc.class) {
        if ((getCreateSourceMethod = SourceServiceGrpc.getCreateSourceMethod) == null) {
          SourceServiceGrpc.getCreateSourceMethod = getCreateSourceMethod =
              io.grpc.MethodDescriptor.<stream.api.live.CreateSourceRequest, stream.api.live.CreateSourceResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CreateSource"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.CreateSourceRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.CreateSourceResponse.getDefaultInstance()))
              .setSchemaDescriptor(new SourceServiceMethodDescriptorSupplier("CreateSource"))
              .build();
        }
      }
    }
    return getCreateSourceMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.DeleteSourceRequest,
      stream.api.live.DeleteSourceResponse> getDeleteSourceMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeleteSource",
      requestType = stream.api.live.DeleteSourceRequest.class,
      responseType = stream.api.live.DeleteSourceResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.DeleteSourceRequest,
      stream.api.live.DeleteSourceResponse> getDeleteSourceMethod() {
    io.grpc.MethodDescriptor<stream.api.live.DeleteSourceRequest, stream.api.live.DeleteSourceResponse> getDeleteSourceMethod;
    if ((getDeleteSourceMethod = SourceServiceGrpc.getDeleteSourceMethod) == null) {
      synchronized (SourceServiceGrpc.class) {
        if ((getDeleteSourceMethod = SourceServiceGrpc.getDeleteSourceMethod) == null) {
          SourceServiceGrpc.getDeleteSourceMethod = getDeleteSourceMethod =
              io.grpc.MethodDescriptor.<stream.api.live.DeleteSourceRequest, stream.api.live.DeleteSourceResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeleteSource"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.DeleteSourceRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.DeleteSourceResponse.getDefaultInstance()))
              .setSchemaDescriptor(new SourceServiceMethodDescriptorSupplier("DeleteSource"))
              .build();
        }
      }
    }
    return getDeleteSourceMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.UpdateSourceRequest,
      stream.api.live.UpdateSourceResponse> getUpdateSourceMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdateSource",
      requestType = stream.api.live.UpdateSourceRequest.class,
      responseType = stream.api.live.UpdateSourceResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.UpdateSourceRequest,
      stream.api.live.UpdateSourceResponse> getUpdateSourceMethod() {
    io.grpc.MethodDescriptor<stream.api.live.UpdateSourceRequest, stream.api.live.UpdateSourceResponse> getUpdateSourceMethod;
    if ((getUpdateSourceMethod = SourceServiceGrpc.getUpdateSourceMethod) == null) {
      synchronized (SourceServiceGrpc.class) {
        if ((getUpdateSourceMethod = SourceServiceGrpc.getUpdateSourceMethod) == null) {
          SourceServiceGrpc.getUpdateSourceMethod = getUpdateSourceMethod =
              io.grpc.MethodDescriptor.<stream.api.live.UpdateSourceRequest, stream.api.live.UpdateSourceResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UpdateSource"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.UpdateSourceRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.UpdateSourceResponse.getDefaultInstance()))
              .setSchemaDescriptor(new SourceServiceMethodDescriptorSupplier("UpdateSource"))
              .build();
        }
      }
    }
    return getUpdateSourceMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.UpdateSourceInProjectRequest,
      stream.api.live.UpdateSourceInProjectResponse> getUpdateSourceInProjectMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdateSourceInProject",
      requestType = stream.api.live.UpdateSourceInProjectRequest.class,
      responseType = stream.api.live.UpdateSourceInProjectResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.UpdateSourceInProjectRequest,
      stream.api.live.UpdateSourceInProjectResponse> getUpdateSourceInProjectMethod() {
    io.grpc.MethodDescriptor<stream.api.live.UpdateSourceInProjectRequest, stream.api.live.UpdateSourceInProjectResponse> getUpdateSourceInProjectMethod;
    if ((getUpdateSourceInProjectMethod = SourceServiceGrpc.getUpdateSourceInProjectMethod) == null) {
      synchronized (SourceServiceGrpc.class) {
        if ((getUpdateSourceInProjectMethod = SourceServiceGrpc.getUpdateSourceInProjectMethod) == null) {
          SourceServiceGrpc.getUpdateSourceInProjectMethod = getUpdateSourceInProjectMethod =
              io.grpc.MethodDescriptor.<stream.api.live.UpdateSourceInProjectRequest, stream.api.live.UpdateSourceInProjectResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UpdateSourceInProject"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.UpdateSourceInProjectRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.UpdateSourceInProjectResponse.getDefaultInstance()))
              .setSchemaDescriptor(new SourceServiceMethodDescriptorSupplier("UpdateSourceInProject"))
              .build();
        }
      }
    }
    return getUpdateSourceInProjectMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.GetSourceRequest,
      stream.api.live.GetSourceResponse> getGetSourceMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetSource",
      requestType = stream.api.live.GetSourceRequest.class,
      responseType = stream.api.live.GetSourceResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.GetSourceRequest,
      stream.api.live.GetSourceResponse> getGetSourceMethod() {
    io.grpc.MethodDescriptor<stream.api.live.GetSourceRequest, stream.api.live.GetSourceResponse> getGetSourceMethod;
    if ((getGetSourceMethod = SourceServiceGrpc.getGetSourceMethod) == null) {
      synchronized (SourceServiceGrpc.class) {
        if ((getGetSourceMethod = SourceServiceGrpc.getGetSourceMethod) == null) {
          SourceServiceGrpc.getGetSourceMethod = getGetSourceMethod =
              io.grpc.MethodDescriptor.<stream.api.live.GetSourceRequest, stream.api.live.GetSourceResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetSource"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GetSourceRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GetSourceResponse.getDefaultInstance()))
              .setSchemaDescriptor(new SourceServiceMethodDescriptorSupplier("GetSource"))
              .build();
        }
      }
    }
    return getGetSourceMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.GetSourcesRequest,
      stream.api.live.GetSourcesResponse> getGetSourcesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetSources",
      requestType = stream.api.live.GetSourcesRequest.class,
      responseType = stream.api.live.GetSourcesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.GetSourcesRequest,
      stream.api.live.GetSourcesResponse> getGetSourcesMethod() {
    io.grpc.MethodDescriptor<stream.api.live.GetSourcesRequest, stream.api.live.GetSourcesResponse> getGetSourcesMethod;
    if ((getGetSourcesMethod = SourceServiceGrpc.getGetSourcesMethod) == null) {
      synchronized (SourceServiceGrpc.class) {
        if ((getGetSourcesMethod = SourceServiceGrpc.getGetSourcesMethod) == null) {
          SourceServiceGrpc.getGetSourcesMethod = getGetSourcesMethod =
              io.grpc.MethodDescriptor.<stream.api.live.GetSourcesRequest, stream.api.live.GetSourcesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetSources"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GetSourcesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GetSourcesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new SourceServiceMethodDescriptorSupplier("GetSources"))
              .build();
        }
      }
    }
    return getGetSourcesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.AddSourceToProjectRequest,
      stream.api.live.AddSourceToProjectResponse> getAddSourceToProjectMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AddSourceToProject",
      requestType = stream.api.live.AddSourceToProjectRequest.class,
      responseType = stream.api.live.AddSourceToProjectResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.AddSourceToProjectRequest,
      stream.api.live.AddSourceToProjectResponse> getAddSourceToProjectMethod() {
    io.grpc.MethodDescriptor<stream.api.live.AddSourceToProjectRequest, stream.api.live.AddSourceToProjectResponse> getAddSourceToProjectMethod;
    if ((getAddSourceToProjectMethod = SourceServiceGrpc.getAddSourceToProjectMethod) == null) {
      synchronized (SourceServiceGrpc.class) {
        if ((getAddSourceToProjectMethod = SourceServiceGrpc.getAddSourceToProjectMethod) == null) {
          SourceServiceGrpc.getAddSourceToProjectMethod = getAddSourceToProjectMethod =
              io.grpc.MethodDescriptor.<stream.api.live.AddSourceToProjectRequest, stream.api.live.AddSourceToProjectResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AddSourceToProject"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.AddSourceToProjectRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.AddSourceToProjectResponse.getDefaultInstance()))
              .setSchemaDescriptor(new SourceServiceMethodDescriptorSupplier("AddSourceToProject"))
              .build();
        }
      }
    }
    return getAddSourceToProjectMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.RemoveSourceFromProjectRequest,
      stream.api.live.RemoveSourceFromProjectResponse> getRemoveSourceFromProjectMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "RemoveSourceFromProject",
      requestType = stream.api.live.RemoveSourceFromProjectRequest.class,
      responseType = stream.api.live.RemoveSourceFromProjectResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.RemoveSourceFromProjectRequest,
      stream.api.live.RemoveSourceFromProjectResponse> getRemoveSourceFromProjectMethod() {
    io.grpc.MethodDescriptor<stream.api.live.RemoveSourceFromProjectRequest, stream.api.live.RemoveSourceFromProjectResponse> getRemoveSourceFromProjectMethod;
    if ((getRemoveSourceFromProjectMethod = SourceServiceGrpc.getRemoveSourceFromProjectMethod) == null) {
      synchronized (SourceServiceGrpc.class) {
        if ((getRemoveSourceFromProjectMethod = SourceServiceGrpc.getRemoveSourceFromProjectMethod) == null) {
          SourceServiceGrpc.getRemoveSourceFromProjectMethod = getRemoveSourceFromProjectMethod =
              io.grpc.MethodDescriptor.<stream.api.live.RemoveSourceFromProjectRequest, stream.api.live.RemoveSourceFromProjectResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "RemoveSourceFromProject"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.RemoveSourceFromProjectRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.RemoveSourceFromProjectResponse.getDefaultInstance()))
              .setSchemaDescriptor(new SourceServiceMethodDescriptorSupplier("RemoveSourceFromProject"))
              .build();
        }
      }
    }
    return getRemoveSourceFromProjectMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static SourceServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<SourceServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<SourceServiceStub>() {
        @java.lang.Override
        public SourceServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new SourceServiceStub(channel, callOptions);
        }
      };
    return SourceServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static SourceServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<SourceServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<SourceServiceBlockingStub>() {
        @java.lang.Override
        public SourceServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new SourceServiceBlockingStub(channel, callOptions);
        }
      };
    return SourceServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static SourceServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<SourceServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<SourceServiceFutureStub>() {
        @java.lang.Override
        public SourceServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new SourceServiceFutureStub(channel, callOptions);
        }
      };
    return SourceServiceFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * The Source Service operates on Collection Live Sources and Project Sources.
   * </pre>
   */
  public static abstract class SourceServiceImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Create Collection Live Source
     * Create a new live source in a collection
     * ### Permissions
     * * scope: `SCOPE_VAPI_CREATE`
     * </pre>
     */
    public void createSource(stream.api.live.CreateSourceRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.CreateSourceResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCreateSourceMethod(), responseObserver);
    }

    /**
     * <pre>
     * Delete Live Source
     * Deletes a live source from a collection
     * </pre>
     */
    public void deleteSource(stream.api.live.DeleteSourceRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.DeleteSourceResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeleteSourceMethod(), responseObserver);
    }

    /**
     * <pre>
     * Update Source
     * Update attributes of the Source.
     * </pre>
     */
    public void updateSource(stream.api.live.UpdateSourceRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.UpdateSourceResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateSourceMethod(), responseObserver);
    }

    /**
     * <pre>
     * Update Source
     * Update attributes of the Source.
     * </pre>
     */
    public void updateSourceInProject(stream.api.live.UpdateSourceInProjectRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.UpdateSourceInProjectResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateSourceInProjectMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get Source
     * Get an existing source in a project
     * </pre>
     */
    public void getSource(stream.api.live.GetSourceRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GetSourceResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetSourceMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get Source
     * Get existing sources in a collection
     * </pre>
     */
    public void getSources(stream.api.live.GetSourcesRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GetSourcesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetSourcesMethod(), responseObserver);
    }

    /**
     * <pre>
     * Add Source to Project
     * Add a source to a project
     * </pre>
     */
    public void addSourceToProject(stream.api.live.AddSourceToProjectRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.AddSourceToProjectResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAddSourceToProjectMethod(), responseObserver);
    }

    /**
     * <pre>
     * Delete Source From Project
     * Removes a source from a project.
     * </pre>
     */
    public void removeSourceFromProject(stream.api.live.RemoveSourceFromProjectRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.RemoveSourceFromProjectResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getRemoveSourceFromProjectMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getCreateSourceMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.CreateSourceRequest,
                stream.api.live.CreateSourceResponse>(
                  this, METHODID_CREATE_SOURCE)))
          .addMethod(
            getDeleteSourceMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.DeleteSourceRequest,
                stream.api.live.DeleteSourceResponse>(
                  this, METHODID_DELETE_SOURCE)))
          .addMethod(
            getUpdateSourceMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.UpdateSourceRequest,
                stream.api.live.UpdateSourceResponse>(
                  this, METHODID_UPDATE_SOURCE)))
          .addMethod(
            getUpdateSourceInProjectMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.UpdateSourceInProjectRequest,
                stream.api.live.UpdateSourceInProjectResponse>(
                  this, METHODID_UPDATE_SOURCE_IN_PROJECT)))
          .addMethod(
            getGetSourceMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.GetSourceRequest,
                stream.api.live.GetSourceResponse>(
                  this, METHODID_GET_SOURCE)))
          .addMethod(
            getGetSourcesMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.GetSourcesRequest,
                stream.api.live.GetSourcesResponse>(
                  this, METHODID_GET_SOURCES)))
          .addMethod(
            getAddSourceToProjectMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.AddSourceToProjectRequest,
                stream.api.live.AddSourceToProjectResponse>(
                  this, METHODID_ADD_SOURCE_TO_PROJECT)))
          .addMethod(
            getRemoveSourceFromProjectMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.RemoveSourceFromProjectRequest,
                stream.api.live.RemoveSourceFromProjectResponse>(
                  this, METHODID_REMOVE_SOURCE_FROM_PROJECT)))
          .build();
    }
  }

  /**
   * <pre>
   * The Source Service operates on Collection Live Sources and Project Sources.
   * </pre>
   */
  public static final class SourceServiceStub extends io.grpc.stub.AbstractAsyncStub<SourceServiceStub> {
    private SourceServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SourceServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new SourceServiceStub(channel, callOptions);
    }

    /**
     * <pre>
     * Create Collection Live Source
     * Create a new live source in a collection
     * ### Permissions
     * * scope: `SCOPE_VAPI_CREATE`
     * </pre>
     */
    public void createSource(stream.api.live.CreateSourceRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.CreateSourceResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCreateSourceMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Delete Live Source
     * Deletes a live source from a collection
     * </pre>
     */
    public void deleteSource(stream.api.live.DeleteSourceRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.DeleteSourceResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeleteSourceMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Update Source
     * Update attributes of the Source.
     * </pre>
     */
    public void updateSource(stream.api.live.UpdateSourceRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.UpdateSourceResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateSourceMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Update Source
     * Update attributes of the Source.
     * </pre>
     */
    public void updateSourceInProject(stream.api.live.UpdateSourceInProjectRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.UpdateSourceInProjectResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateSourceInProjectMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get Source
     * Get an existing source in a project
     * </pre>
     */
    public void getSource(stream.api.live.GetSourceRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GetSourceResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetSourceMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get Source
     * Get existing sources in a collection
     * </pre>
     */
    public void getSources(stream.api.live.GetSourcesRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GetSourcesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetSourcesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Add Source to Project
     * Add a source to a project
     * </pre>
     */
    public void addSourceToProject(stream.api.live.AddSourceToProjectRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.AddSourceToProjectResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAddSourceToProjectMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Delete Source From Project
     * Removes a source from a project.
     * </pre>
     */
    public void removeSourceFromProject(stream.api.live.RemoveSourceFromProjectRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.RemoveSourceFromProjectResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getRemoveSourceFromProjectMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * The Source Service operates on Collection Live Sources and Project Sources.
   * </pre>
   */
  public static final class SourceServiceBlockingStub extends io.grpc.stub.AbstractBlockingStub<SourceServiceBlockingStub> {
    private SourceServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SourceServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new SourceServiceBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Create Collection Live Source
     * Create a new live source in a collection
     * ### Permissions
     * * scope: `SCOPE_VAPI_CREATE`
     * </pre>
     */
    public stream.api.live.CreateSourceResponse createSource(stream.api.live.CreateSourceRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCreateSourceMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Delete Live Source
     * Deletes a live source from a collection
     * </pre>
     */
    public stream.api.live.DeleteSourceResponse deleteSource(stream.api.live.DeleteSourceRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeleteSourceMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Update Source
     * Update attributes of the Source.
     * </pre>
     */
    public stream.api.live.UpdateSourceResponse updateSource(stream.api.live.UpdateSourceRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateSourceMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Update Source
     * Update attributes of the Source.
     * </pre>
     */
    public stream.api.live.UpdateSourceInProjectResponse updateSourceInProject(stream.api.live.UpdateSourceInProjectRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateSourceInProjectMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get Source
     * Get an existing source in a project
     * </pre>
     */
    public stream.api.live.GetSourceResponse getSource(stream.api.live.GetSourceRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetSourceMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get Source
     * Get existing sources in a collection
     * </pre>
     */
    public stream.api.live.GetSourcesResponse getSources(stream.api.live.GetSourcesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetSourcesMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Add Source to Project
     * Add a source to a project
     * </pre>
     */
    public stream.api.live.AddSourceToProjectResponse addSourceToProject(stream.api.live.AddSourceToProjectRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAddSourceToProjectMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Delete Source From Project
     * Removes a source from a project.
     * </pre>
     */
    public stream.api.live.RemoveSourceFromProjectResponse removeSourceFromProject(stream.api.live.RemoveSourceFromProjectRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getRemoveSourceFromProjectMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * The Source Service operates on Collection Live Sources and Project Sources.
   * </pre>
   */
  public static final class SourceServiceFutureStub extends io.grpc.stub.AbstractFutureStub<SourceServiceFutureStub> {
    private SourceServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SourceServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new SourceServiceFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Create Collection Live Source
     * Create a new live source in a collection
     * ### Permissions
     * * scope: `SCOPE_VAPI_CREATE`
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.CreateSourceResponse> createSource(
        stream.api.live.CreateSourceRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCreateSourceMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Delete Live Source
     * Deletes a live source from a collection
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.DeleteSourceResponse> deleteSource(
        stream.api.live.DeleteSourceRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeleteSourceMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Update Source
     * Update attributes of the Source.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.UpdateSourceResponse> updateSource(
        stream.api.live.UpdateSourceRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateSourceMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Update Source
     * Update attributes of the Source.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.UpdateSourceInProjectResponse> updateSourceInProject(
        stream.api.live.UpdateSourceInProjectRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateSourceInProjectMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get Source
     * Get an existing source in a project
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.GetSourceResponse> getSource(
        stream.api.live.GetSourceRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetSourceMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get Source
     * Get existing sources in a collection
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.GetSourcesResponse> getSources(
        stream.api.live.GetSourcesRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetSourcesMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Add Source to Project
     * Add a source to a project
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.AddSourceToProjectResponse> addSourceToProject(
        stream.api.live.AddSourceToProjectRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAddSourceToProjectMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Delete Source From Project
     * Removes a source from a project.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.RemoveSourceFromProjectResponse> removeSourceFromProject(
        stream.api.live.RemoveSourceFromProjectRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getRemoveSourceFromProjectMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_CREATE_SOURCE = 0;
  private static final int METHODID_DELETE_SOURCE = 1;
  private static final int METHODID_UPDATE_SOURCE = 2;
  private static final int METHODID_UPDATE_SOURCE_IN_PROJECT = 3;
  private static final int METHODID_GET_SOURCE = 4;
  private static final int METHODID_GET_SOURCES = 5;
  private static final int METHODID_ADD_SOURCE_TO_PROJECT = 6;
  private static final int METHODID_REMOVE_SOURCE_FROM_PROJECT = 7;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final SourceServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(SourceServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_CREATE_SOURCE:
          serviceImpl.createSource((stream.api.live.CreateSourceRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.CreateSourceResponse>) responseObserver);
          break;
        case METHODID_DELETE_SOURCE:
          serviceImpl.deleteSource((stream.api.live.DeleteSourceRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.DeleteSourceResponse>) responseObserver);
          break;
        case METHODID_UPDATE_SOURCE:
          serviceImpl.updateSource((stream.api.live.UpdateSourceRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.UpdateSourceResponse>) responseObserver);
          break;
        case METHODID_UPDATE_SOURCE_IN_PROJECT:
          serviceImpl.updateSourceInProject((stream.api.live.UpdateSourceInProjectRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.UpdateSourceInProjectResponse>) responseObserver);
          break;
        case METHODID_GET_SOURCE:
          serviceImpl.getSource((stream.api.live.GetSourceRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.GetSourceResponse>) responseObserver);
          break;
        case METHODID_GET_SOURCES:
          serviceImpl.getSources((stream.api.live.GetSourcesRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.GetSourcesResponse>) responseObserver);
          break;
        case METHODID_ADD_SOURCE_TO_PROJECT:
          serviceImpl.addSourceToProject((stream.api.live.AddSourceToProjectRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.AddSourceToProjectResponse>) responseObserver);
          break;
        case METHODID_REMOVE_SOURCE_FROM_PROJECT:
          serviceImpl.removeSourceFromProject((stream.api.live.RemoveSourceFromProjectRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.RemoveSourceFromProjectResponse>) responseObserver);
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

  private static abstract class SourceServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    SourceServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return stream.api.live.Api.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("SourceService");
    }
  }

  private static final class SourceServiceFileDescriptorSupplier
      extends SourceServiceBaseDescriptorSupplier {
    SourceServiceFileDescriptorSupplier() {}
  }

  private static final class SourceServiceMethodDescriptorSupplier
      extends SourceServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    SourceServiceMethodDescriptorSupplier(String methodName) {
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
      synchronized (SourceServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new SourceServiceFileDescriptorSupplier())
              .addMethod(getCreateSourceMethod())
              .addMethod(getDeleteSourceMethod())
              .addMethod(getUpdateSourceMethod())
              .addMethod(getUpdateSourceInProjectMethod())
              .addMethod(getGetSourceMethod())
              .addMethod(getGetSourcesMethod())
              .addMethod(getAddSourceToProjectMethod())
              .addMethod(getRemoveSourceFromProjectMethod())
              .build();
        }
      }
    }
    return result;
  }
}
