<script>
	export let className = '';
	export let paused = true;
	export let pausedMessage = 'Play video';
	export let playingMessage = 'Pause video';
	/**
	 * Optional to add `data-theme` to button element.
	 */
	export let theme = '';
	export let disabled = false;
</script>

<style>
	button {
		z-index: 1; /* Make sure button is above video */
		font-weight: bold;
		color: var(--color--text-invert);
		text-transform: uppercase;
		background-color: var(--color--background-invert);
		border-color: var(--color--text-invert);
		border-width: 3px;
	}

	button:hover,
	button:focus {
		color: var(--color--link-active);
		background-color: var(--color--outline);
		border-color: var(--color--link-active);
	}
</style>

<button
	aria-checked={paused}
	class={`${className} font-size:small`}
	role="switch"
	type="button"
	data-theme={theme}
	on:click
	disabled={disabled ? true : null}
>
	{#if paused}
		{pausedMessage}
	{:else}
		{playingMessage}
	{/if}
</button>
