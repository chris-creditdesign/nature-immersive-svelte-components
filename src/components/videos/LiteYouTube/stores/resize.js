/* eslint-disable consistent-return */
// Not compatable with iOS safari versions < 13.7
// Use Svelte's bind:clientWidth for now, consider upgrading in the future
import { writable, derived } from "svelte/store";

export const container = writable();

export const width = derived(container, ($container, set) => {
  if (!$container) return;

  const ro = new ResizeObserver(([entry]) => {
    set(entry.contentRect.width);
  });

  ro.observe($container);

  return () => ro.disconnect();
});
