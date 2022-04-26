/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package api.stream.broadcastkit;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;

public class Source {
    @Nonnull
    private final String name;
    @Nonnull
    private final String layerId;
    @Nonnull
    private final SourceType type;
    @Nullable
    private String sourceId = null;
    private boolean videoSelected = false;
    private boolean audioSelected = false;

    public void setSourceId(@Nullable String sourceId) {
        this.sourceId = sourceId;
    }

    public void setVideoSelected(boolean videoSelected) {
        this.videoSelected = videoSelected;
    }

    public void setAudioSelected(boolean audioSelected) {
        this.audioSelected = audioSelected;
    }

    @Nonnull
    public String getName() {
        return name;
    }

    @Nonnull
    public String getLayerId() {
        return layerId;
    }

    @Nonnull
    public SourceType getType() {
        return type;
    }

    @Nullable
    public String getSourceId() {
        return sourceId;
    }

    public boolean isVideoSelected() {
        return videoSelected;
    }

    public boolean isAudioSelected() {
        return audioSelected;
    }

    private Source(@Nonnull Builder builder) {
        if (builder.name == null) {
            throw new IllegalArgumentException("name null");
        }
        if (builder.layerId == null) {
            throw new IllegalArgumentException("layerId null");
        }
        if (builder.type == null) {
            throw new IllegalArgumentException("type null");
        }

        name = builder.name;
        layerId = builder.layerId;
        type = builder.type;
        sourceId = builder.sourceId;
        videoSelected = builder.videoSelected;
        audioSelected = builder.audioSelected;
    }

    @Nonnull
    public static Builder newBuilder() {
        return new Builder();
    }

    public static final class Builder {
        private String name;
        private String layerId;
        private SourceType type;
        private String sourceId;
        private boolean videoSelected;
        private boolean audioSelected;

        private Builder() {
        }

        @Nonnull
        public Builder setName(@Nonnull String val) {
            name = val;
            return this;
        }

        @Nonnull
        public Builder setLayerId(@Nonnull String val) {
            layerId = val;
            return this;
        }

        @Nonnull
        public Builder setType(@Nonnull SourceType val) {
            type = val;
            return this;
        }

        @Nonnull
        public Builder setSourceId(@Nonnull String val) {
            sourceId = val;
            return this;
        }

        @Nonnull
        public Builder setVideoSelected(boolean val) {
            videoSelected = val;
            return this;
        }

        @Nonnull
        public Builder setAudioSelected(boolean val) {
            audioSelected = val;
            return this;
        }

        @Nonnull
        public Source build() {
            return new Source(this);
        }
    }
}
