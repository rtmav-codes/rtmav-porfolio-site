import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],

	build: {
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
