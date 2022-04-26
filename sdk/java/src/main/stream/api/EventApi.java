/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package stream.api;

import com.google.protobuf.InvalidProtocolBufferException;
import com.google.protobuf.Struct;
import com.google.protobuf.util.JsonFormat;
import io.grpc.stub.StreamObserver;
import stream.api.event.*;
import stream.api.live.*;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.logging.Logger;

public class EventApi extends ApiClient {
    private static final Logger logger = Logger.getLogger(EventApi.class.getName());

    public interface EventOperator<T> {
        void op(T event, EventSubType subType);
    }

    public void setEventReceiver(@Nonnull EventReceiver eventReceiver) {
        if (this.eventReceiver != null) {
            throw new IllegalStateException("eventReciever already set");
        }
        this.eventReceiver = eventReceiver;
    }

    @Nullable
    public EventReceiver getEventReceiver() {
        return this.eventReceiver;
    }

    public EventServiceGrpc.EventServiceBlockingStub event;
    public EventServiceGrpc.EventServiceStub eventStream;

    private EventReceiver eventReceiver;
    private StreamObserver<EventsStreamRequest> eventSubscriber;

    private void ensureEventReceiver() {
        if (eventStream == null) {
            throw new IllegalArgumentException("eventStream null");
        }

        if (eventReceiver == null) {
            eventReceiver = new EventReceiverImpl();
        }

        eventSubscriber = eventStream.stream(eventReceiver);
    }

    public EventApi(String server, String sessionId, String version, String sdkVersion) {
        super(server, sessionId, version, sdkVersion);
    }

    public void subscribe(String name, EventTarget target) {
        ensureEventReceiver();

        SubscribePayload subscribePayload = SubscribePayload.newBuilder()
                .setName(name)
                .setTarget(target)
                .build();
        EventsStreamRequest request = EventsStreamRequest.newBuilder()
                .setSubscribe(subscribePayload)
                .build();
        eventSubscriber.onNext(request);
    }

    public void setAcccessToken(String accessToken) {
        super.setAccessToken(accessToken);

        if (event == null) {
            event = EventServiceGrpc.newBlockingStub(channel)
                    .withCallCredentials(metadata)
                    .withCallCredentials(jwtCredential);
            eventStream = EventServiceGrpc.newStub(channel)
                    .withCallCredentials(metadata)
                    .withCallCredentials(jwtCredential);
        }
    }

    public interface EventReceiver extends StreamObserver<EventsStreamResponse> {
        void addHandler(EventType type, EventOperator<?> op);
        void removeHandler(EventType type);
    }

    private static class EventReceiverImpl implements EventApi.EventReceiver {
        @Nonnull
        private final Map<EventType, EventApi.EventOperator<Object>> listeners = new HashMap<>();

        @SuppressWarnings("unchecked")
        public void addHandler(@Nonnull EventType type, @Nonnull EventApi.EventOperator<?> op) {
            this.listeners.put(type, (EventApi.EventOperator<Object>) op);
        }

        @Override
        public void removeHandler(@Nonnull EventType type) {
            this.listeners.remove(type);
        }

        @Override
        public void onNext(@Nonnull EventsStreamResponse response) {
            logger.info("Event: " + response);
            if (response.hasEvent()) {
                var event = response.getEvent();
                var name = event.getName();
                var typeAndSubType = name.split(LiveApi.LIVEAPI_EVENT_PREFIX + ":")[1];
                var parts = typeAndSubType.split(":");

                var eventType = EventType.valueOf(parts[0]);
                var eventSubType = EventSubType.valueOf(parts[1]);

                var eventHandler = Optional.ofNullable(listeners.get(eventType));
                eventHandler.ifPresent(handler -> {
                    var payload = event.getPayload();
                    try {
                        // Travel to Json and back to LiveEvent to parse struct data
                        String eventJson = JsonFormat.printer()
                                .print(payload);
                        var liveEventBuilder = LiveEvent.newBuilder();
                        JsonFormat.parser()
                                .merge(eventJson, liveEventBuilder);
                        var liveEvent = liveEventBuilder.build();

                        switch (liveEvent.getTypeCase()) {
                            case COLLECTION -> {
                                handler.op(liveEvent.getCollection(), eventSubType);
                            }
                            case PROJECT -> {
                                handler.op(liveEvent.getProject(), eventSubType);
                            }
                            case SOURCE -> {
                                handler.op(liveEvent.getSource(), eventSubType);
                            }
                            case DESTINATION -> {
                                handler.op(liveEvent.getDestination(), eventSubType);
                            }
                            case TYPE_NOT_SET, UNSPECIFIED -> {
                            }
                        }
                    } catch (InvalidProtocolBufferException e) {
                        logger.warning("Unable to parse live event: " + e.toString());
                    }
                });
            }
        }

        @Override
        public void onCompleted() {
            logger.info("complete");
        }

        @Override
        public void onError(@Nonnull Throwable t) {
            logger.warning("error" + t.toString());
        }
    }
}
