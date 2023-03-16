import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		dts({
			insertTypesEntry: true,
		}),
		react(),
	],
	build: {
		emptyOutDir: false,
		cssCodeSplit: true,
		lib: {
			entry: resolve(__dirname, 'src/css/rounded.css'),
			name: 'React Material Symbols',
			fileName: 'rounded',
		},
	},
});
