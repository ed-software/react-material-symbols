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
		emptyOutDir: false,
		cssCodeSplit: true,
		lib: {
			entry: resolve(__dirname, 'src/outlined.tsx'),
			name: 'React Material Symbols',
			fileName: 'outlined',
		},
	},
});
