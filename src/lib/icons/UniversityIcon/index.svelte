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
		d="M34.4,16.4H38v-3.6L20,2L2,12.8v3.6h3.6v18H2V38h36v-3.6h-3.6V16.4z M16.4,30.8h-3.6V16.4h3.6V30.8z M23.6,30.8V16.4h3.6
		v14.4H23.6z"
	/>
</svg>
{#if title.length}
	<span class="visually-hidden">{title}</span>
{/if}
