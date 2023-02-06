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
	let linearGradientStyle = slotPresent
		? `linear-gradient(rgba(10, 4, 4, 0.4), rgba(10, 4, 4, 0.4)),`
		: '';

	$: backgroundImageStyle = `background-image: ${linearGradientStyle} url(${src});`;

	onMount(() => {
		src = srcURL.replace(/-small/, '');
	});
</script>

<style>
	.static-background-image-section {
		background-attachment: fixed;
		background-position: center;
		background-size: cover;
	}

	/* Make the text visible over the dark background
       Only applied if there is a slot present */
	.cover-with-background {
		color: var(--color--white-0);
	}
</style>

<div
	class={`static-background-image-section ${className}`}
	style={backgroundImageStyle}
	aria-label={alt}
>
	<Cover {coverSpace} {coverHeight}>
		<div class="cover__centered">
			<slot />
		</div>
	</Cover>
</div>
