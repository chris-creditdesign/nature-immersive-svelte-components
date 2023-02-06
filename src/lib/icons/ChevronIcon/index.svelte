<script>
	export let className = '';
	export let height = 1;
	export let title = '';
</script>

<style>
	svg {
		display: block;
		overflow: visible;
	}
</style>

<svg
	class={className}
	height={`${height}em`}
	viewBox="0 0 40 40"
	focusable="false"
	aria-hidden="true"
>
	<path
		d="M32.4,12.9c-1-1-2.6-1-3.5,0L20,21.8l-8.8-8.8c-1-1-2.6-1-3.5,0s-1,2.6,0,3.5l10.6,10.6
	c0.5,0.5,1.1,0.7,1.8,0.7c0,0,0,0,0,0s0,0,0,0c0.6,0,1.3-0.2,1.8-0.7l10.6-10.6C33.4,15.5,33.4,13.9,32.4,12.9z"
	/>
</svg>
{#if title.length}
	<span class="visually-hidden">{title}</span>
{/if}
