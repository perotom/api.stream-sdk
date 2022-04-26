/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package api.stream.broadcastkit;

import com.google.protobuf.FieldMask;
import com.google.protobuf.Struct;
import com.google.protobuf.Value;
import stream.api.ApiStream;
import stream.api.EventApi;
import stream.api.event.EventTarget;
import stream.api.layout.*;
import stream.api.live.*;
import stream.api.live.EventType;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Consumer;
import java.util.logging.Logger;

public class BroadcastKit {

    @Nonnull
    private static final Logger logger = Logger.getLogger(BroadcastKit.class.getName());

    @Nonnull
    private static final String LIVEAPI_EVENT_PREFIX = "apistream:live";

    private static boolean metadataMatchesName(@Nonnull String name, @Nonnull Value metadata) {
        if (metadata.getKindCase() == Value.KindCase.STRUCT_VALUE) {
            var metadataAsStruct = metadata.getStructValue();
            var n = metadataAsStruct.getFieldsOrDefault

                    ("name", Value.getDefaultInstance());
            if (n.getKindCase() == Value.KindCase.STRING_VALUE) {
                return name.equals(n.getStringValue());
            }
        }
        return false;
    }

    @Nonnull
    private static Value.Builder createNamedMetadata(@Nonnull String name) {
        return Value.newBuilder()
                .setStructValue(Struct.newBuilder()
                        .putFields("name", Value.newBuilder()
                                .setStringValue(name)
                                .build()));
    }

    @Nullable
    private Collection collection;
    @Nullable
    private Project project;
    @Nonnull
    private final List<Layout> layouts;
    @Nonnull
    private final List<Scene> scenes;
    @Nonnull
    private final ApiStream api;
    @Nonnull
    private final Rendering rendering;
    private final boolean debug;

    @Nonnull
    public List<Scene> getScenes() {
        return this.scenes;
    }

    public BroadcastKit(@Nonnull Rendering rendering, @Nonnull ApiStream.Options options, boolean debug) {
        this.api = new ApiStream(options);
        this.rendering = rendering;
        this.scenes = new ArrayList<>();
        this.layouts = new ArrayList<>();
        this.debug = debug;

        // Set our own event receiver
        this.api.EventApi()
                .setEventReceiver(new EventReceiverImpl());
    }

    public void load(@Nonnull String apiKey, @Nonnull String serviceUserId) {
        CreateAccessTokenRequest.Builder accessTokenRequest = CreateAccessTokenRequest.newBuilder()
                .setServiceUserId(serviceUserId);
        CreateAccessTokenResponse accessTokenResponse = api.LiveApi().backendAuthentication.createAccessToken(accessTokenRequest.build());
        api.load(accessTokenResponse.getAccessToken());

        Optional.ofNullable(api.EventApi()
                        .getEventReceiver())
                .ifPresent(eventReceiver -> {
                    eventReceiver.addHandler(EventType.EVENT_TYPE_PROJECT, (EventApi.EventOperator<ProjectEvent>) (event, subType) -> logger.info("Project event: " + subType + " payload: " + event));
                    eventReceiver.addHandler(EventType.EVENT_TYPE_COLLECTION, (EventApi.EventOperator<CollectionEvent>) (event, subType) -> logger.info("Collection event: " + subType + " payload: " + event));
                    eventReceiver.addHandler(EventType.EVENT_TYPE_SOURCE, (EventApi.EventOperator<SourceEvent>) (event, subType) -> logger.info("Source event: " + subType + " payload: " + event));
                    eventReceiver.addHandler(EventType.EVENT_TYPE_DESTINATION, (EventApi.EventOperator<SourceEvent>) (event, subType) -> logger.info("Destination event: " + subType + " payload: " + event));
                });

        // Setup project and collection
        getOrCreateCollection();
        getOrCreateProject();
    }

