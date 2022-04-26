/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package api.stream.broadcastkit;

import com.google.protobuf.InvalidProtocolBufferException;
import com.google.protobuf.util.JsonFormat;
import stream.api.EventApi;

import stream.api.LiveApi;
import stream.api.event.EventsStreamResponse;

import stream.api.live.*;

import javax.annotation.Nonnull;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.logging.Logger;

class EventReceiverImpl implements EventApi.EventReceiver {
    @Nonnull
    private static final Logger logger = Logger.getLogger(BroadcastKit.class.getName());
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