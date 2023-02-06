<script lang="ts">
	import type { CardData } from '$lib/types';
	import type { Space, PercentWidth, Measure } from 'creditdesign-svelte-components/types';
	import { Sidebar, Stack } from 'creditdesign-svelte-components';
	import Card from '$lib/cards/Card/index.svelte';
	import Image from '$lib/Image/index.svelte';

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
	export let theme = '';

	let { altText, caption, srcURL } = cardData;

	let cardDataNoImage = { ...cardData, srcURL: undefined };
</script>

<div class={`card--side-image ${className}`} data-theme={theme}>
	{#if srcURL}
		<Stack {stackSpace}>
			<Sidebar
				sidebarContentMinWidth={textMinWidth}
				sidebarOnRight={!imageOnLeft}
				{sidebarSpace}
				sidebarWidth={imageWidth}
			>
				<div slot="sidebar">
					<Image {altText} {caption} {srcURL} />
				</div>
				<div slot="main-content">
					<Card
						{cardHeaderStackSpace}
						{headerLevel}
						{headlineFontSize}
						{id}
						{stackSpace}
						{relatedLinksStackSpace}
						cardData={cardDataNoImage}
						{theme}
					/>
				</div>
			</Sidebar>
			<slot />
		</Stack>
	{:else}
		<Card
			{cardData}
			{cardHeaderStackSpace}
			{headerLevel}
			{id}
			{stackSpace}
			{relatedLinksStackSpace}
			{theme}
		>
			<slot />
		</Card>
	{/if}
</div>