    @Nonnull
    public String getRendererUrl() {
        if (this.collection == null) {
            throw new IllegalArgumentException("collection null");
        }
        if (this.project == null) {
            throw new IllegalArgumentException("project null");
        }

        var tokenRequest = CreateGuestAccessTokenRequest.newBuilder()
                .setCollectionId(this.collection.getCollectionId())
                .setProjectId(this.project.getProjectId())
                .setRole(Role.ROLE_VIEWER)
                .setToken(GuestAccessToken.newBuilder()
                        .setDirect(GuestAccessTokenDirect.newBuilder()
                                .setDisplayName("preview")
                                .setServiceUserId("preview")))
                .build();
        var tokenResponse = this.api.LiveApi().authentication.createGuestAccessToken(tokenRequest);

        return "https://rmc-layout-render.streamjar.io/?at=" + tokenResponse.getAccessToken() + "&debug=true";
    }

    @Nonnull
    public Optional<Scene> getSceneByName(@Nonnull String name) {
        return this.scenes.stream()
                .filter(scene -> name.equals(scene.getName()))
                .findFirst();
    }

    @Nonnull
    public Optional<Scene> getSceneById(@Nonnull String layoutId) {
        return this.scenes.stream()
                .filter(scene -> layoutId.equals(scene.getLayoutId()))
                .findFirst();
    }

    private Collection getOrCreateCollection() {
        Consumer<Collection> addCollectionListener = (collection) -> this.api.EventApi()
                .subscribe(LIVEAPI_EVENT_PREFIX + ":*", EventTarget.newBuilder()
                        .setCollectionId(collection.getCollectionId())
                        .build());

        var collectionResponse = this.api.LiveApi().collection.getCollections(GetCollectionsRequest.newBuilder()
                .build());
        if (collectionResponse.getCollectionsCount() > 0) {
            this.collection = collectionResponse.getCollections(0);

            addCollectionListener.accept(this.collection);
            return this.collection;
        }

        var collection = this.api.LiveApi().collection.createCollection(CreateCollectionRequest.newBuilder()
                .build());
        this.collection = collection.getCollection();

        this.api.EventApi()
                .subscribe(LIVEAPI_EVENT_PREFIX + ":*", EventTarget.newBuilder()
                        .setCollectionId(this.collection.getCollectionId())
                        .build());

        addCollectionListener.accept(this.collection);
        return this.collection;
    }

    private Project getOrCreateProject() {
        if (this.collection == null) {
            throw new IllegalArgumentException("collection null");
        }

        Consumer<Project> addProjectListener = (project) -> this.api.EventApi()
                .subscribe(LIVEAPI_EVENT_PREFIX + ":*", EventTarget.newBuilder()
                        .setCollectionId(this.collection.getCollectionId())
                        .setProjectId(project.getProjectId())
                        .build());

        if (this.collection.getProjectsCount() > 0) {
            var getProjectRequest = GetProjectRequest.newBuilder()
                    .setCollectionId(this.collection.getCollectionId())
                    .setProjectId(this.collection.getProjects(0)
                            .getProjectId())
                    .build();
            var getProjectResponse = this.api.LiveApi().project.getProject(getProjectRequest);

            var updateProjectRequest = UpdateProjectRequest.newBuilder()
                    .setCollectionId(this.collection.getCollectionId())
                    .setProjectId(getProjectRequest.getProjectId())
                    .setRendering(this.rendering)
                    .setComposition(Composition.newBuilder()
                            .setScene(SceneComposition.newBuilder()
                                    .setDebug(this.debug)))
                    .setUpdateMask(FieldMask.newBuilder()
                            .addPaths("rendering")
                            .addPaths("composition.scene.debug"))
                    .build();

            var updateProjectResponse = this.api.LiveApi().project.updateProject(updateProjectRequest);

            this.project = updateProjectResponse.getProject();

            addProjectListener.accept(this.project);
            return this.project;
        }

        var createProjectRequest = CreateProjectRequest.newBuilder()
                .setCollectionId(this.collection.getCollectionId())
                .setRendering(this.rendering)
                .setComposition(Composition.newBuilder()
                        .setScene(SceneComposition.newBuilder()))
                .build();
        var createProjectResponse = this.api.LiveApi().project.createProject(createProjectRequest);

        this.project = createProjectResponse.getProject();

        addProjectListener.accept(this.project);
        return this.project;
    }

