/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package stream.api.live;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * The Project Service operates on a Project.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.45.0)",
    comments = "Source: live/v21/api.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class ProjectServiceGrpc {

  private ProjectServiceGrpc() {}

  public static final String SERVICE_NAME = "live.v21.ProjectService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<stream.api.live.CreateProjectRequest,
      stream.api.live.CreateProjectResponse> getCreateProjectMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CreateProject",
      requestType = stream.api.live.CreateProjectRequest.class,
      responseType = stream.api.live.CreateProjectResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.CreateProjectRequest,
      stream.api.live.CreateProjectResponse> getCreateProjectMethod() {
    io.grpc.MethodDescriptor<stream.api.live.CreateProjectRequest, stream.api.live.CreateProjectResponse> getCreateProjectMethod;
    if ((getCreateProjectMethod = ProjectServiceGrpc.getCreateProjectMethod) == null) {
      synchronized (ProjectServiceGrpc.class) {
        if ((getCreateProjectMethod = ProjectServiceGrpc.getCreateProjectMethod) == null) {
          ProjectServiceGrpc.getCreateProjectMethod = getCreateProjectMethod =
              io.grpc.MethodDescriptor.<stream.api.live.CreateProjectRequest, stream.api.live.CreateProjectResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CreateProject"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.CreateProjectRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.CreateProjectResponse.getDefaultInstance()))
              .setSchemaDescriptor(new ProjectServiceMethodDescriptorSupplier("CreateProject"))
              .build();
        }
      }
    }
    return getCreateProjectMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.GetProjectRequest,
      stream.api.live.GetProjectResponse> getGetProjectMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetProject",
      requestType = stream.api.live.GetProjectRequest.class,
      responseType = stream.api.live.GetProjectResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.GetProjectRequest,
      stream.api.live.GetProjectResponse> getGetProjectMethod() {
    io.grpc.MethodDescriptor<stream.api.live.GetProjectRequest, stream.api.live.GetProjectResponse> getGetProjectMethod;
    if ((getGetProjectMethod = ProjectServiceGrpc.getGetProjectMethod) == null) {
      synchronized (ProjectServiceGrpc.class) {
        if ((getGetProjectMethod = ProjectServiceGrpc.getGetProjectMethod) == null) {
          ProjectServiceGrpc.getGetProjectMethod = getGetProjectMethod =
              io.grpc.MethodDescriptor.<stream.api.live.GetProjectRequest, stream.api.live.GetProjectResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetProject"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GetProjectRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GetProjectResponse.getDefaultInstance()))
              .setSchemaDescriptor(new ProjectServiceMethodDescriptorSupplier("GetProject"))
              .build();
        }
      }
    }
    return getGetProjectMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.DeleteProjectRequest,
      stream.api.live.DeleteProjectResponse> getDeleteProjectMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DeleteProject",
      requestType = stream.api.live.DeleteProjectRequest.class,
      responseType = stream.api.live.DeleteProjectResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.DeleteProjectRequest,
      stream.api.live.DeleteProjectResponse> getDeleteProjectMethod() {
    io.grpc.MethodDescriptor<stream.api.live.DeleteProjectRequest, stream.api.live.DeleteProjectResponse> getDeleteProjectMethod;
    if ((getDeleteProjectMethod = ProjectServiceGrpc.getDeleteProjectMethod) == null) {
      synchronized (ProjectServiceGrpc.class) {
        if ((getDeleteProjectMethod = ProjectServiceGrpc.getDeleteProjectMethod) == null) {
          ProjectServiceGrpc.getDeleteProjectMethod = getDeleteProjectMethod =
              io.grpc.MethodDescriptor.<stream.api.live.DeleteProjectRequest, stream.api.live.DeleteProjectResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DeleteProject"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.DeleteProjectRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.DeleteProjectResponse.getDefaultInstance()))
              .setSchemaDescriptor(new ProjectServiceMethodDescriptorSupplier("DeleteProject"))
              .build();
        }
      }
    }
    return getDeleteProjectMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.UpdateProjectRequest,
      stream.api.live.UpdateProjectResponse> getUpdateProjectMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdateProject",
      requestType = stream.api.live.UpdateProjectRequest.class,
      responseType = stream.api.live.UpdateProjectResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.UpdateProjectRequest,
      stream.api.live.UpdateProjectResponse> getUpdateProjectMethod() {
    io.grpc.MethodDescriptor<stream.api.live.UpdateProjectRequest, stream.api.live.UpdateProjectResponse> getUpdateProjectMethod;
    if ((getUpdateProjectMethod = ProjectServiceGrpc.getUpdateProjectMethod) == null) {
      synchronized (ProjectServiceGrpc.class) {
        if ((getUpdateProjectMethod = ProjectServiceGrpc.getUpdateProjectMethod) == null) {
          ProjectServiceGrpc.getUpdateProjectMethod = getUpdateProjectMethod =
              io.grpc.MethodDescriptor.<stream.api.live.UpdateProjectRequest, stream.api.live.UpdateProjectResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UpdateProject"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.UpdateProjectRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.UpdateProjectResponse.getDefaultInstance()))
              .setSchemaDescriptor(new ProjectServiceMethodDescriptorSupplier("UpdateProject"))
              .build();
        }
      }
    }
    return getUpdateProjectMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.StartProjectBroadcastRequest,
      stream.api.live.StartProjectBroadcastResponse> getStartProjectBroadcastMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "StartProjectBroadcast",
      requestType = stream.api.live.StartProjectBroadcastRequest.class,
      responseType = stream.api.live.StartProjectBroadcastResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.StartProjectBroadcastRequest,
      stream.api.live.StartProjectBroadcastResponse> getStartProjectBroadcastMethod() {
    io.grpc.MethodDescriptor<stream.api.live.StartProjectBroadcastRequest, stream.api.live.StartProjectBroadcastResponse> getStartProjectBroadcastMethod;
    if ((getStartProjectBroadcastMethod = ProjectServiceGrpc.getStartProjectBroadcastMethod) == null) {
      synchronized (ProjectServiceGrpc.class) {
        if ((getStartProjectBroadcastMethod = ProjectServiceGrpc.getStartProjectBroadcastMethod) == null) {
          ProjectServiceGrpc.getStartProjectBroadcastMethod = getStartProjectBroadcastMethod =
              io.grpc.MethodDescriptor.<stream.api.live.StartProjectBroadcastRequest, stream.api.live.StartProjectBroadcastResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "StartProjectBroadcast"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.StartProjectBroadcastRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.StartProjectBroadcastResponse.getDefaultInstance()))
              .setSchemaDescriptor(new ProjectServiceMethodDescriptorSupplier("StartProjectBroadcast"))
              .build();
        }
      }
    }
    return getStartProjectBroadcastMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.StopProjectBroadcastRequest,
      stream.api.live.StopProjectBroadcastResponse> getStopProjectBroadcastMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "StopProjectBroadcast",
      requestType = stream.api.live.StopProjectBroadcastRequest.class,
      responseType = stream.api.live.StopProjectBroadcastResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.StopProjectBroadcastRequest,
      stream.api.live.StopProjectBroadcastResponse> getStopProjectBroadcastMethod() {
    io.grpc.MethodDescriptor<stream.api.live.StopProjectBroadcastRequest, stream.api.live.StopProjectBroadcastResponse> getStopProjectBroadcastMethod;
    if ((getStopProjectBroadcastMethod = ProjectServiceGrpc.getStopProjectBroadcastMethod) == null) {
      synchronized (ProjectServiceGrpc.class) {
        if ((getStopProjectBroadcastMethod = ProjectServiceGrpc.getStopProjectBroadcastMethod) == null) {
          ProjectServiceGrpc.getStopProjectBroadcastMethod = getStopProjectBroadcastMethod =
              io.grpc.MethodDescriptor.<stream.api.live.StopProjectBroadcastRequest, stream.api.live.StopProjectBroadcastResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "StopProjectBroadcast"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.StopProjectBroadcastRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.StopProjectBroadcastResponse.getDefaultInstance()))
              .setSchemaDescriptor(new ProjectServiceMethodDescriptorSupplier("StopProjectBroadcast"))
              .build();
        }
      }
    }
    return getStopProjectBroadcastMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.StartProjectWebRtcRequest,
      stream.api.live.StartProjectWebRtcResponse> getStartProjectWebRtcMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "StartProjectWebRtc",
      requestType = stream.api.live.StartProjectWebRtcRequest.class,
      responseType = stream.api.live.StartProjectWebRtcResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.StartProjectWebRtcRequest,
      stream.api.live.StartProjectWebRtcResponse> getStartProjectWebRtcMethod() {
    io.grpc.MethodDescriptor<stream.api.live.StartProjectWebRtcRequest, stream.api.live.StartProjectWebRtcResponse> getStartProjectWebRtcMethod;
    if ((getStartProjectWebRtcMethod = ProjectServiceGrpc.getStartProjectWebRtcMethod) == null) {
      synchronized (ProjectServiceGrpc.class) {
        if ((getStartProjectWebRtcMethod = ProjectServiceGrpc.getStartProjectWebRtcMethod) == null) {
          ProjectServiceGrpc.getStartProjectWebRtcMethod = getStartProjectWebRtcMethod =
              io.grpc.MethodDescriptor.<stream.api.live.StartProjectWebRtcRequest, stream.api.live.StartProjectWebRtcResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "StartProjectWebRtc"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.StartProjectWebRtcRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.StartProjectWebRtcResponse.getDefaultInstance()))
              .setSchemaDescriptor(new ProjectServiceMethodDescriptorSupplier("StartProjectWebRtc"))
              .build();
        }
      }
    }
    return getStartProjectWebRtcMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.StopProjectWebRtcRequest,
      stream.api.live.StopProjectWebRtcResponse> getStopProjectWebRtcMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "StopProjectWebRtc",
      requestType = stream.api.live.StopProjectWebRtcRequest.class,
      responseType = stream.api.live.StopProjectWebRtcResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.StopProjectWebRtcRequest,
      stream.api.live.StopProjectWebRtcResponse> getStopProjectWebRtcMethod() {
    io.grpc.MethodDescriptor<stream.api.live.StopProjectWebRtcRequest, stream.api.live.StopProjectWebRtcResponse> getStopProjectWebRtcMethod;
    if ((getStopProjectWebRtcMethod = ProjectServiceGrpc.getStopProjectWebRtcMethod) == null) {
      synchronized (ProjectServiceGrpc.class) {
        if ((getStopProjectWebRtcMethod = ProjectServiceGrpc.getStopProjectWebRtcMethod) == null) {
          ProjectServiceGrpc.getStopProjectWebRtcMethod = getStopProjectWebRtcMethod =
              io.grpc.MethodDescriptor.<stream.api.live.StopProjectWebRtcRequest, stream.api.live.StopProjectWebRtcResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "StopProjectWebRtc"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.StopProjectWebRtcRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.StopProjectWebRtcResponse.getDefaultInstance()))
              .setSchemaDescriptor(new ProjectServiceMethodDescriptorSupplier("StopProjectWebRtc"))
              .build();
        }
      }
    }
    return getStopProjectWebRtcMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.GetProjectBroadcastSnapshotRequest,
      stream.api.live.GetProjectBroadcastSnapshotResponse> getGetProjectBroadcastSnapshotMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetProjectBroadcastSnapshot",
      requestType = stream.api.live.GetProjectBroadcastSnapshotRequest.class,
      responseType = stream.api.live.GetProjectBroadcastSnapshotResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.GetProjectBroadcastSnapshotRequest,
      stream.api.live.GetProjectBroadcastSnapshotResponse> getGetProjectBroadcastSnapshotMethod() {
    io.grpc.MethodDescriptor<stream.api.live.GetProjectBroadcastSnapshotRequest, stream.api.live.GetProjectBroadcastSnapshotResponse> getGetProjectBroadcastSnapshotMethod;
    if ((getGetProjectBroadcastSnapshotMethod = ProjectServiceGrpc.getGetProjectBroadcastSnapshotMethod) == null) {
      synchronized (ProjectServiceGrpc.class) {
        if ((getGetProjectBroadcastSnapshotMethod = ProjectServiceGrpc.getGetProjectBroadcastSnapshotMethod) == null) {
          ProjectServiceGrpc.getGetProjectBroadcastSnapshotMethod = getGetProjectBroadcastSnapshotMethod =
              io.grpc.MethodDescriptor.<stream.api.live.GetProjectBroadcastSnapshotRequest, stream.api.live.GetProjectBroadcastSnapshotResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetProjectBroadcastSnapshot"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GetProjectBroadcastSnapshotRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GetProjectBroadcastSnapshotResponse.getDefaultInstance()))
              .setSchemaDescriptor(new ProjectServiceMethodDescriptorSupplier("GetProjectBroadcastSnapshot"))
              .build();
        }
      }
    }
    return getGetProjectBroadcastSnapshotMethod;
  }

  private static volatile io.grpc.MethodDescriptor<stream.api.live.GetProjectBroadcastStatusRequest,
      stream.api.live.GetProjectBroadcastStatusResponse> getGetProjectBroadcastStatusMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetProjectBroadcastStatus",
      requestType = stream.api.live.GetProjectBroadcastStatusRequest.class,
      responseType = stream.api.live.GetProjectBroadcastStatusResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<stream.api.live.GetProjectBroadcastStatusRequest,
      stream.api.live.GetProjectBroadcastStatusResponse> getGetProjectBroadcastStatusMethod() {
    io.grpc.MethodDescriptor<stream.api.live.GetProjectBroadcastStatusRequest, stream.api.live.GetProjectBroadcastStatusResponse> getGetProjectBroadcastStatusMethod;
    if ((getGetProjectBroadcastStatusMethod = ProjectServiceGrpc.getGetProjectBroadcastStatusMethod) == null) {
      synchronized (ProjectServiceGrpc.class) {
        if ((getGetProjectBroadcastStatusMethod = ProjectServiceGrpc.getGetProjectBroadcastStatusMethod) == null) {
          ProjectServiceGrpc.getGetProjectBroadcastStatusMethod = getGetProjectBroadcastStatusMethod =
              io.grpc.MethodDescriptor.<stream.api.live.GetProjectBroadcastStatusRequest, stream.api.live.GetProjectBroadcastStatusResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetProjectBroadcastStatus"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GetProjectBroadcastStatusRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  stream.api.live.GetProjectBroadcastStatusResponse.getDefaultInstance()))
              .setSchemaDescriptor(new ProjectServiceMethodDescriptorSupplier("GetProjectBroadcastStatus"))
              .build();
        }
      }
    }
    return getGetProjectBroadcastStatusMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static ProjectServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ProjectServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ProjectServiceStub>() {
        @java.lang.Override
        public ProjectServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ProjectServiceStub(channel, callOptions);
        }
      };
    return ProjectServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static ProjectServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ProjectServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ProjectServiceBlockingStub>() {
        @java.lang.Override
        public ProjectServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ProjectServiceBlockingStub(channel, callOptions);
        }
      };
    return ProjectServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static ProjectServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ProjectServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ProjectServiceFutureStub>() {
        @java.lang.Override
        public ProjectServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ProjectServiceFutureStub(channel, callOptions);
        }
      };
    return ProjectServiceFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * The Project Service operates on a Project.
   * </pre>
   */
  public static abstract class ProjectServiceImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Create Project
     * Create a new project
     * </pre>
     */
    public void createProject(stream.api.live.CreateProjectRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.CreateProjectResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCreateProjectMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get Project
     * Get an existing project
     * </pre>
     */
    public void getProject(stream.api.live.GetProjectRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GetProjectResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetProjectMethod(), responseObserver);
    }

    /**
     * <pre>
     * Delete Project
     * Delete a project
     * </pre>
     */
    public void deleteProject(stream.api.live.DeleteProjectRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.DeleteProjectResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDeleteProjectMethod(), responseObserver);
    }

    /**
     * <pre>
     * Update Project
     * Updates a project
     * </pre>
     */
    public void updateProject(stream.api.live.UpdateProjectRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.UpdateProjectResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateProjectMethod(), responseObserver);
    }

    /**
     * <pre>
     * Start Broadcast
     * Start broadcasting a project
     * </pre>
     */
    public void startProjectBroadcast(stream.api.live.StartProjectBroadcastRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.StartProjectBroadcastResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getStartProjectBroadcastMethod(), responseObserver);
    }

    /**
     * <pre>
     * Stop Broadcast
     * Stop broadcasting a project
     * </pre>
     */
    public void stopProjectBroadcast(stream.api.live.StopProjectBroadcastRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.StopProjectBroadcastResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getStopProjectBroadcastMethod(), responseObserver);
    }

    /**
     * <pre>
     * Start WebRTC
     * Start WebRTC services
     * </pre>
     */
    public void startProjectWebRtc(stream.api.live.StartProjectWebRtcRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.StartProjectWebRtcResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getStartProjectWebRtcMethod(), responseObserver);
    }

    /**
     * <pre>
     * Stop WebRTC
     * Stop WebRTC services
     * </pre>
     */
    public void stopProjectWebRtc(stream.api.live.StopProjectWebRtcRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.StopProjectWebRtcResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getStopProjectWebRtcMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get Snapshot
     * Get a snapshot of the current output frame of the broadcast
     * </pre>
     */
    public void getProjectBroadcastSnapshot(stream.api.live.GetProjectBroadcastSnapshotRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GetProjectBroadcastSnapshotResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetProjectBroadcastSnapshotMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get Broadcast Status
     * Get the broadcast status of the project
     * </pre>
     */
    public void getProjectBroadcastStatus(stream.api.live.GetProjectBroadcastStatusRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GetProjectBroadcastStatusResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetProjectBroadcastStatusMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getCreateProjectMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.CreateProjectRequest,
                stream.api.live.CreateProjectResponse>(
                  this, METHODID_CREATE_PROJECT)))
          .addMethod(
            getGetProjectMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.GetProjectRequest,
                stream.api.live.GetProjectResponse>(
                  this, METHODID_GET_PROJECT)))
          .addMethod(
            getDeleteProjectMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.DeleteProjectRequest,
                stream.api.live.DeleteProjectResponse>(
                  this, METHODID_DELETE_PROJECT)))
          .addMethod(
            getUpdateProjectMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.UpdateProjectRequest,
                stream.api.live.UpdateProjectResponse>(
                  this, METHODID_UPDATE_PROJECT)))
          .addMethod(
            getStartProjectBroadcastMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.StartProjectBroadcastRequest,
                stream.api.live.StartProjectBroadcastResponse>(
                  this, METHODID_START_PROJECT_BROADCAST)))
          .addMethod(
            getStopProjectBroadcastMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.StopProjectBroadcastRequest,
                stream.api.live.StopProjectBroadcastResponse>(
                  this, METHODID_STOP_PROJECT_BROADCAST)))
          .addMethod(
            getStartProjectWebRtcMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.StartProjectWebRtcRequest,
                stream.api.live.StartProjectWebRtcResponse>(
                  this, METHODID_START_PROJECT_WEB_RTC)))
          .addMethod(
            getStopProjectWebRtcMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.StopProjectWebRtcRequest,
                stream.api.live.StopProjectWebRtcResponse>(
                  this, METHODID_STOP_PROJECT_WEB_RTC)))
          .addMethod(
            getGetProjectBroadcastSnapshotMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.GetProjectBroadcastSnapshotRequest,
                stream.api.live.GetProjectBroadcastSnapshotResponse>(
                  this, METHODID_GET_PROJECT_BROADCAST_SNAPSHOT)))
          .addMethod(
            getGetProjectBroadcastStatusMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                stream.api.live.GetProjectBroadcastStatusRequest,
                stream.api.live.GetProjectBroadcastStatusResponse>(
                  this, METHODID_GET_PROJECT_BROADCAST_STATUS)))
          .build();
    }
  }

  /**
   * <pre>
   * The Project Service operates on a Project.
   * </pre>
   */
  public static final class ProjectServiceStub extends io.grpc.stub.AbstractAsyncStub<ProjectServiceStub> {
    private ProjectServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ProjectServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ProjectServiceStub(channel, callOptions);
    }

    /**
     * <pre>
     * Create Project
     * Create a new project
     * </pre>
     */
    public void createProject(stream.api.live.CreateProjectRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.CreateProjectResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCreateProjectMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get Project
     * Get an existing project
     * </pre>
     */
    public void getProject(stream.api.live.GetProjectRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GetProjectResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetProjectMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Delete Project
     * Delete a project
     * </pre>
     */
    public void deleteProject(stream.api.live.DeleteProjectRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.DeleteProjectResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDeleteProjectMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Update Project
     * Updates a project
     * </pre>
     */
    public void updateProject(stream.api.live.UpdateProjectRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.UpdateProjectResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateProjectMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Start Broadcast
     * Start broadcasting a project
     * </pre>
     */
    public void startProjectBroadcast(stream.api.live.StartProjectBroadcastRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.StartProjectBroadcastResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getStartProjectBroadcastMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Stop Broadcast
     * Stop broadcasting a project
     * </pre>
     */
    public void stopProjectBroadcast(stream.api.live.StopProjectBroadcastRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.StopProjectBroadcastResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getStopProjectBroadcastMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Start WebRTC
     * Start WebRTC services
     * </pre>
     */
    public void startProjectWebRtc(stream.api.live.StartProjectWebRtcRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.StartProjectWebRtcResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getStartProjectWebRtcMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Stop WebRTC
     * Stop WebRTC services
     * </pre>
     */
    public void stopProjectWebRtc(stream.api.live.StopProjectWebRtcRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.StopProjectWebRtcResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getStopProjectWebRtcMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get Snapshot
     * Get a snapshot of the current output frame of the broadcast
     * </pre>
     */
    public void getProjectBroadcastSnapshot(stream.api.live.GetProjectBroadcastSnapshotRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GetProjectBroadcastSnapshotResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetProjectBroadcastSnapshotMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get Broadcast Status
     * Get the broadcast status of the project
     * </pre>
     */
    public void getProjectBroadcastStatus(stream.api.live.GetProjectBroadcastStatusRequest request,
        io.grpc.stub.StreamObserver<stream.api.live.GetProjectBroadcastStatusResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetProjectBroadcastStatusMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * The Project Service operates on a Project.
   * </pre>
   */
  public static final class ProjectServiceBlockingStub extends io.grpc.stub.AbstractBlockingStub<ProjectServiceBlockingStub> {
    private ProjectServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ProjectServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ProjectServiceBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Create Project
     * Create a new project
     * </pre>
     */
    public stream.api.live.CreateProjectResponse createProject(stream.api.live.CreateProjectRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCreateProjectMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get Project
     * Get an existing project
     * </pre>
     */
    public stream.api.live.GetProjectResponse getProject(stream.api.live.GetProjectRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetProjectMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Delete Project
     * Delete a project
     * </pre>
     */
    public stream.api.live.DeleteProjectResponse deleteProject(stream.api.live.DeleteProjectRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDeleteProjectMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Update Project
     * Updates a project
     * </pre>
     */
    public stream.api.live.UpdateProjectResponse updateProject(stream.api.live.UpdateProjectRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateProjectMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Start Broadcast
     * Start broadcasting a project
     * </pre>
     */
    public stream.api.live.StartProjectBroadcastResponse startProjectBroadcast(stream.api.live.StartProjectBroadcastRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getStartProjectBroadcastMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Stop Broadcast
     * Stop broadcasting a project
     * </pre>
     */
    public stream.api.live.StopProjectBroadcastResponse stopProjectBroadcast(stream.api.live.StopProjectBroadcastRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getStopProjectBroadcastMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Start WebRTC
     * Start WebRTC services
     * </pre>
     */
    public stream.api.live.StartProjectWebRtcResponse startProjectWebRtc(stream.api.live.StartProjectWebRtcRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getStartProjectWebRtcMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Stop WebRTC
     * Stop WebRTC services
     * </pre>
     */
    public stream.api.live.StopProjectWebRtcResponse stopProjectWebRtc(stream.api.live.StopProjectWebRtcRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getStopProjectWebRtcMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get Snapshot
     * Get a snapshot of the current output frame of the broadcast
     * </pre>
     */
    public stream.api.live.GetProjectBroadcastSnapshotResponse getProjectBroadcastSnapshot(stream.api.live.GetProjectBroadcastSnapshotRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetProjectBroadcastSnapshotMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get Broadcast Status
     * Get the broadcast status of the project
     * </pre>
     */
    public stream.api.live.GetProjectBroadcastStatusResponse getProjectBroadcastStatus(stream.api.live.GetProjectBroadcastStatusRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetProjectBroadcastStatusMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * The Project Service operates on a Project.
   * </pre>
   */
  public static final class ProjectServiceFutureStub extends io.grpc.stub.AbstractFutureStub<ProjectServiceFutureStub> {
    private ProjectServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ProjectServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ProjectServiceFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Create Project
     * Create a new project
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.CreateProjectResponse> createProject(
        stream.api.live.CreateProjectRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCreateProjectMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get Project
     * Get an existing project
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.GetProjectResponse> getProject(
        stream.api.live.GetProjectRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetProjectMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Delete Project
     * Delete a project
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.DeleteProjectResponse> deleteProject(
        stream.api.live.DeleteProjectRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDeleteProjectMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Update Project
     * Updates a project
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.UpdateProjectResponse> updateProject(
        stream.api.live.UpdateProjectRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateProjectMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Start Broadcast
     * Start broadcasting a project
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.StartProjectBroadcastResponse> startProjectBroadcast(
        stream.api.live.StartProjectBroadcastRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getStartProjectBroadcastMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Stop Broadcast
     * Stop broadcasting a project
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.StopProjectBroadcastResponse> stopProjectBroadcast(
        stream.api.live.StopProjectBroadcastRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getStopProjectBroadcastMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Start WebRTC
     * Start WebRTC services
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.StartProjectWebRtcResponse> startProjectWebRtc(
        stream.api.live.StartProjectWebRtcRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getStartProjectWebRtcMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Stop WebRTC
     * Stop WebRTC services
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.StopProjectWebRtcResponse> stopProjectWebRtc(
        stream.api.live.StopProjectWebRtcRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getStopProjectWebRtcMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get Snapshot
     * Get a snapshot of the current output frame of the broadcast
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.GetProjectBroadcastSnapshotResponse> getProjectBroadcastSnapshot(
        stream.api.live.GetProjectBroadcastSnapshotRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetProjectBroadcastSnapshotMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get Broadcast Status
     * Get the broadcast status of the project
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<stream.api.live.GetProjectBroadcastStatusResponse> getProjectBroadcastStatus(
        stream.api.live.GetProjectBroadcastStatusRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetProjectBroadcastStatusMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_CREATE_PROJECT = 0;
  private static final int METHODID_GET_PROJECT = 1;
  private static final int METHODID_DELETE_PROJECT = 2;
  private static final int METHODID_UPDATE_PROJECT = 3;
  private static final int METHODID_START_PROJECT_BROADCAST = 4;
  private static final int METHODID_STOP_PROJECT_BROADCAST = 5;
  private static final int METHODID_START_PROJECT_WEB_RTC = 6;
  private static final int METHODID_STOP_PROJECT_WEB_RTC = 7;
  private static final int METHODID_GET_PROJECT_BROADCAST_SNAPSHOT = 8;
  private static final int METHODID_GET_PROJECT_BROADCAST_STATUS = 9;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final ProjectServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(ProjectServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_CREATE_PROJECT:
          serviceImpl.createProject((stream.api.live.CreateProjectRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.CreateProjectResponse>) responseObserver);
          break;
        case METHODID_GET_PROJECT:
          serviceImpl.getProject((stream.api.live.GetProjectRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.GetProjectResponse>) responseObserver);
          break;
        case METHODID_DELETE_PROJECT:
          serviceImpl.deleteProject((stream.api.live.DeleteProjectRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.DeleteProjectResponse>) responseObserver);
          break;
        case METHODID_UPDATE_PROJECT:
          serviceImpl.updateProject((stream.api.live.UpdateProjectRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.UpdateProjectResponse>) responseObserver);
          break;
        case METHODID_START_PROJECT_BROADCAST:
          serviceImpl.startProjectBroadcast((stream.api.live.StartProjectBroadcastRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.StartProjectBroadcastResponse>) responseObserver);
          break;
        case METHODID_STOP_PROJECT_BROADCAST:
          serviceImpl.stopProjectBroadcast((stream.api.live.StopProjectBroadcastRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.StopProjectBroadcastResponse>) responseObserver);
          break;
        case METHODID_START_PROJECT_WEB_RTC:
          serviceImpl.startProjectWebRtc((stream.api.live.StartProjectWebRtcRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.StartProjectWebRtcResponse>) responseObserver);
          break;
        case METHODID_STOP_PROJECT_WEB_RTC:
          serviceImpl.stopProjectWebRtc((stream.api.live.StopProjectWebRtcRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.StopProjectWebRtcResponse>) responseObserver);
          break;
        case METHODID_GET_PROJECT_BROADCAST_SNAPSHOT:
          serviceImpl.getProjectBroadcastSnapshot((stream.api.live.GetProjectBroadcastSnapshotRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.GetProjectBroadcastSnapshotResponse>) responseObserver);
          break;
        case METHODID_GET_PROJECT_BROADCAST_STATUS:
          serviceImpl.getProjectBroadcastStatus((stream.api.live.GetProjectBroadcastStatusRequest) request,
              (io.grpc.stub.StreamObserver<stream.api.live.GetProjectBroadcastStatusResponse>) responseObserver);
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

  private static abstract class ProjectServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    ProjectServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return stream.api.live.Api.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("ProjectService");
    }
  }

  private static final class ProjectServiceFileDescriptorSupplier
      extends ProjectServiceBaseDescriptorSupplier {
    ProjectServiceFileDescriptorSupplier() {}
  }

  private static final class ProjectServiceMethodDescriptorSupplier
      extends ProjectServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    ProjectServiceMethodDescriptorSupplier(String methodName) {
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
      synchronized (ProjectServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new ProjectServiceFileDescriptorSupplier())
              .addMethod(getCreateProjectMethod())
              .addMethod(getGetProjectMethod())
              .addMethod(getDeleteProjectMethod())
              .addMethod(getUpdateProjectMethod())
              .addMethod(getStartProjectBroadcastMethod())
              .addMethod(getStopProjectBroadcastMethod())
              .addMethod(getStartProjectWebRtcMethod())
              .addMethod(getStopProjectWebRtcMethod())
              .addMethod(getGetProjectBroadcastSnapshotMethod())
              .addMethod(getGetProjectBroadcastStatusMethod())
              .build();
        }
      }
    }
    return result;
  }
}
