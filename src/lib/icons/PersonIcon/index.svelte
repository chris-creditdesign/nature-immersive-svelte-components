<script>
	export let className = '';
	export let height = 1;
	export let title = 'University';
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
		d="M20,24.3c5.8,0,10.2-4.4,10.2-10.2C30.2,8,25.8,3.6,20,3.6C13.9,3.6,9.6,8,9.6,14.1C9.6,19.9,13.9,24.3,20,24.3z M20,27.3
	c-5.8,0-13,2.7-15,9h30C33,30.1,25.8,27.3,20,27.3z"
	/>
</svg>
{#if title.length}
	<span class="visually-hidden">{title}</span>
{/if}