    @Nonnull
    private Layout getOrCreateLayout(@Nonnull String name) {
        if (this.collection == null) {
            throw new IllegalArgumentException("collection null");
        }
        if (this.project == null) {
            throw new IllegalArgumentException("project null");
        }

        Consumer<String> addLayoutListener = (layoutId) -> this.api.EventApi()
                .subscribe(LIVEAPI_EVENT_PREFIX + ":*", EventTarget.newBuilder()
                        .setCollectionId(this.collection.getCollectionId())
                        .setProjectId(this.project.getProjectId())
                        .setLayoutId(layoutId)
                        .build());

        var listLayoutsRequest = ListLayoutsRequest.newBuilder()
                .setCollectionId(this.collection.getCollectionId())
                .setProjectId(this.project.getProjectId())
                .build();
        var listLayoutsResponse = this.api.LayoutApi().layout.listLayouts(listLayoutsRequest);

        // Clear layers and repopulate from remote
        this.layouts.clear();
        this.layouts.addAll(listLayoutsResponse.getLayoutsList());

        var layout = this.layouts.stream()
                .filter(l -> metadataMatchesName(name, l.getMetadata()))
                .findFirst();
        if (layout.isPresent()) {
            addLayoutListener.accept(layout.get()
                    .getId());
            // Since it already exists, and we've stored all layouts in the array, just return layout
            return layout.get();
        }

        var createLayoutRequest = CreateLayoutRequest.newBuilder()
                .setLayout(PartialLayout.newBuilder()
                        .setWidth(this.project.getRendering()
                                .getVideo()
                                .getWidth())
                        .setHeight(this.project.getRendering()
                                .getVideo()
                                .getHeight())
                        .setCollectionId(this.collection.getCollectionId())
                        .setProjectId(this.project.getProjectId())
                        .setType(LayoutType.LAYOUT_TYPE_SCENE)
                        .setMetadata(createNamedMetadata(name)))
                .build();

        var createLayoutResponse = this.api.LayoutApi().layout.createLayout(createLayoutRequest);

        // Add the new layer to our list
        this.layouts.add(createLayoutResponse);

        addLayoutListener.accept(createLayoutResponse.getId());
        return createLayoutResponse;
    }

    @Nonnull
    private stream.api.live.Source getOrCreateSource(@Nonnull String name, @Nullable String sourceUrl) {
        if (this.collection == null) {
            throw new IllegalArgumentException("collection null");
        }
        if (this.project == null) {
            throw new IllegalArgumentException("project null");
        }
        var existingSource = this.project.getSourcesList()
                .stream()
                .filter(s -> metadataMatchesName(name, s.getMetadata()))
                .findFirst();

        if (existingSource.isPresent()) {
            return existingSource.get();
        }

        var sourceAddress = sourceUrl != null ? SourceAddress.newBuilder()
                .setRtmpPull(RtmpPullAddress.newBuilder()
                        .setUrl(sourceUrl))
                .build() : SourceAddress.newBuilder()
                .setRtmpPush(SourceRtmpPushAddress.newBuilder()
                        .setEnabled(true))
                .build();

        var createSourceRequest = CreateSourceRequest.newBuilder()
                .setCollectionId(this.collection.getCollectionId())
                .setAddress(sourceAddress)
                .setMetadata(createNamedMetadata(name))
                .build();
        var createSourceResponse = this.api.LiveApi().source.createSource(createSourceRequest);

        var addSourceToProjectRequest = AddSourceToProjectRequest.newBuilder()
                .setCollectionId(this.collection.getCollectionId())
                .setProjectId(this.project.getProjectId())
                .setSourceId(createSourceResponse.getSource()
                        .getSourceId())
                .build();
        var addSourceToProjectResponse = this.api.LiveApi().source.addSourceToProject(addSourceToProjectRequest);

        // Update project since we mutated
        this.project = addSourceToProjectResponse.getProject();

        return createSourceResponse.getSource();
    }

