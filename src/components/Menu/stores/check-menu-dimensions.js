/* eslint-disable consistent-return */
import { writable, derived } from "svelte/store";

const getRoundedHeight = (elem) => {
  let { offsetHeight } = elem.target;
  let roundedHeight = Math.round(offsetHeight);
  return roundedHeight;
};

export const menuElement = writable();

export const menuHeight = derived(
  menuElement,
  ($menuElement, set) => {
    if (!$menuElement) return;

    const ro = new ResizeObserver(([entry]) => {
      let roundedHeight = getRoundedHeight(entry);
      set(roundedHeight);
    });

    ro.observe($menuElement);

    return () => ro.disconnect();
  },
  0
);
