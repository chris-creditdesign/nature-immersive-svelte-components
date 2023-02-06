<script lang="ts">
	import { buttonElement } from '../../stores/pdf-download-stores.js';
	import DownloadIcon from '$lib/icons/DownloadIcon/index.svelte';

	export let expanded: boolean;
</script>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 245px;
		padding: 0;
		cursor: pointer;
		background: none;
		background-color: var(--background-color);
		border-color: var(--pdf-download-accent-color, var(--text-color));
		border-style: solid;
		border-width: 2px;
		transition: border-color 100ms ease-in;
		fill: var(--text-color);
	}

	button:hover,
	button:focus {
		border-color: var(--outline);
		outline: none;
	}
</style>

<button bind:this={$buttonElement} on:click on:focus on:blur aria-expanded={expanded}>
	<DownloadIcon height={30} title="Download PDF" />
</button>