    @Nonnull
    public Camera createCamera(@Nonnull String name, @Nonnull String sourceUrl) {
        var source = getOrCreateSource(name, sourceUrl);

        return Camera.newBuilder()
                .setName(name)
                .setSourceId(source.getSourceId())
                .setDebugMediaUrl(sourceUrl)
                .build();
    }

    @Nonnull
    public Destination createDestination(@Nonnull String name, @Nonnull String destinationUrl, @Nonnull String key) {
        var destination = getOrCreateDestination(name, destinationUrl, key);
        Destination d = new Destination();
        d.name = name;
        d.url = destination.getAddress()
                .getRtmpPush()
                .getUrl() + "/" + destination.getAddress()
                .getRtmpPush()
                .getKey();

        return d;
    }

    @Nonnull
    public Layout modifyLayout(@Nonnull String layoutId, @Nonnull PartialLayout layout) {
        var updateLayoutRequest = UpdateLayoutRequest.newBuilder()
                .setLayoutId(layoutId)
                .setLayout(layout)
                .build();

        return this.api.LayoutApi().layout.updateLayout(updateLayoutRequest);
    }

    private Layer getOrCreateLayer(@Nonnull String layoutId, @Nonnull LayerType type, @Nonnull String name, @Nonnull PartialLayer layer) {
        var listLayersRequest = ListLayersRequest.newBuilder()
                .setLayoutId(layoutId)
                .build();
        var listLayersResponse = this.api.LayoutApi().layer.listLayers(listLayersRequest);


        var rootLayer = listLayersResponse.getLayersList()
                .stream()
                .filter(l -> "root".equals(l.getType()))
                .findFirst();

        if (rootLayer.isEmpty()) {
            throw new IllegalStateException("missing root layer");
        }

        var existingLayer = listLayersResponse.getLayersList()
                .stream()
                .filter(l -> metadataMatchesName(name, l.getMetadata()))
                .findFirst();

        if (existingLayer.isPresent()) {
            return existingLayer.get();
        }

        var createLayerRequest = CreateLayerRequest.newBuilder()
                .setLayoutId(layoutId)
                .setLayer(PartialLayer.newBuilder()
                        .mergeFrom(layer)
                        .setType(type.getType())
                        .setParentId(rootLayer.get()
                                .getId())
                        .setMetadata(createNamedMetadata(name)))
                .build();

        return this.api.LayoutApi().layer.createLayer(createLayerRequest);
    }

    @Nonnull
    public Layer modifyLayer(@Nonnull String layoutId, @Nonnull String layerId, @Nonnull String name, @Nonnull PartialLayer layer) {
        // Clone data and add our name field
        var data = Struct.newBuilder()
                .mergeFrom(layer.getData());
        data.putFields("_name", Value.newBuilder()
                .setStringValue(name)
                .build());

        var updateLayerRequest = UpdateLayerRequest.newBuilder()
                .setLayoutId(layoutId)
                .setLayerId(layerId)
                .setLayer(PartialLayer.newBuilder()
                        .mergeFrom(layer)
                        .setData(data))
                .build();

        return this.api.LayoutApi().layer.updateLayer(updateLayerRequest);
    }


