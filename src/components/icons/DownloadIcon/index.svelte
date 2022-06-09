<script>
  export let height = 1;
  export let className = "";
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
    class="st0"
    d="M32.5,39h-25C6.1,39,5,37.9,5,36.5S6.1,34,7.5,34h25c1.4,0,2.5,1.1,2.5,2.5S33.9,39,32.5,39z"
  />

  <path
    class="st0"
    d="M32.4,16.1c-1-1-2.6-1-3.5,0l-6.3,6.3v-19C22.5,2.1,21.4,1,20,1s-2.5,1.1-2.5,2.5v19l-6.3-6.3c-1-1-2.6-1-3.5,0
	s-1,2.6,0,3.5l10.6,10.6c0.2,0.2,0.5,0.4,0.8,0.5c0,0,0,0,0,0c0.1,0.1,0.3,0.1,0.4,0.1c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.5,0.1
	c0,0,0,0,0,0s0,0,0,0c0.2,0,0.3,0,0.5,0c0.1,0,0.1,0,0.2-0.1c0.1,0,0.2,0,0.2-0.1c0.1,0,0.2-0.1,0.3-0.1c0.1,0,0.1-0.1,0.2-0.1
	c0.1-0.1,0.3-0.2,0.4-0.3l10.6-10.6C33.4,18.7,33.4,17.1,32.4,16.1z"
  />
</svg>
{#if title.length}
  <span class="visually-hidden">{title}</span>
{/if}
