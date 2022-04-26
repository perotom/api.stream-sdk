/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package api.stream.broadcastkit;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;

public class Camera {
    @Nonnull
    private final String name;
    @Nonnull
    private final String sourceId;
    @Nullable
    private final String debugMediaUrl;

    @Nonnull
    public String getName() {
        return name;
    }

    @Nonnull
    public String getSourceId() {
        return sourceId;
    }

    @Nullable
    public String getDebugMediaUrl() {
        return debugMediaUrl;
    }

    private Camera(@Nonnull Builder builder) {
        if (builder.name == null) {
            throw new IllegalArgumentException("name null");
        }
        if (builder.sourceId == null) {
            throw new IllegalArgumentException("srcId null");
        }

        name = builder.name;
        sourceId = builder.sourceId;
        debugMediaUrl = builder.debugMediaUrl;
    }

    @Nonnull
    public static Builder newBuilder() {
        return new Builder();
    }

    public static final class Builder {
        private String name;
        private String sourceId;
        private String debugMediaUrl;

        private Builder() {
        }

        @Nonnull
        public Builder setName(@Nonnull String val) {
            name = val;
            return this;
        }

        @Nonnull
        public Builder setSourceId(@Nonnull String val) {
            sourceId = val;
            return this;
        }

        @Nonnull
        public Builder setDebugMediaUrl(@Nonnull String val) {
            debugMediaUrl = val;
            return this;
        }

        @Nonnull
        public Camera build() {
            return new Camera(this);
        }
    }
}