    @Nonnull
    private stream.api.live.Destination getOrCreateDestination(@Nonnull String name, @Nonnull String url, @Nonnull String key) {
        if (this.collection == null) {
            throw new IllegalArgumentException("collection null");
        }
        if (this.project == null) {
            throw new IllegalArgumentException("project null");
        }

        var existingDestination = this.project.getDestinationsList()
                .stream()
                .filter(d -> metadataMatchesName(name, d.getMetadata()))
                .findFirst();

        if (existingDestination.isPresent()) {
            return existingDestination.get();
        }

        var createDestinationRequest = CreateDestinationRequest.newBuilder()
                .setCollectionId(this.collection.getCollectionId())
                .setProjectId(this.project.getProjectId())
                .setMetadata(createNamedMetadata(name))
                .setAddress(DestinationAddress.newBuilder()
                        .setRtmpPush(DestinationRtmpPushAddress.newBuilder()
                                .setUrl(url)
                                .setKey(key)))
                .setEnabled(true)
                .build();
        var createDestinationResponse = this.api.LiveApi().destination.createDestination(createDestinationRequest);
        return createDestinationResponse.getDestination();
    }

    public void startBroadcast() {
        if (this.collection == null) {
            throw new IllegalArgumentException("collection null");
        }
        if (this.project == null) {
            throw new IllegalArgumentException("project null");
        }

        var startBroadcastRequest = StartProjectBroadcastRequest.newBuilder()
                .setCollectionId(this.collection.getCollectionId())
                .setProjectId(this.project.getProjectId())
                .build();

        //noinspection ResultOfMethodCallIgnored
        this.api.LiveApi().project.startProjectBroadcast(startBroadcastRequest);
    }

    public void stopBroadcast() {
        if (this.collection == null) {
            throw new IllegalArgumentException("collection null");
        }
        if (this.project == null) {
            throw new IllegalArgumentException("project null");
        }

        var stopBroadcastRequest = StopProjectBroadcastRequest.newBuilder()
                .setCollectionId(this.collection.getCollectionId())
                .setProjectId(this.project.getProjectId())
                .build();

        //noinspection ResultOfMethodCallIgnored
        this.api.LiveApi().project.stopProjectBroadcast(stopBroadcastRequest);
    }

    @Nonnull
    private InsertTransform makeBackgroundTransform() {
        if (this.project == null) {
            throw new IllegalArgumentException("project null");
        }

        var transform = InsertTransform.newBuilder()
                .setOpacity(0)
                .setWidth(this.project.getRendering()
                        .getVideo()
                        .getWidth())
                .setHeight(this.project.getRendering()
                        .getVideo()
                        .getHeight())
                .setX(0)
                .setY(0);

        return transform.build();
    }

    @Nonnull
    public Source addMatteToScene(@Nonnull String name, @Nonnull Scene scene, @Nonnull String color, @Nonnull Bus bus) {
        return addMatteToScene(name, scene, color, bus, makeBackgroundTransform());
    }

    @Nonnull
    public Source addMatteToScene(@Nonnull String name, @Nonnull Scene scene, @Nonnull String color, @Nonnull Bus bus, @Nonnull InsertTransform transform) {
        // Clone data and add our name field
        var data = Struct.newBuilder()
                .putFields("backgroundColor", Value.newBuilder()
                        .setStringValue(color)
                        .build());

        var layer = getOrCreateLayer(scene.getLayoutId(), LayerType.Square, name, PartialLayer.newBuilder()
                .setData(data)
                .mergeFrom(transform.toPartial())
                .build());

        Source source = Source.newBuilder()
                .setName(name)
                .setLayerId(layer.getId())
                .setType(SourceType.Matte)
                .build();

        scene.addSource(bus, source);

        return source;
    }

    @Nonnull
    public Source addCameraToScene(@Nonnull String name, @Nonnull Scene scene, @Nonnull Camera camera, @Nonnull Bus bus) {
        return addCameraToScene(name, scene, camera, bus, makeBackgroundTransform());
    }

