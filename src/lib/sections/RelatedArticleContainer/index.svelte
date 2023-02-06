<script lang="ts">
	import type { CardData } from '$lib/types';
	import { Stack } from 'creditdesign-svelte-components';
	import CardSideImageBox from '../../cards/CardSideImageBox/index.svelte';

	export let headline = 'Related articles';
	export let stand = '';
	export let relatedArticleFlexBasis = '';
	export let relatedArticleFlexGap = '';
	export let relatedArticles: CardData[] = [];
	export let cardHeaderLevel = 'h3';
	export let cardHeadlineFontSize = 'big-1';

	// Id to add to the headline so it can be referenced by the parent
	// `aside` element's `aria-labelledby` attribute.
	// TODO: Case where there are multiple RelatedArticleContainer components
	// on the same page with the same headline.
	// TODO: Case where there is no headline.
	let headlineId = headline.toLocaleLowerCase().replaceAll(' ', '-');

	let relatedArticleFlexGapComponent = relatedArticleFlexGap
		? `--related-article-flex-gap--component: ${relatedArticleFlexGap};`
		: '';

	let relatedArticleFlexBasisComponent = relatedArticleFlexBasis
		? `--related-article-flex-basis--component: ${relatedArticleFlexBasis};`
		: '';

	let style = `${relatedArticleFlexGapComponent} ${relatedArticleFlexBasisComponent}`;
</script>

<style>
	:global(:root) {
		--related-article-flex-gap--global: var(--s-1);
		--related-article-flex-basis--global: 20ch;
	}

	.related-article-container {
		--related-article-flex-gap--component: initial;
		--related-article-flex-basis--component: initial;
		--related-article-flex-gap: var(
			--related-article-flex-gap--component,
			var(--related-article-flex-gap--global)
		);
		--related-article-flex-basis: var(
			--related-article-flex-basis--component,
			var(--related-article-flex-basis--global)
		);

		display: flex;
		gap: var(--related-article-flex-gap);
		flex-wrap: wrap;
		margin: 0;
	}

	.related-article-container__article {
		position: relative;
		flex-basis: var(--related-article-flex-basis);
		flex-shrink: 1;
		flex-grow: 1;
		margin: 0;
	}

	:global(.related-article-container__article a::before) {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		content: '';
	}
</style>

<aside aria-labelledby={headline.length ? headlineId : null}>
	<Stack>
		<Stack stackSpace="var(--s-4)">
			{#if headline.length}
				<h2 class="font-family:sans-serif" id={headlineId}>
					{@html headline}
				</h2>
			{/if}
			{#if stand.length}
				<p class="font-family:sans-serif">
					{@html stand}
				</p>
			{/if}
		</Stack>
		<div class="related-article-container" {style}>
			{#each relatedArticles as cardData}
				<div class="related-article-container__article font-family:sans-serif" data-theme="invert">
					<CardSideImageBox
						headerLevel={cardHeaderLevel}
						headlineFontSize={cardHeadlineFontSize}
						{cardData}
					/>
				</div>
			{/each}
		</div>
	</Stack>
</aside>
