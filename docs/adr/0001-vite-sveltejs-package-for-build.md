# Vite + @sveltejs/package as the build system

The project was previously built with Rollup and `rollup-plugin-svelte`. We migrated to Vite with `@sveltejs/package` (`svelte-package`) because it is now the canonical build tool for Svelte component libraries, provides better DX, and is actively maintained by the Svelte core team. Rollup would have required manual updates to configuration and plugins that are no longer the recommended path.

## Considered Options

- **Keep Rollup** — minimal change, but `rollup-plugin-svelte` is in maintenance mode and the ecosystem has moved to Vite.
- **Vite + @sveltejs/package** — standard for Svelte libraries since SvelteKit adopted Vite; automatic `.d.ts` generation, proper package exports.
