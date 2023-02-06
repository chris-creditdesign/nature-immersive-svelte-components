<script>
	export let className = '';
	export let height = 1;
	export let title = 'Facebook';
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
		d="M21.2,30.5h-4.4V20h-2.2v-3.6h2.2v-2.2c0-2.9,1.2-4.7,4.8-4.7h3v3.6h-1.8c-1.4,0-1.5,0.5-1.5,1.4l0,1.8h3.3L24.2,20h-3V30.5
	z"
	/>
	<path
		d="M20,39C9.5,39,1,30.5,1,20S9.5,1,20,1s19,8.5,19,19S30.5,39,20,39z M20,4C11.2,4,4,11.2,4,20s7.2,16,16,16s16-7.2,16-16
		S28.8,4,20,4z"
	/>
</svg>
{#if title.length}
	<span class="visually-hidden">{title}</span>
{/if}
