<script lang="ts">
	import type { CardData } from '$lib/types';
	import type { Space } from 'creditdesign-svelte-components/types';
	import { Stack } from 'creditdesign-svelte-components';

	export let cardData: CardData;
	export let stackSpace: Space = 'var(--s-1)';
	export let relatedLinksStackSpace: Space = 'var(--s-3)';

	let { footnote, text, relatedLinks, relatedLinksHeadline } = cardData;
</script>

<style>
	.footnote {
		font-family: var(--sans-serif-font);
		font-size: var(--font-size-small-1);
	}
</style>

<Stack {stackSpace}>
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
		<p class="footnote">
			{@html footnote}
		</p>
	{/if}
</Stack>
