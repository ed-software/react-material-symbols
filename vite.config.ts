/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		environment: 'jsdom',
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.tsx'),
			name: 'React Material Symbols',
			formats: ['es', 'umd'],
			fileName: (format) => `index.${format}.js`,
		},
	},
});
