/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package api.stream.broadcastkit;

import com.google.protobuf.Value;
import stream.api.layout.PartialLayer;

import javax.annotation.Nonnull;

public class InsertTransform {
    private float opacity;
    private float x;
    private float y;
    private float width;
    private float height;

    public float getOpacity() {
        return opacity;
    }

    public float getX() {
        return x;
    }

    public float getY() {
        return y;
    }

    public float getWidth() {
        return width;
    }

    public float getHeight() {
        return height;
    }

    private InsertTransform(@Nonnull Builder builder) {
        opacity = builder.opacity;
        x = builder.x;
        y = builder.y;
        width = builder.width;
        height = builder.height;
    }

    @Nonnull
    public static Builder newBuilder() {
        return new Builder();
    }

    @Nonnull
    public PartialLayer toPartial() {
        return PartialLayer.newBuilder()
                .setOpacity(this.opacity)
                .setX(Value.newBuilder()
                        .setNumberValue(this.x))
                .setY(Value.newBuilder()
                        .setNumberValue(this.y))
                .setWidth(Value.newBuilder()
                        .setNumberValue(this.width))
                .setHeight(Value.newBuilder()
                        .setNumberValue(this.height))
                .build();
    }

    public static final class Builder {
        private float opacity = 1.0f;
        private float x = 0f;
        private float y = 0f;
        private float width = 0f;
        private float height = 0f;

        private Builder() {
        }

        @Nonnull
        public Builder setOpacity(float val) {
            opacity = val;
            return this;
        }

        @Nonnull
        public Builder setX(float val) {
            x = val;
            return this;
        }

        @Nonnull
        public Builder setY(float val) {
            y = val;
            return this;
        }

        @Nonnull
        public Builder setWidth(float val) {
            width = val;
            return this;
        }

        @Nonnull
        public Builder setHeight(float val) {
            height = val;
            return this;
        }

        @Nonnull
        public InsertTransform build() {
            return new InsertTransform(this);
        }
    }
}
