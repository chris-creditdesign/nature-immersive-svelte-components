/* eslint-disable consistent-return */
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
