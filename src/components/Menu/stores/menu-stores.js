/* eslint-disable consistent-return */
import { writable, derived } from "svelte/store";

export const menuElement = writable();

export const buttonElement = writable();

export const menuHeight = derived(
  menuElement,
  ($menuElement, set) => {
    if (!$menuElement) return;

    const ro = new ResizeObserver(([entry]) => {
      let { offsetHeight } = entry.target;
      set(offsetHeight);
    });

    ro.observe($menuElement);

    return () => ro.disconnect();
  },
  0
);
