/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
	plugins: [
		typescript(),
	],
	optimizeDeps: {
		include: ['@api.stream/sdk']
	},
	build: {
		commonjsOptions: {
			include: [/sdk/, /node_modules/],
			transformMixedEsModules: true,
		}
	},
	resolve: {
		alias: {
			src: resolve(__dirname, 'src'),
		},
	},
	server: {
		port: 8081,
	},
})