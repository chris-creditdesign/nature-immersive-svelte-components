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
		d="M14.9,7.6c-1,1-1,2.6,0,3.5l8.8,8.8l-8.8,8.8c-1,1-1,2.6,0,3.5s2.6,1,3.5,0l10.6-10.6c0.5-0.5,0.7-1.1,0.7-1.8
	c0,0,0,0,0,0s0,0,0,0c0-0.6-0.2-1.3-0.7-1.8L18.5,7.6C17.5,6.6,15.9,6.6,14.9,7.6z"
	/>
</svg>
{#if title.length}
	<span class="visually-hidden">{title}</span>
{/if}
