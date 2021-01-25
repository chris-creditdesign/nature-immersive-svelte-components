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
      console.log("resizing....");
      let roundedHeight = getRoundedHeight(entry);
      set(roundedHeight);
      //   if (entry.contentRect.width > 740) {
      //     set(true);
      //   } else {
      //     set(false);
      //   }
    });

    ro.observe($menuElement);

    // let roundedHeight = getRoundedHeight($menuElement);
    // set(roundedHeight);

    return () => ro.disconnect();
  },
  0
);
