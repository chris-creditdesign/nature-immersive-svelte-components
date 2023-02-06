<!--
@component
HTML `section` element to place around contents with
optional H2 headline.

-->
<script lang="ts">
	import type { Space, Measure } from 'creditdesign-svelte-components/types';
	/**
	 *
	 * @component
	 */
	import { Center, Stack } from 'creditdesign-svelte-components';

	/**
	 * Optional class to add to `section` element.
	 */
	export let className = '';
	/**
	 * Space left and right around section.
	 */
	export let centerSpace: Space = 'var(--s1)';
	/**
	 * Vertical space between elements within the section.
	 */
	export let stackSpace: Space = 'var(--s-1)';
	/**
	 * Miniumum width of the section.
	 */
	export let centerMeasure: Measure = 'var(--measure)';
	/**
	 * Optional headline. If none supplied the `h2` will not
	 * be present.
	 */
	export let headline = '';
</script>

<section class={`${className}`}>
	<Center {centerSpace} {centerMeasure}>
		<Stack {stackSpace}>
			{#if headline.length}
				<h2 class="border-above">{headline}</h2>
			{/if}
			<slot />
		</Stack>
	</Center>
</section>