    @Nonnull
    public Source addCameraToScene(@Nonnull String name, @Nonnull Scene scene, @Nonnull Camera camera, @Nonnull Bus bus, @Nonnull InsertTransform transform) {
        // Clone data and add our name field
        var data = Struct.newBuilder()
                .putFields("source", Value.newBuilder()
                        .setStructValue(Struct.newBuilder()
                                .putFields("id", Value.newBuilder()
                                        .setStringValue(camera.getSourceId())
                                        .build())
                                .putFields("volume", Value.newBuilder()
                                        .setNumberValue(0)
                                        .build()))
                        .build())
                .putFields("onDisconnect", Value.newBuilder()
                        .setStringValue("slate")
                        .build())
                .build();
        var layerType = LayerType.Source;

        var layer = getOrCreateLayer(scene.getLayoutId(), layerType, name, PartialLayer.newBuilder()
                .setData(data)
                .mergeFrom(transform.toPartial())
                .build());

        Source source = Source.newBuilder()
                .setName(name)
                .setLayerId(layer.getId())
                .setType(SourceType.Camera)
                .setSourceId(camera.getSourceId())
                .build();

        scene.addSource(bus, source);

        return source;
    }

    @Nonnull
    public Source addGraphicsToScene(@Nonnull String name, @Nonnull Scene scene, @Nonnull String url, @Nonnull Bus bus) {
        return addGraphicsToScene(name, scene, url, bus, makeBackgroundTransform());
    }

    @Nonnull
    public Source addGraphicsToScene(@Nonnull String name, @Nonnull Scene scene, @Nonnull String url, @Nonnull Bus bus, @Nonnull InsertTransform transform) {
        var data = Struct.newBuilder()
                .putFields("url", Value.newBuilder()
                        .setStringValue(url)
                        .build());

        var layer = getOrCreateLayer(scene.getLayoutId(), LayerType.Webpage, name, PartialLayer.newBuilder()
                .setData(data)
                .mergeFrom(transform.toPartial())
                .build());

        Source source = Source.newBuilder()
                .setName(name)
                .setLayerId(layer.getId())
                .setType(SourceType.Graphics)
                .build();

        scene.addSource(bus, source);

        return source;
    }

    @Nonnull
    public Scene createScene(@Nonnull String name) {
        var layout = getOrCreateLayout(name);

        Scene scene = Scene.newBuilder()
                .setLayoutId(layout.getId())
                .setName(name)
                .build();

        this.scenes.add(scene);

        return scene;
    }

    @Nonnull
    private Struct buildCameraSourceData(@Nonnull Source audioSource, float volume) {
        if (audioSource.getType() != SourceType.Camera) {
            throw new IllegalArgumentException("type != camera");
        }

        var sourceId = audioSource.getSourceId();
        if (sourceId == null) {
            throw new IllegalArgumentException("audioSource null");
        }

        var data = Struct.newBuilder()
                .putFields("source", Value.newBuilder()
                        .setStructValue(Struct.newBuilder()
                                .putFields("id", Value.newBuilder()
                                        .setStringValue(sourceId)
                                        .build())
                                .putFields("volume", Value.newBuilder()
                                        .setNumberValue(volume)
                                        .build()))
                        .build())
                .putFields("onDisconnect", Value.newBuilder()
                        .setStringValue("slate")
                        .build())
                .build();

        return data;
    }

