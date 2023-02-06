<script lang="ts">
	import { Stack } from 'creditdesign-svelte-components';
	import ImageSliderCanvas from '../ImageSliderCanvas/index.svelte';

	/**
	 * Aria-label to apply to canvas element.
	 */
	export let altText = 'Interactive section used to compare two images.';
	/**
	 * Percentage of imageA to show over imageB
	 */
	export let amountToReveal = 0;
	/**
	 * HTMLImageElement to render to the canvas
	 */
	export let imageA: HTMLImageElement;
	/**
	 * HTMLImageElement to render to the canvas
	 */
	export let imageB: HTMLImageElement;
	/**
	 * Text to sit above the slider
	 */
	export let message = 'Use the slider to reveal the hidden image:';
	/**
	 * Ratio of height / width of the images - both should be the same
	 */
	export let ratio = 0.666666667;
	/**
	 * Class to add to container div
	 */
	export let className = '';
</script>

<style>
	input[type='range'] {
		width: 100%;
		max-width: none;
	}

	.canvas-container {
		margin-right: 5px;
		margin-left: 5px;
	}

	.canvas-border {
		padding-top: var(--s1);
		padding-bottom: var(--s1);
		border-top: 2px solid #000;
		border-bottom: 2px solid #000;
	}

	.stack--fieldset {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		max-width: none;
		padding: 0;
		border: none;
	}

	.stack--fieldset > * {
		margin: 0;
	}

	.stack--fieldset > * + * {
		margin-top: var(--s-1);
	}

	legend {
		padding: 0;
	}
</style>

<div class={`${className} image-slider font-size:small font-family:sans-serif`}>
	<Stack>
		<div class="canvas-border">
			<div class="canvas-container">
				<ImageSliderCanvas {altText} {amountToReveal} {imageA} {imageB} {ratio} />
			</div>
		</div>

		<fieldset class="stack--fieldset">
			<legend class="bold">{message}</legend>
			<input
				type="range"
				id="image-reveal"
				min="0"
				max="100"
				bind:value={amountToReveal}
				step="1"
			/>
			<label class="visually-hidden" for="image-reveal">
				{amountToReveal}% of the second image is revealed.
			</label>
		</fieldset>
	</Stack>
</div>
