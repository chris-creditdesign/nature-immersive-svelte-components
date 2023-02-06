<script>
	export let className = '';
	export let height = 1;
	export let checked = false;
	export let title = '';
</script>

<style>
	svg {
		display: block;
		overflow: visible;
	}

	circle {
		opacity: 0;
		transition: opacity ease-in-out var(--time);
	}

	.checked circle {
		opacity: 1;
	}
</style>

<svg
	class={className}
	class:checked
	height={`${height}em`}
	viewBox="0 0 40 40"
	focusable="false"
	aria-hidden="true"
>
	<path
		class="st0"
		d="M20,35c-8.3,0-15-6.7-15-15S11.7,5,20,5s15,6.7,15,15S28.3,35,20,35z M20,10c-5.5,0-10,4.5-10,10s4.5,10,10,10
		s10-4.5,10-10S25.5,10,20,10z"
	/>

	<circle class="st0" cx="20" cy="20" r="6.2" />
</svg>
{#if title.length}
	<span class="visually-hidden">{title}</span>
{/if}
