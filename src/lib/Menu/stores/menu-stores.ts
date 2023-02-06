/* eslint-disable consistent-return */
import type { Writable } from 'svelte/store';
import { writable, derived } from 'svelte/store';

export const menuElement: Writable<HTMLElement> = writable();

export const menuHeight = derived(
	menuElement,
	($menuElement, set) => {
		if (!$menuElement) return;

		const ro = new ResizeObserver(([entry]) => {
			let { target } = entry;
			let htmlElement = target as HTMLElement;
			let { offsetHeight } = htmlElement;
			set(offsetHeight);
		});

		ro.observe($menuElement);

		return () => ro.disconnect();
	},
	0
);
