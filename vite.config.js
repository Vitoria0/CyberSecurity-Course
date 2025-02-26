import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import GlobImport from 'rollup-plugin-glob-import';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [react(), GlobImport({})],
	test: {
		globals: true,
	},
	assetsInclude: ['**/*.mp4'],
	resolve: {
		alias: {
			'@src': '/src',
		},
	},
});
