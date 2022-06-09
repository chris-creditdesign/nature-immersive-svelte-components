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
    d="M20,31.2L8.9,37L11,24.7L2,16l12.4-1.8L20,3l5.6,11.2L38,16l-9,8.7L31.1,37L20,31.2z"
  />
</svg>
{#if title.length}
  <span class="visually-hidden">{title}</span>
{/if}
