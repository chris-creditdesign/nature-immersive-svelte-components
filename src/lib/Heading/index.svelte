<script lang="ts">
	import type { Space, Measure } from 'creditdesign-svelte-components/types';
	import { Center, Stack } from 'creditdesign-svelte-components';

	import formatDate from '../utils/format-date.js';

	export let articleData;
	export let className = '';
	export let maxWidth: Measure = 'var(--measure-big)';
	/**
	 * Padding to left and right of the heading
	 */
	export let centerSpace: Space = '0';
	/**
	 * Space between head and stand block and bylines and date block
	 */
	export let headAndCreditsStackSpace: Space = 'var(--s2)';
	export let headStandStackSpace: Space = 'var(--s2)';
	export let creditsStackSpace: Space = 'var(--s-3)';

	let { author, headline, photographer, publishedAt, stand } = articleData;
</script>

<style>
	.heading {
		text-align: center;
	}

	h1,
	p {
		max-width: none;
	}

	.stand-first {
		font-size: var(--font-size-big-1);
	}

	time {
		max-width: none;

		/* Even out the line height for the date */

		line-height: 1rem;
		letter-spacing: 0.05em;
	}

	@media (max-width: 740px) {
		h1 {
			font-size: var(--font-size-big-2);
		}

		.stand-first {
			font-size: var(--font-size-base);
		}
	}
</style>

<div class={`heading ${className}`}>
	<Center centerMeasure={maxWidth} {centerSpace}>
		<Stack stackSpace={headAndCreditsStackSpace}>
			<Stack stackSpace={headStandStackSpace}>
				<h1 class="letter-spacing:tight">
					{@html headline}
				</h1>
				<p class="stand-first">
					{@html stand}
				</p>
			</Stack>

			{#if author || photographer || publishedAt}
				<Stack stackSpace={creditsStackSpace}>
					{#if author}
						<p class="author font-weight:bold">
							{@html author}
						</p>
					{/if}
					{#if photographer}
						<p class="photographer font-weight:bold">
							{@html photographer}
						</p>
					{/if}

					{#if publishedAt}
						<time
							class="font-family:sans-serif font-size:small
              text-transform:uppercase"
							itemProp="datePublished"
							dateTime={formatDate(publishedAt, 'iso-string')}
						>
							{formatDate(publishedAt, 'day-month-year')}
						</time>
					{/if}
				</Stack>
			{/if}
		</Stack>
	</Center>
</div>
