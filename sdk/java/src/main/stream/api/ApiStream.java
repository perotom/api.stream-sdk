/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
package stream.api;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.logging.*;

import stream.api.utils.AccessTokenRefreshCallback;

public class ApiStream implements AccessTokenRefreshCallback {
    private static final Logger logger = Logger.getLogger(ApiStream.class.getName());

    public enum Environment { DEV, STAGE, PROD };

    private static Map<Environment, String> API_SERVERS;
    static {
        API_SERVERS = new HashMap<>();
        API_SERVERS.put(Environment.DEV, "127.0.0.1:9090");
        API_SERVERS.put(Environment.STAGE, "live.stream.horse:9081");
        API_SERVERS.put(Environment.PROD, "live.api.stream:9081");
    };

    // Lightstream API options
    public static class Options {
        // the version number of the parent SDK (if applicable) to be transmitted in requests to the server
        public String sdkVersion;
        // the application environment (prod, stage) used to select the appropriate backend servers
        public Environment env;
        // API key used for access to backend authentication service (not used for frontend applications)
        public String apiKey;
    }

    private final LiveApi liveApi;
    private final LayoutApi layoutApi;
    private final EventApi eventApi;

    public String getVersion() {
        final Package[] packages = Package.getPackages();
        for (final Package pkg : packages)
        {
            final String name = pkg.getName();
            if (name.startsWith("stream.api"))
                return pkg.getImplementationVersion();
        }
        return null;
    }

    public ApiStream(Options options) {
        UUID sessionId = java.util.UUID.randomUUID();
        String version = getVersion();
        String server = API_SERVERS.get(options.env);

        liveApi = new LiveApi(server, sessionId.toString(), version, options.sdkVersion, options.apiKey, this);
        layoutApi = new LayoutApi(server, sessionId.toString(), version, options.sdkVersion);
        eventApi = new EventApi(server, sessionId.toString(), version, options.sdkVersion);
    }

    public LiveApi LiveApi() {
        return liveApi;
    }
    public LayoutApi LayoutApi() {
        return layoutApi;
    }
    public EventApi EventApi() {
        return eventApi;
    }

    public void load(String accessToken) {
        accessTokenRefreshCallback(accessToken);
    }

    public void accessTokenRefreshCallback(String accessToken) {
        this.liveApi.setAcccessToken(accessToken);
        this.layoutApi.setAcccessToken(accessToken);
        this.eventApi.setAcccessToken(accessToken);
    }
}
