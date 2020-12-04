<script>
  export let className = "";
  export let height = 1;
</script>

<style>
  svg {
    display: block;
    overflow: visible;
  }
</style>

<svg
  class="{className}"
  height="{`${height}em`}"
  viewBox="0 0 40 30"
  focusable="false"
  aria-hidden="true"
>
  <polygon points="0,0 40,0 20,30 "></polygon>
</svg>
