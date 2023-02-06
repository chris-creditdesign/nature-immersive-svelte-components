<script lang="ts">
	import type { CardData } from '$lib/types';
	import type { Space, PercentWidth, Measure } from 'creditdesign-svelte-components/types';
	import { Box } from 'creditdesign-svelte-components';
	import CardSideImage from '../CardSideImage/index.svelte';

	export let boxSpace: Space = 'var(--s-1)';
	export let cardData: CardData;
	export let cardHeaderStackSpace: Space = 'var(--s-4)';
	export let className = '';
	export let headerLevel = 'h2';
	export let headlineFontSize = 'big-2';
	export let id = '';
	/**
	 * Minimum percentage of the components width that the text can
	 * be squashed to before switching to the stacked view.
	 */
	export let textMinWidth: PercentWidth = '50%';
	export let imageOnLeft = true;
	/**
	 * Space between the text block and the image,
	 * either stacked or side by side.
	 */
	export let sidebarSpace: Space = 'var(--s-1)';
	/**
	 * Width of the image when in side by side view.
	 */
	export let imageWidth: Measure = 'var(--s7)';
	/**
	 * Stack space within the text block
	 */
	export let stackSpace: Space = 'var(--s-1)';
	export let relatedLinksStackSpace: Space = 'var(--s-3)';
	export let theme = 'invert';
</script>

<div class={`card invert ${className}`} data-theme={theme}>
	<Box {boxSpace}>
		<CardSideImage
			{cardData}
			{cardHeaderStackSpace}
			{headerLevel}
			{headlineFontSize}
			{id}
			{textMinWidth}
			{imageOnLeft}
			{sidebarSpace}
			{imageWidth}
			{stackSpace}
			{relatedLinksStackSpace}
			{theme}
		>
			<slot />
		</CardSideImage>
	</Box>
</div>
