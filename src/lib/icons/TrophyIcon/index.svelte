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
		d="M28.5,6.4V3h-17v3.4H3v6.8c0,4.7,3.8,8.5,8.5,8.5h0.2c0.7,3.3,3.3,5.9,6.6,6.6v3.6l-8.5,3.4V37h20.4v-1.7l-8.5-3.4v-3.6
	c3.3-0.7,6-3.3,6.6-6.6h0.2c4.7,0,8.5-3.8,8.5-8.5V6.4H28.5z M11.5,18.3c-2.8,0-5.1-2.3-5.1-5.1V9.8h5.1V18.3z M33.6,13.2
	c0,2.8-2.3,5.1-5.1,5.1V9.8h5.1V13.2z"
	/>
</svg>
{#if title.length}
	<span class="visually-hidden">{title}</span>
{/if}
