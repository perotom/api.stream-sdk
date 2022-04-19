/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
import { LayoutApiModel, LiveApiModel, ApiStream } from '@api.stream/sdk';
import {
	Room,
} from 'livekit-client';

let client: ApiStream;

// Stop the broadcast
export async function stop() {
	client = new ApiStream({ apiKey: document.querySelector<HTMLInputElement>('#apikey')!.value });

	// Initialize the client
	const token = await client.LiveApi().backendAuthentication?.createAccessToken({
		serviceUserId: 'scene-webrtc-demo',
	});
	await client.load(token?.accessToken);

	// Fetch the broadcast state
	const collection = await getOrCreateCollection();
	const project = await getOrCreateProject(collection);

	alert('Stopping broadcast for project ' + project?.projectId);
	await client.LiveApi().project.stopProjectBroadcast({
		projectId: project?.projectId,
		collectionId: project?.collectionId,
	});
}


// Start the broadcast
export async function start() {
	client = new ApiStream({ apiKey: document.querySelector<HTMLInputElement>('#apikey')!.value });

	// Initialize the client
	const token = await client.LiveApi().backendAuthentication?.createAccessToken({
		serviceUserId: 'scene-webrtc-demo',
	});
	await client.load(token?.accessToken);

	// Setup the broadcast state
	const collection = await getOrCreateCollection();
	const project = await getOrCreateProject(collection);
	createDestination(
		project!,
		document.querySelector<HTMLInputElement>('#dsturl')!.value,
		document.querySelector<HTMLInputElement>('#dstkey')!.value
	),
	await cleanupLayouts(project!);
	const layout = await getOrCreateLayout(project!);

	// Create our WebRTC layer
	const rootLayer = await client.LayoutApi().layer.listLayers({ layoutId: layout.id })
		.then(response => response.layers.find(l => l.type === 'root'));

	await client.LayoutApi().layer.createLayer({
		layoutId: layout.id,
		layer: {
			type: 'webrtc',
			parentId: rootLayer?.id,
			width: 1280,
			height: 720,
			x: 0,
			y: 0,
			data: {
				webrtc: {
					// Note: this is the same as the serviceUserId we're accessing WebRTC with. 
					id: 'scene-webrtc-demo',
					volume: 1,
				}
			}
		}
	});

	alert('Starting broadcast..');
	// Select the layout we just created.
	await client.LiveApi().project?.updateProject( {
		collectionId: project!.collectionId,
		projectId: project!.projectId,
	
		composition: {
			scene: {
				selectedLayoutId: layout.id
			},
		},
		updateMask: ["composition.scene.selectedLayoutId"],
	});
	
	// Start the WebRTC room
	await client.LiveApi().project.startProjectWebRtc({
		projectId: project?.projectId,
		collectionId: project?.collectionId,
	})

	// Start the broadcast
	await client.LiveApi().project.startProjectBroadcast({
		projectId: project?.projectId,
		collectionId: project?.collectionId,
	});

	await sleep(60000);
	
	// Stop the broadcast
	alert('Stopping broadcast..');
	await client.LiveApi().project.stopProjectBroadcast({
		projectId: project?.projectId,
		collectionId: project?.collectionId,
	});
}

export async function joinWebrtc() {
	client = new ApiStream({ apiKey: document.querySelector<HTMLInputElement>('#apikey')!.value });

	alert ('Joining WebRTC');
	// Initialize the client
	const token = await client.LiveApi().backendAuthentication?.createAccessToken({
		serviceUserId: 'scene-webrtc-demo',
	});
	await client.load(token?.accessToken);

	const collection = await getOrCreateCollection();
	const project = await getOrCreateProject(collection);

	const webrtcToken = await client.LiveApi().authentication.createWebRtcAccessToken({
		collectionId: project?.collectionId,
		projectId: project?.projectId,
	});

	// creates a new room with options
	const room = new Room({
		adaptiveStream: true,
		dynacast: true,
	});

	// connect to room
	await room.connect(client.getLiveKitServer(), webrtcToken.webrtcAccess?.accessToken!, {
		autoSubscribe: false,
	});


	await room.localParticipant.enableCameraAndMicrophone();
}
function sleep(duration: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, duration));
}

export async function getOrCreateCollection(): Promise<LiveApiModel.Collection> {
	// Find the first collection under this authentication scope.
	let collection: LiveApiModel.Collection = await client.LiveApi().collection.getCollections({})
		.then(resp => {
			return resp.collections.find(c => c.metadata.sceneWebrtcDemo)!;
		});

	// Create the collection if it doesn't exist.
	if (!collection) {
		collection = await client.LiveApi().collection?.createCollection({ metadata: { sceneWebrtcDemo: true } })
			.then(response => response.collection!);
	}

	return collection;
}

/**
 * Find or create a project.
 */
export async function getOrCreateProject(collection: LiveApiModel.Collection) {
	// Use the first project if we've already loaded the scene.
	const project = collection.projects.find(i => i.metadata.sceneWebrtcDemo);

	if (project) {
		return await client.LiveApi().project.getProject({
			collectionId: collection.collectionId,
			projectId: project.projectId,
		}).then(response => response.project);
	}

	// Create a new project
	const response = await client.LiveApi().project?.createProject({
		collectionId: collection.collectionId,
		metadata: { sceneWebrtcDemo: true },
		rendering: {
			video: {
				height: 720,
				width: 1280,
				framerate: 30,
			},
		},
		// This enables the hosted WebRTC option for your project.
		webrtc: {
			hosted: {
				enabled: true,
			}
		},
	});

	return response.project;
}
export async function getOrCreateLayout(project: LiveApiModel.Project): Promise<LayoutApiModel.Layout> {
	const layout = await client.LayoutApi().layout.listLayouts({
		collectionId: project?.collectionId,
		projectId: project?.projectId,
	}).then(layouts => layouts.layouts.find(l => l.metadata.sceneWebrtcDemo));

	if (layout) {
		return layout;
	}

	return client.LayoutApi().layout.createLayout({
		layout: {
			width: project.rendering?.video?.width,
			height: project.rendering?.video?.width,
			collectionId: project.collectionId,
			projectId: project.projectId,

			// Important: set the type to be of a "scene".
			type: LayoutApiModel.LayoutType.LAYOUT_TYPE_SCENE,

			metadata: {
				sceneWebrtcDemo: true,
			}
		}
	});
}

async function cleanupLayouts(project: LiveApiModel.Project) {
	const layouts = await client.LayoutApi().layout.listLayouts({
		collectionId: project.collectionId,
		projectId: project.projectId,
	}).then(response => response.layouts.filter(lo => lo.metadata.sceneWebrtcDemo));

	for (const layout of layouts) {
		await client.LayoutApi().layout.deleteLayout({ layoutId: layout.id });
	}
}

export async function createDestination(project: LiveApiModel.Project, key: string, url: string) {
	const destination = project.destinations.filter(dst => dst.metadata.sceneWebrtcDemo);

	// Clean up destinations in case they change.
	for (const dst of destination) {
		await client.LiveApi().destination.deleteDestination({
			collectionId: project.collectionId,
			destinationId: dst.destinationId,
			projectId: project.projectId,
		});
	}

	return client.LiveApi().destination?.createDestination({
		collectionId: project?.collectionId,
		projectId: project?.projectId,
		address: {
			rtmpPush: {
				key: key,
				url: url,
			},
		},
		metadata: {
			sceneWebrtcDemo: true,
		},
		enabled: true,
	});
}

(window as any)['joinWebrtc'] = joinWebrtc;
(window as any)['stop'] = stop;
(window as any)['start'] = start;