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
    class="st0"
    d="M31.8,39.3H8.2c-3,0-5.5-2.5-5.5-5.5V6.2c0-3,2.5-5.5,5.5-5.5h13.7c1.5,0,2.8,0.6,3.9,1.6l9.8,9.7
		c1,1,1.6,2.4,1.6,3.9v17.8C37.2,36.8,34.8,39.3,31.8,39.3z M8.2,3.7c-1.4,0-2.5,1.1-2.5,2.5v27.6c0,1.4,1.1,2.5,2.5,2.5h23.5
		c1.4,0,2.5-1.1,2.5-2.5V15.9c0-0.7-0.3-1.3-0.7-1.8l-9.8-9.7c-0.5-0.5-1.1-0.7-1.8-0.7H8.2z"
  />

  <path
    class="st0"
    d="M28.6,21.4c-0.6-0.6-1.5-0.6-2.1,0l-4.9,4.9V12.5c0-0.8-0.7-1.5-1.5-1.5s-1.5,0.7-1.5,1.5v13.9l-4.9-4.9
	c-0.6-0.6-1.5-0.6-2.1,0s-0.6,1.5,0,2.1l7.5,7.5c0,0,0,0,0,0c0.1,0.1,0.3,0.2,0.5,0.3c0,0,0,0,0,0c0.2,0.1,0.3,0.1,0.5,0.1
	c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0.2,0,0.4,0,0.5-0.1c0,0,0,0,0,0c0.2-0.1,0.4-0.2,0.5-0.3l7.5-7.5C29.1,23,29.1,22,28.6,21.4z
	"
  />
</svg>
{#if title.length}
  <span class="visually-hidden">{title}</span>
{/if}
