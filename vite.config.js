import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';
import { resolve } from 'path';

export default defineConfig({
	plugins: [svelte(), svelteTesting()],
	build: {
		lib: {
			entry: resolve(import.meta.dirname, 'src/index.js'),
			name: 'NatureImmersiveSvelteComponents',
			formats: ['es', 'umd'],
			fileName: (format) => (format === 'es' ? 'index.mjs' : 'index.js')
		},
		rollupOptions: {
			external: ['svelte', /^svelte\//],
			output: {
				globals: {
					svelte: 'svelte',
					'svelte/internal/client': 'SvelteInternalClient',
					'svelte/legacy': 'SvelteLegacy',
					'svelte/store': 'SvelteStore',
					'svelte/transition': 'SvelteTransition',
					'svelte/easing': 'SvelteEasing'
				}
			}
		}
	},
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./src/test/setup.ts']
	}
});

