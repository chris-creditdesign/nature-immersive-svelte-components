<script lang="ts">
	import type { CardData } from '$lib/types';
	import type { Space } from 'creditdesign-svelte-components/types';
	import { Stack } from 'creditdesign-svelte-components';
	import CardHeader from '$lib/CardHeader/index.svelte';
	import CardImageBelowSidebar from '$lib/CardImageBelowSidebar/index.svelte';
	import CardImageBelowStack from '$lib/CardImageBelowStack/index.svelte';

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
	export let textMinWidth = '50%';
	export let imageOnLeft = true;
	/**
	 * Space between the text block and the image,
	 * either stacked or side by side.
	 */
	export let sidebarSpace: Space = 'var(--s-1)';
	/**
	 * Width of the image when in side by side view.
	 */
	export let imageWidth: Space = 'var(--s7)';
	/**
	 * Stack space within the text block
	 */
	export let stackSpace: Space = 'var(--s-1)';
	export let relatedLinksStackSpace: Space = 'var(--s-3)';
	export let theme = '';

	let { srcURL } = cardData;
</script>

<div class={`card--image-below ${className}`} data-theme={theme}>
	<Stack {stackSpace}>
		<CardHeader {cardData} {cardHeaderStackSpace} {headerLevel} {headlineFontSize} {id} />

		{#if srcURL}
			<CardImageBelowSidebar
				{cardData}
				{textMinWidth}
				{imageOnLeft}
				{sidebarSpace}
				{imageWidth}
				{stackSpace}
				{relatedLinksStackSpace}
			/>
		{:else}
			<CardImageBelowStack {stackSpace} {cardData} {relatedLinksStackSpace} />
		{/if}

		<slot />
	</Stack>
</div>
