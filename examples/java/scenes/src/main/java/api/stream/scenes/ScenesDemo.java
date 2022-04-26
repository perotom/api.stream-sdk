/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package api.stream.scenes;

import api.stream.broadcastkit.*;
import api.stream.broadcastkit.Source;
import stream.api.ApiStream;

import stream.api.live.*;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import java.util.ArrayList;
import java.util.logging.Logger;

public class ScenesDemo {
    @Nonnull
    private static final Logger logger = Logger.getLogger(ScenesDemo.class.getName());

    @Nullable
    private static final String API_KEY = System.getProperty("stream.api.key");
    @Nonnull
    private static final String SERVICE_USER = "ABC123490";

    static public void main(String[] args) {
        if (API_KEY == null) {
            throw new IllegalArgumentException("API_KEY null");
        }

        try {
            var rendering = Rendering.newBuilder()
                    .build();
            var options = new ApiStream.Options();
            options.env = ApiStream.Environment.STAGE;
            options.apiKey = API_KEY;

            var kit = new BroadcastKit(rendering, options, true);
            // Sets up API, creates collection and project
            kit.load(API_KEY, SERVICE_USER);


            // Print this for posterity
            var rendererUrl = kit.getRendererUrl();
            logger.info("Renderer URL: " + rendererUrl);

            // Create sources
            var cam1 = kit.createCamera("cam1", "rtmp://ingest.stream.horse/vod/BigBuckBunny.mp4");
            var cam2 = kit.createCamera("cam2", "rtmp://ingest.stream.horse/vod/TearsOfSteel.mp4");
            var cam3 = kit.createCamera("cam3", "rtmp://ingest.stream.horse/vod/SpriteFright.mp4");

            // Create destinations
            var dest = kit.createDestination("ingest", "rtmp://ingest.stream.horse/inbound", "abc123");

            var mixEffects1 = kit.createScene("mix-effects-1");
            kit.addMatteToScene("black-matte", mixEffects1, "black", Bus.Background);

            var scene1Cameras = new ArrayList<Source>();

            scene1Cameras.add(kit.addCameraToScene(cam1.getName(), mixEffects1, cam1, Bus.Background));
            scene1Cameras.add(kit.addCameraToScene(cam2.getName(), mixEffects1, cam2, Bus.Background));
            scene1Cameras.add(kit.addCameraToScene(cam3.getName(), mixEffects1, cam3, Bus.Background));

            var mixEffects2 = kit.createScene("mix-effects-2");
            kit.addMatteToScene("black-matte", mixEffects2, "black", Bus.Background);
            var scene2camera = kit.addCameraToScene(cam1.getName(), mixEffects2, cam1, Bus.Background);
            // Add a simple overlay to scene 2
            var scene2gfx = kit.addGraphicsToScene("gfx1", mixEffects2, "https://rainmaker.gg/overlay/e67cfd6ad57560962fddcf63611d2834/4", Bus.Insert);

            // Set up mix 1 & 2, mix 1 as active
            kit.setInitialState(mixEffects1, scene1Cameras.get(2), scene1Cameras.get(2));
            kit.transitionBackgroundInScene(mixEffects2, scene2camera);
            kit.selectAudioInScene(mixEffects2, scene2camera, TransitionDirection.In);

            kit.startBroadcast();

            int currentIndex = 0;
            while (true) {
                Thread.sleep(5000);
                // Stinger to mix 2
                kit.transitionToScene(SceneTransition.StingerApiStream, mixEffects2);
                Thread.sleep(2500);
                // Fade in overlay
                kit.selectInsertInScene(mixEffects2, scene2gfx, TransitionDirection.In, BusTransitionType.Dissolve, 400);
                Thread.sleep(2500);
                // Fade out overlay
                kit.selectInsertInScene(mixEffects2, scene2gfx, TransitionDirection.Out, BusTransitionType.Dissolve, 400);
                Thread.sleep(5000);
                // Push right back to mix 1
                kit.transitionToScene(SceneTransition.PushRight, mixEffects1);
            }

        } catch (Exception e) {
            logger.warning("Error in broadcast: " + e);
        }
    }
}