    public void setInitialState(@Nonnull Scene scene, @Nonnull Source background, @Nonnull Source audio) {
        if (this.collection == null) {
            throw new IllegalArgumentException("collection null");
        }
        if (this.project == null) {
            throw new IllegalArgumentException("project null");
        }

        scene.setSelected(true);

        var updateProjectRequest = UpdateProjectRequest.newBuilder()
                .setCollectionId(this.collection.getCollectionId())
                .setProjectId(this.project.getProjectId())
                .setComposition(Composition.newBuilder()
                        .setScene(SceneComposition.newBuilder()
                                .setSelectedLayoutId(scene.getLayoutId())))
                .setUpdateMask(FieldMask.newBuilder()
                        .addPaths("composition.scene.selectedLayoutId"))
                .build();

        //noinspection ResultOfMethodCallIgnored
        this.api.LiveApi().project.updateProject(updateProjectRequest);

        background.setVideoSelected(true);
        audio.setAudioSelected(true);

        @SuppressWarnings("SwitchStatementWithTooFewBranches") Optional<Struct> audioData = switch (audio.getType()) {
            case Camera -> {
                if (audio.getSourceId() == null) {
                    throw new IllegalArgumentException("audio sourceId missing");
                }
                yield Optional.of(buildCameraSourceData(audio, 1));
            }

            default -> Optional.empty();
        };

        var batchLayerRequest = BatchLayerRequest.newBuilder();
        var partialLayer = PartialLayerWithID.newBuilder()
                .setId(audio.getLayerId());
        if (background == audio) {
            batchLayerRequest.setLayoutId(scene.getLayoutId())
                    .addLayers(BatchLayerRequest.BatchItem.newBuilder()
                            .setUpdate(audioData.map(partialLayer::setData)
                                    .orElse(partialLayer)
                                    .setId(background.getLayerId())
                                    .setOpacity(1)))
                    .build();
        } else {
            batchLayerRequest.setLayoutId(scene.getLayoutId())
                    .addLayers(BatchLayerRequest.BatchItem.newBuilder()
                            .setUpdate(PartialLayerWithID.newBuilder()
                                    .setId(background.getLayerId())
                                    .setOpacity(1)))
                    .addLayers(BatchLayerRequest.BatchItem.newBuilder()
                            .setUpdate(audioData.map(partialLayer::setData)
                                    .orElse(partialLayer)
                                    .build()))
                    .build();
        }

        // Hide all other cameras
        scene.findUnselectedBackgrounds()
                .forEach(source -> {
                    if (source.getType() == SourceType.Camera) {
                        batchLayerRequest.addLayers(BatchLayerRequest.BatchItem.newBuilder()
                                .setUpdate(PartialLayerWithID.newBuilder()
                                        .setId(source.getLayerId())
                                        .setOpacity(0)));
                    }
                });

        //noinspection ResultOfMethodCallIgnored
        this.api.LayoutApi().layer.batch(batchLayerRequest.build());
    }

    public void transitionBackgroundInScene(@Nonnull Scene scene, @Nonnull Source background) {
        transitionBackgroundInScene(scene, background, BusTransitionType.Dissolve, 500);
    }

    public void transitionBackgroundInScene(@Nonnull Scene scene, @Nonnull Source background, @Nonnull BusTransitionType transitionType, int durationInMs) {
        var currentBackground = scene.findSelectedBackground();

        if (currentBackground.isPresent() && currentBackground.get() == background) {
            // Log: No change
            return;
        }

        var animations = new ArrayList<LayerAnimation>();
        if (transitionType == BusTransitionType.Dissolve) {
            animations.add(LayerAnimation.newBuilder()
                    .addProperties("*")
                    .setDurationMs(durationInMs)
                    .build());
        }

        var batchUpdates = new ArrayList<BatchLayerRequest.BatchItem>();
        if (currentBackground.isPresent()) {
            batchUpdates.add(BatchLayerRequest.BatchItem.newBuilder()
                    .setUpdate(PartialLayerWithID.newBuilder()
                            .setId(currentBackground.get()
                                    .getLayerId())
                            .setOpacity(0)
                            .addAllRequestAnimation(animations))
                    .build());
            currentBackground.get()
                    .setVideoSelected(false);
        }
        batchUpdates.add(BatchLayerRequest.BatchItem.newBuilder()
                .setUpdate(PartialLayerWithID.newBuilder()
                        .setId(background.getLayerId())
                        .setOpacity(1)
                        .addAllRequestAnimation(animations))
                .build());
        background.setVideoSelected(true);

        //noinspection ResultOfMethodCallIgnored
        this.api.LayoutApi().layer.batch(BatchLayerRequest.newBuilder()
                .setLayoutId(scene.getLayoutId())
                .addAllLayers(batchUpdates)
                .build());
    }

