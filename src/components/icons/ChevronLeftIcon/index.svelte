<script>
  export let className = "";
  export let height = 1;
  export let title = "";
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
    d="M25.1,32.4c1-1,1-2.6,0-3.5L16.2,20l8.8-8.8c1-1,1-2.6,0-3.5s-2.6-1-3.5,0L10.9,18.2c-0.5,0.5-0.7,1.1-0.7,1.8
	c0,0,0,0,0,0s0,0,0,0c0,0.6,0.2,1.3,0.7,1.8l10.6,10.6C22.5,33.4,24.1,33.4,25.1,32.4z"
  />
</svg>
{#if title.length}
  <span class="visually-hidden">{title}</span>
{/if}
