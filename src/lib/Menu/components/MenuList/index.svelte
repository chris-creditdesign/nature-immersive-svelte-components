<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quadIn, quadOut } from 'svelte/easing';
	import { Switcher, Box } from 'creditdesign-svelte-components';

	export let menuLinks: { text: string; href: string }[] = [];
	export let lastMenuLinkElem: HTMLAnchorElement | null = null;
	export let menuHeight = 0;

	let style = `top: ${menuHeight}px;`;
</script>

<style>
	nav {
		position: absolute;

		/* Position the nav just below the Menu compontent */
		top: calc(1.6em + var(--s-1) + var(--s-1));
		left: 0;
		z-index: 999;
		width: 100%;
		max-width: none;
		border-top: 1px solid var(--color--text-invert);
	}

	/* If prefers reduced motion is set, don't animate the
    triangle spinning */
	@media (prefers-reduced-motion: reduce) {
		nav {
			animation-duration: 1ms !important;
			animation-delay: 0ms !important;
		}
	}

	li {
		min-width: fit-content;
	}
</style>

<nav
	data-theme="menu"
	{style}
	in:slide={{ duration: 250, easing: quadOut }}
	out:slide={{ duration: 250, easing: quadIn }}
	class="font-family:sans-serif"
>
	<Box boxSpace="var(--s-2)">
		<Switcher list={true}>
			{#each menuLinks as { text, href }, i}
				{#if i !== menuLinks.length - 1}
					<li>
						<a
							{href}
							on:focus
							on:blur
							data-event-category="menu"
							data-event-action="click"
							data-event-label={text}
							class="text-decoration:none"
						>
							{@html text}
						</a>
					</li>
				{:else}
					<li>
						<a
							{href}
							on:focus
							on:blur
							bind:this={lastMenuLinkElem}
							data-event-category="menu"
							data-event-action="click"
							data-event-label={text}
							class="text-decoration:none"
						>
							{@html text}
						</a>
					</li>
				{/if}
			{/each}
		</Switcher>
	</Box>
</nav>
