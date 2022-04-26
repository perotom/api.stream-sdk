/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package stream.api.layout;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * Layouts
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.45.0)",
    comments = "Source: apis/layout/v2/api.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class LayoutServiceGrpc {

  private LayoutServiceGrpc() {}

  public static final String SERVICE_NAME = "apis.layout.v2.LayoutService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<stream.api.layout.ListLayoutsRequest,
      stream.api.layout.ListLayoutsResponse> getListLayoutsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListLayouts",
      requestType = stream.api.layout.ListLayoutsRequest.class,
      responseType = stream.api.layout.ListLayoutsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.layout.ListLayoutsRequest,
      stream.api.layout.ListLayoutsResponse> getListLayoutsMethod() {
    io.grpc.MethodDescriptor<stream.api.layout.ListLayoutsRequest, stream.api.layout.ListLayoutsResponse> getListLayoutsMethod;
    if ((getListLayoutsMethod = LayoutServiceGrpc.getListLayoutsMethod) == null) {
      synchronized (LayoutServiceGrpc.class) {
        if ((getListLayoutsMethod = LayoutServiceGrpc.getListLayoutsMethod) == null) {
          LayoutServiceGrpc.getListLayoutsMethod = getListLayoutsMethod =
              io.grpc.MethodDescriptor.<stream.api.layout.ListLayoutsRequest, stream.api.layout.ListLayoutsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ListLayouts"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.ListLayoutsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.ListLayoutsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new LayoutServiceMethodDescriptorSupplier("ListLayouts"))
              .build();
        }
      }
    }
    return getListLayoutsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.layout.CreateLayoutRequest,
      stream.api.layout.Layout> getCreateLayoutMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CreateLayout",
      requestType = stream.api.layout.CreateLayoutRequest.class,
      responseType = stream.api.layout.Layout.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.layout.CreateLayoutRequest,
      stream.api.layout.Layout> getCreateLayoutMethod() {
    io.grpc.MethodDescriptor<stream.api.layout.CreateLayoutRequest, stream.api.layout.Layout> getCreateLayoutMethod;
    if ((getCreateLayoutMethod = LayoutServiceGrpc.getCreateLayoutMethod) == null) {
      synchronized (LayoutServiceGrpc.class) {
        if ((getCreateLayoutMethod = LayoutServiceGrpc.getCreateLayoutMethod) == null) {
          LayoutServiceGrpc.getCreateLayoutMethod = getCreateLayoutMethod =
              io.grpc.MethodDescriptor.<stream.api.layout.CreateLayoutRequest, stream.api.layout.Layout>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CreateLayout"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.CreateLayoutRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.Layout.getDefaultInstance()))
              .setSchemaDescriptor(new LayoutServiceMethodDescriptorSupplier("CreateLayout"))
              .build();
        }
      }
    }
    return getCreateLayoutMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.layout.GetLayoutRequest,
      stream.api.layout.Layout> getGetLayoutMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetLayout",
      requestType = stream.api.layout.GetLayoutRequest.class,
      responseType = stream.api.layout.Layout.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.layout.GetLayoutRequest,
      stream.api.layout.Layout> getGetLayoutMethod() {
    io.grpc.MethodDescriptor<stream.api.layout.GetLayoutRequest, stream.api.layout.Layout> getGetLayoutMethod;
    if ((getGetLayoutMethod = LayoutServiceGrpc.getGetLayoutMethod) == null) {
      synchronized (LayoutServiceGrpc.class) {
        if ((getGetLayoutMethod = LayoutServiceGrpc.getGetLayoutMethod) == null) {
          LayoutServiceGrpc.getGetLayoutMethod = getGetLayoutMethod =
              io.grpc.MethodDescriptor.<stream.api.layout.GetLayoutRequest, stream.api.layout.Layout>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetLayout"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.GetLayoutRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.Layout.getDefaultInstance()))
              .setSchemaDescriptor(new LayoutServiceMethodDescriptorSupplier("GetLayout"))
              .build();
        }
      }
    }
    return getGetLayoutMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.layout.UpdateLayoutRequest,
      stream.api.layout.Layout> getUpdateLayoutMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdateLayout",
      requestType = stream.api.layout.UpdateLayoutRequest.class,
      responseType = stream.api.layout.Layout.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.layout.UpdateLayoutRequest,
      stream.api.layout.Layout> getUpdateLayoutMethod() {
    io.grpc.MethodDescriptor<stream.api.layout.UpdateLayoutRequest, stream.api.layout.Layout> getUpdateLayoutMethod;
    if ((getUpdateLayoutMethod = LayoutServiceGrpc.getUpdateLayoutMethod) == null) {
      synchronized (LayoutServiceGrpc.class) {
        if ((getUpdateLayoutMethod = LayoutServiceGrpc.getUpdateLayoutMethod) == null) {
          LayoutServiceGrpc.getUpdateLayoutMethod = getUpdateLayoutMethod =
              io.grpc.MethodDescriptor.<stream.api.layout.UpdateLayoutRequest, stream.api.layout.Layout>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UpdateLayout"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.UpdateLayoutRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.Layout.getDefaultInstance()))
              .setSchemaDescriptor(new LayoutServiceMethodDescriptorSupplier("UpdateLayout"))
              .build();
        }
      }
    }
    return getUpdateLayoutMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.layout.DeleteLayoutRequest,
      stream.api.layout.DeleteLayoutResponse> getDeleteLayoutMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeleteLayout",
      requestType = stream.api.layout.DeleteLayoutRequest.class,
      responseType = stream.api.layout.DeleteLayoutResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.layout.DeleteLayoutRequest,
      stream.api.layout.DeleteLayoutResponse> getDeleteLayoutMethod() {
    io.grpc.MethodDescriptor<stream.api.layout.DeleteLayoutRequest, stream.api.layout.DeleteLayoutResponse> getDeleteLayoutMethod;
    if ((getDeleteLayoutMethod = LayoutServiceGrpc.getDeleteLayoutMethod) == null) {
      synchronized (LayoutServiceGrpc.class) {
        if ((getDeleteLayoutMethod = LayoutServiceGrpc.getDeleteLayoutMethod) == null) {
          LayoutServiceGrpc.getDeleteLayoutMethod = getDeleteLayoutMethod =
              io.grpc.MethodDescriptor.<stream.api.layout.DeleteLayoutRequest, stream.api.layout.DeleteLayoutResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeleteLayout"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.DeleteLayoutRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.layout.DeleteLayoutResponse.getDefaultInstance()))
              .setSchemaDescriptor(new LayoutServiceMethodDescriptorSupplier("DeleteLayout"))
              .build();
        }
      }
    }
    return getDeleteLayoutMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static LayoutServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<LayoutServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<LayoutServiceStub>() {
        @java.lang.Override
        public LayoutServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new LayoutServiceStub(channel, callOptions);
        }
      };
    return LayoutServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static LayoutServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<LayoutServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<LayoutServiceBlockingStub>() {
        @java.lang.Override
        public LayoutServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new LayoutServiceBlockingStub(channel, callOptions);
        }
      };
    return LayoutServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static LayoutServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<LayoutServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<LayoutServiceFutureStub>() {
        @java.lang.Override
        public LayoutServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new LayoutServiceFutureStub(channel, callOptions);
        }
      };
    return LayoutServiceFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * Layouts
   * </pre>
   */
  public static abstract class LayoutServiceImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Get all layouts owned by the user.
     * </pre>
     */
    public void listLayouts(stream.api.layout.ListLayoutsRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.ListLayoutsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getListLayoutsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Create a new layout
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public void createLayout(stream.api.layout.CreateLayoutRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.Layout> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCreateLayoutMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a layout
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public void getLayout(stream.api.layout.GetLayoutRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.Layout> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetLayoutMethod(), responseObserver);
    }

    /**
     * <pre>
     * Update a layout
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public void updateLayout(stream.api.layout.UpdateLayoutRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.Layout> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateLayoutMethod(), responseObserver);
    }

    /**
     * <pre>
     * Delete a layout
     * </pre>
     */
    public void deleteLayout(stream.api.layout.DeleteLayoutRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.DeleteLayoutResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeleteLayoutMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getListLayoutsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.layout.ListLayoutsRequest,
                stream.api.layout.ListLayoutsResponse>(
                  this, METHODID_LIST_LAYOUTS)))
          .addMethod(
            getCreateLayoutMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.layout.CreateLayoutRequest,
                stream.api.layout.Layout>(
                  this, METHODID_CREATE_LAYOUT)))
          .addMethod(
            getGetLayoutMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.layout.GetLayoutRequest,
                stream.api.layout.Layout>(
                  this, METHODID_GET_LAYOUT)))
          .addMethod(
            getUpdateLayoutMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.layout.UpdateLayoutRequest,
                stream.api.layout.Layout>(
                  this, METHODID_UPDATE_LAYOUT)))
          .addMethod(
            getDeleteLayoutMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.layout.DeleteLayoutRequest,
                stream.api.layout.DeleteLayoutResponse>(
                  this, METHODID_DELETE_LAYOUT)))
          .build();
    }
  }

  /**
   * <pre>
   * Layouts
   * </pre>
   */
  public static final class LayoutServiceStub extends io.grpc.stub.AbstractAsyncStub<LayoutServiceStub> {
    private LayoutServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected LayoutServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new LayoutServiceStub(channel, callOptions);
    }

    /**
     * <pre>
     * Get all layouts owned by the user.
     * </pre>
     */
    public void listLayouts(stream.api.layout.ListLayoutsRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.ListLayoutsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getListLayoutsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Create a new layout
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public void createLayout(stream.api.layout.CreateLayoutRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.Layout> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCreateLayoutMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a layout
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public void getLayout(stream.api.layout.GetLayoutRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.Layout> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetLayoutMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Update a layout
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public void updateLayout(stream.api.layout.UpdateLayoutRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.Layout> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateLayoutMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Delete a layout
     * </pre>
     */
    public void deleteLayout(stream.api.layout.DeleteLayoutRequest request,
        io.grpc.stub.StreamObserver<stream.api.layout.DeleteLayoutResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeleteLayoutMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * Layouts
   * </pre>
   */
  public static final class LayoutServiceBlockingStub extends io.grpc.stub.AbstractBlockingStub<LayoutServiceBlockingStub> {
    private LayoutServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected LayoutServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new LayoutServiceBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Get all layouts owned by the user.
     * </pre>
     */
    public stream.api.layout.ListLayoutsResponse listLayouts(stream.api.layout.ListLayoutsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getListLayoutsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Create a new layout
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public stream.api.layout.Layout createLayout(stream.api.layout.CreateLayoutRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCreateLayoutMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a layout
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public stream.api.layout.Layout getLayout(stream.api.layout.GetLayoutRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetLayoutMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Update a layout
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public stream.api.layout.Layout updateLayout(stream.api.layout.UpdateLayoutRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateLayoutMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Delete a layout
     * </pre>
     */
    public stream.api.layout.DeleteLayoutResponse deleteLayout(stream.api.layout.DeleteLayoutRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeleteLayoutMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * Layouts
   * </pre>
   */
  public static final class LayoutServiceFutureStub extends io.grpc.stub.AbstractFutureStub<LayoutServiceFutureStub> {
    private LayoutServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected LayoutServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new LayoutServiceFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Get all layouts owned by the user.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.layout.ListLayoutsResponse> listLayouts(
        stream.api.layout.ListLayoutsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getListLayoutsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Create a new layout
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.layout.Layout> createLayout(
        stream.api.layout.CreateLayoutRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCreateLayoutMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a layout
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.layout.Layout> getLayout(
        stream.api.layout.GetLayoutRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetLayoutMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Update a layout
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.layout.Layout> updateLayout(
        stream.api.layout.UpdateLayoutRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateLayoutMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Delete a layout
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.layout.DeleteLayoutResponse> deleteLayout(
        stream.api.layout.DeleteLayoutRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeleteLayoutMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_LIST_LAYOUTS = 0;
  private static final int METHODID_CREATE_LAYOUT = 1;
  private static final int METHODID_GET_LAYOUT = 2;
  private static final int METHODID_UPDATE_LAYOUT = 3;
  private static final int METHODID_DELETE_LAYOUT = 4;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final LayoutServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(LayoutServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_LIST_LAYOUTS:
          serviceImpl.listLayouts((stream.api.layout.ListLayoutsRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.layout.ListLayoutsResponse>) responseObserver);
          break;
        case METHODID_CREATE_LAYOUT:
          serviceImpl.createLayout((stream.api.layout.CreateLayoutRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.layout.Layout>) responseObserver);
          break;
        case METHODID_GET_LAYOUT:
          serviceImpl.getLayout((stream.api.layout.GetLayoutRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.layout.Layout>) responseObserver);
          break;
        case METHODID_UPDATE_LAYOUT:
          serviceImpl.updateLayout((stream.api.layout.UpdateLayoutRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.layout.Layout>) responseObserver);
          break;
        case METHODID_DELETE_LAYOUT:
          serviceImpl.deleteLayout((stream.api.layout.DeleteLayoutRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.layout.DeleteLayoutResponse>) responseObserver);
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

  private static abstract class LayoutServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    LayoutServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return stream.api.layout.Api.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("LayoutService");
    }
  }

  private static final class LayoutServiceFileDescriptorSupplier
      extends LayoutServiceBaseDescriptorSupplier {
    LayoutServiceFileDescriptorSupplier() {}
  }

  private static final class LayoutServiceMethodDescriptorSupplier
      extends LayoutServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    LayoutServiceMethodDescriptorSupplier(String methodName) {
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
      synchronized (LayoutServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new LayoutServiceFileDescriptorSupplier())
              .addMethod(getListLayoutsMethod())
              .addMethod(getCreateLayoutMethod())
              .addMethod(getGetLayoutMethod())
              .addMethod(getUpdateLayoutMethod())
              .addMethod(getDeleteLayoutMethod())
              .build();
        }
      }
    }
    return result;
  }
}
