import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import noBundlePlugin from 'vite-plugin-no-bundle';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		dts({
			insertTypesEntry: true,
		}),
		react(),
		noBundlePlugin({
			root: 'source',
			fileNames: '[name].css',
			copy: '**/*.woff2',
			internal: 'my-special-node-module',
		}),
	],
	build: {
		emptyOutDir: false,
		cssCodeSplit: true,
		lib: {
			entry: resolve(__dirname, 'src/css/sharp.css'),
			name: 'React Material Symbols',
			fileName: 'sharp',
		},
	},
});
