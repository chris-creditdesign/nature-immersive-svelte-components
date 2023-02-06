<!--
@component

A simple card component that can be used to display content in a card format.
-->
<script lang="ts">
	import type { CardData } from '$lib/types';
	import type { Space } from 'creditdesign-svelte-components/types';
	import { Stack } from 'creditdesign-svelte-components';
	import CardHeader from '$lib/cards/components/CardHeader/index.svelte';
	import Image from '$lib/Image/index.svelte';

	export let cardData: CardData;
	export let cardHeaderStackSpace: Space = 'var(--s-4)';
	export let className = '';
	export let headerLevel = 'h2';
	export let headlineFontSize = 'big-2';
	export let id = '';
	export let stackSpace: Space = 'var(--s-1)';
	export let relatedLinksStackSpace: Space = 'var(--s-3)';
	export let theme = '';

	let { altText, caption, footnote, srcURL, text, relatedLinksHeadline, relatedLinks } = cardData;
</script>

<div class={`card ${className}`} data-theme={theme}>
	<Stack {stackSpace}>
		{#if srcURL}
			<Image {altText} {caption} {srcURL} />
		{/if}

		<CardHeader {cardData} {cardHeaderStackSpace} {headerLevel} {headlineFontSize} {id} />

		{#if text}
			<p>
				{@html text}
			</p>
		{/if}

		{#if relatedLinks && relatedLinks.length}
			<div class="footnote font-size:small font-family:sans-serif">
				<Stack stackSpace={relatedLinksStackSpace}>
					{#if relatedLinksHeadline}
						<p>
							{@html relatedLinksHeadline}
						</p>
					{/if}

					<Stack stackSpace={relatedLinksStackSpace} list={true}>
						{#each relatedLinks as link}
							<li>
								{@html link.value}
							</li>
						{/each}
					</Stack>
				</Stack>
			</div>
		{/if}

		{#if footnote}
			<p class="footnote font-size:small font-family:sans-serif">
				{@html footnote}
			</p>
		{/if}

		<slot />
	</Stack>
</div>
