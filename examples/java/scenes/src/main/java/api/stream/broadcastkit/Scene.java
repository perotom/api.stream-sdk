/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package api.stream.broadcastkit;

import javax.annotation.Nonnull;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class Scene {
    @Nonnull
    private final String name;
    @Nonnull
    private final String layoutId;
    @Nonnull
    private final List<Source> backgrounds;
    @Nonnull
    private final List<Source> inserts;
    private boolean selected;

    @Nonnull
    public String getName() {
        return name;
    }

    @Nonnull
    public String getLayoutId() {
        return layoutId;
    }

    public boolean isSelected() {
        return selected;
    }

    public void setSelected(boolean selected) {
        this.selected = selected;
    }

    private Scene(@Nonnull Builder builder) {
        if (builder.name == null) {
            throw new IllegalArgumentException("name null");
        }
        if (builder.layoutId == null) {
            throw new IllegalArgumentException("layoutId null");
        }
        name = builder.name;
        layoutId = builder.layoutId;
        selected = builder.selected;

        backgrounds = new ArrayList<>();
        inserts = new ArrayList<>();
    }

    @Nonnull
    public static Builder newBuilder() {
        return new Builder();
    }

    public void addSource(@Nonnull Bus bus, @Nonnull Source source) {
        switch (bus) {
            case Background -> this.backgrounds.add(source);
            case Insert -> this.inserts.add(source);
        }
    }

    @Nonnull
    public Optional<Source> findByName(@Nonnull Bus bus, @Nonnull String name) {
        return switch (bus) {
            case Background -> this.backgrounds.stream()
                    .filter(source -> name.equals(source.getName()))
                    .findFirst();
            case Insert -> this.inserts.stream()
                    .filter(source -> name.equals(source.getName()))
                    .findFirst();
        };
    }

    @Nonnull
    public Optional<Source> findSelectedBackground() {
        return this.backgrounds.stream()
                .filter(Source::isVideoSelected)
                .findFirst();
    }

    @Nonnull
    List<Source> findUnselectedBackgrounds() {
        return this.backgrounds.stream()
                .filter(source -> !source.isVideoSelected())
                .toList();
    }

    public static final class Builder {
        private String name;
        private String layoutId;
        private boolean selected;

        private Builder() {
        }

        @Nonnull
        public Builder setName(@Nonnull String val) {
            name = val;
            return this;
        }

        @Nonnull
        public Builder setLayoutId(@Nonnull String val) {
            layoutId = val;
            return this;
        }

        @Nonnull
        public Builder setSelected(boolean val) {
            selected = val;
            return this;
        }

        @Nonnull
        public Scene build() {
            return new Scene(this);
        }
    }
}
