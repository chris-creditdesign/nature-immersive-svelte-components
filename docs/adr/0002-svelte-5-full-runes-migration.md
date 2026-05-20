# Full migration to Svelte 5 runes syntax

All components are being migrated to Svelte 5 runes (`$props()`, `$state()`, `$derived()`, `$effect()`) rather than using Svelte 5's legacy compatibility mode. Svelte 5 can run Svelte 3/4 syntax unchanged, but since the codebase is being actively revisited, carrying forward legacy syntax would create a split codebase and delay the inevitable. Full runes adoption also enables better TypeScript integration and clearer reactivity boundaries.

## Consequences

- Components that used `export let` must be updated to use `$props()`
- Reactive declarations (`$:`) must be replaced with `$derived()` or `$effect()`
- The Svelte store (`youTubeIframeAPIReady`) should remain as-is — Svelte 5 is fully compatible with the store contract
