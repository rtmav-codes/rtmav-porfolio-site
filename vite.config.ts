import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
	plugins: [
		sveltekit(),
		ViteImageOptimizer({
			png: { quality: 80 },
			jpeg: { quality: 80 },
			jpg: { quality: 80 },
			webp: { quality: 80 },
			avif: { quality: 80 }
		})
	],

	build: {
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			onwarn(warning, warn) {
				// Suppress Rollup warnings from Flowbite Svelte
				if (warning.message.includes('Error when using sourcemap for reporting an error')) return;
				if (warning.message.includes('contains an annotation that Rollup cannot interpret due to the position of the comment')) return;
				
				warn(warning);
			}
		}
	},

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