    public void selectInsertInScene(@Nonnull Scene scene, @Nonnull Source insert, @Nonnull TransitionDirection direction) {
        selectInsertInScene(scene, insert, direction, BusTransitionType.Dissolve, 500);
    }

    public void selectInsertInScene(@Nonnull Scene scene, @Nonnull Source insert, @Nonnull TransitionDirection direction, @Nonnull BusTransitionType transitionType, int durationInMs) {
        if ((insert.isVideoSelected() && direction == TransitionDirection.In) || (!insert.isVideoSelected() && direction == TransitionDirection.Out)) {
            // Log: Noop
            return;
        }

        var animations = new ArrayList<LayerAnimation>();
        if (transitionType == BusTransitionType.Dissolve) {
            animations.add(LayerAnimation.newBuilder()
                    .addProperties("*")
                    .setDurationMs(durationInMs)
                    .build());
        }

        var updateLayerRequest = UpdateLayerRequest.newBuilder()
                .setLayoutId(scene.getLayoutId())
                .setLayerId(insert.getLayerId())
                .mergeLayer(PartialLayer.newBuilder()
                        .setOpacity(direction == TransitionDirection.In ? 1 : 0)
                        .addAllRequestAnimation(animations)
                        .build())
                .build();

        //noinspection ResultOfMethodCallIgnored
        this.api.LayoutApi().layer.updateLayer(updateLayerRequest);

        insert.setVideoSelected(direction == TransitionDirection.In);
    }

    public void selectAudioInScene(@Nonnull Scene scene, @Nonnull Source audio, @Nonnull TransitionDirection direction) {
        if (audio.getType() != SourceType.Camera) {
            throw new IllegalArgumentException("type != camera");
        }

        var audioData = buildCameraSourceData(audio, direction == TransitionDirection.In ? 1 : 0);
        var updateLayerRequest = UpdateLayerRequest.newBuilder()
                .setLayoutId(scene.getLayoutId())
                .setLayerId(audio.getLayerId())
                .setLayer(PartialLayer.newBuilder()
                        .setData(audioData))
                .build();

        //noinspection ResultOfMethodCallIgnored
        this.api.LayoutApi().layer.updateLayer(updateLayerRequest);

        audio.setAudioSelected(direction == TransitionDirection.Out);
    }

    public void transitionToScene(@Nonnull SceneTransition transition, @Nonnull Scene targetScene) {
        if (this.collection == null) {
            throw new IllegalArgumentException("collection null");
        }
        if (this.project == null) {
            throw new IllegalArgumentException("project null");
        }

        var currentScene = this.scenes.stream()
                .filter(Scene::isSelected)
                .findFirst();

        if (currentScene.isPresent() && currentScene.get() == targetScene) {
            // Log: Noop
            return;
        }

        var updateLayoutRequest = UpdateLayoutRequest.newBuilder()
                .setLayoutId(targetScene.getLayoutId())
                .setLayout(PartialLayout.newBuilder()
                        .addTransitions(transition.getTransition()))
                .build();
        //noinspection ResultOfMethodCallIgnored
        this.api.LayoutApi().layout.updateLayout(updateLayoutRequest);

        var updateProjectRequest = UpdateProjectRequest.newBuilder()
                .setCollectionId(this.collection.getCollectionId())
                .setProjectId(this.project.getProjectId())
                .setComposition(Composition.newBuilder()
                        .setScene(SceneComposition.newBuilder()
                                .setSelectedLayoutId(targetScene.getLayoutId())))
                .setUpdateMask(FieldMask.newBuilder()
                        .addPaths("composition.scene.selectedLayoutId"))
                .build();

        //noinspection ResultOfMethodCallIgnored
        this.api.LiveApi().project.updateProject(updateProjectRequest);

        currentScene.ifPresent(scene -> scene.setSelected(false));
        targetScene.setSelected(true);
    }
}
