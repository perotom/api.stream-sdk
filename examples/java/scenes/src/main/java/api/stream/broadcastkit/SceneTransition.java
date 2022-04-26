/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package api.stream.broadcastkit;

import stream.api.layout.Transition;

import javax.annotation.Nonnull;

public enum SceneTransition {
    Cut(Transition.newBuilder()),
    Dissolve(Transition.newBuilder()
            .setCrossfade(Transition.TransitionCrossfade.newBuilder()
                    .setDurationMs(500))),
    StingerApiStream(Transition.newBuilder()
            .setStinger(Transition.TransitionStinger.newBuilder()
                    .setCut(Transition.TransitionStingerCut.newBuilder()
                            .setCutPointMs(400)
                            .setMedia(Transition.TransitionMediaType.newBuilder()
                                    .setUrl("https://www.api.stream/assets/example-stinger.webm")
                                    .setVolume(1))))),
    PushRight(Transition.newBuilder()
            .setSwipe(Transition.TransitionSwipe.newBuilder()
                    .setDirection(Transition.TransitionDirection.TRANSITION_DIRECTION_RIGHT)
                    .setDurationMs(500)
                    .setCombinedAnimation(Transition.TransitionSwipeType.TRANSITION_SWIPE_TYPE_COMBINED)));

    @Nonnull
    private final Transition transition;

    SceneTransition(@Nonnull Transition.Builder transitionBuilder) {
        this.transition = transitionBuilder.build();
    }

    @Nonnull
    public Transition getTransition() {
        return this.transition;
    }

}
