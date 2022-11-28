import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		dts({
			insertTypesEntry: true,
		}),
		react(),
		cssInjectedByJsPlugin(),
	],
	build: {
		lib: {
			entry: [
				resolve(__dirname, 'src/index.ts'),
				resolve(__dirname, 'src/outlined.tsx'),
				resolve(__dirname, 'src/rounded.tsx'),
				resolve(__dirname, 'src/sharp.tsx'),
			],
			name: 'React Material Symbols',
		},
	},
});
