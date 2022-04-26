/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package api.stream.broadcastkit;

public enum LayerType {
    Image("image"),
    Video("video"),
    Source("source"),
    WebRtc("webrtc"),
    Webpage("webpage"),
    Square("square");

    final private String type;

    LayerType(String type) {
        this.type = type;
    }

    public String getType() {
        return this.type;
    }


}
