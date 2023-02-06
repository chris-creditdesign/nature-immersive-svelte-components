<script lang="ts">
	import type { CardData } from '$lib/types';
	import type { Space } from 'creditdesign-svelte-components/types';
	import { Box } from 'creditdesign-svelte-components';
	import Card from '$lib/cards/Card/index.svelte';

	export let boxSpace: Space = 'var(--s-1)';
	export let cardData: CardData;
	export let cardHeaderStackSpace: Space = 'var(--s-4)';
	export let className = '';
	export let headerLevel = 'h2';
	export let headlineFontSize = 'big-2';
	export let id = '';
	export let stackSpace: Space = 'var(--s-1)';
	export let relatedLinksStackSpace: Space = 'var(--s-3)';
	export let theme = 'invert';
</script>

<div class={`card--box ${className}`} data-theme={theme}>
	<Box {boxSpace}>
		<Card
			{cardData}
			{cardHeaderStackSpace}
			{headerLevel}
			{headlineFontSize}
			{id}
			{stackSpace}
			{relatedLinksStackSpace}
			{theme}
		>
			<slot />
		</Card>
	</Box>
</div>
