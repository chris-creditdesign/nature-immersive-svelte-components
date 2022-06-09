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
    d="M20,37c0,0-11.9-15.5-11.9-22.1C8.1,8.3,13.4,3,20,3s11.9,5.3,11.9,11.9C31.9,21.5,20,37,20,37z M20,18.3
	c1.9,0,3.4-1.5,3.4-3.4s-1.5-3.4-3.4-3.4s-3.4,1.5-3.4,3.4S18.1,18.3,20,18.3z"
  />
</svg>
{#if title.length}
  <span class="visually-hidden">{title}</span>
{/if}
