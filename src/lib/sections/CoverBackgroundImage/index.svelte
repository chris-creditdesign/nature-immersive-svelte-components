<script lang="ts">
	import type { Space, Height } from 'creditdesign-svelte-components/types';
	import { onMount } from 'svelte';
	import { Cover } from 'creditdesign-svelte-components';

	export let srcURL = '';
	export let alt = '';
	/**
	 * Side padding of sloted content
	 */
	export let coverSpace: Space = 'var(--s0)';
	export let coverHeight: Height = '100vh';

	$: src = srcURL;

	let slotPresent = Object.keys($$slots).length > 0;

	// If the slot is present add the css class to add a semi-transparent
	// background and make the text color white.
	let className = slotPresent ? 'cover-with-background' : null;

	onMount(() => {
		src = srcURL.replace(/-small/, '');
	});
</script>

<style>
	/* Fall back styles for no custom properties */
	img {
		width: 600px;
		margin-right: auto;
		margin-left: auto;
	}

	@supports (color: var(--primary)) {
		img {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: -999;
			width: inherit;
			margin: 0;
			transform: translate(-50%, -50%);
		}

		/* Make the text visible over the dark background
       Only applied if there is a slot present */
		.cover-with-background {
			color: var(--color--white-0);
			background-color: rgba(10, 4, 4, 0.4);
		}
	}
</style>

<div class={className}>
	<Cover {coverSpace} {coverHeight}>
		<img {src} {alt} />
		<div class="cover__centered">
			<slot />
		</div>
	</Cover>
</div>
