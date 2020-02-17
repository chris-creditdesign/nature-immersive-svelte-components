<script>
  export let className = "";
  export let gridSpace = "";
  export let minWidth = "14rem";
</script>

<div
  class={`grid above-min ${className}`}
  style={`${gridSpace ? `--grid-space: ${gridSpace};` : ''} ${minWidth ? `--grid-min-width: ${minWidth};` : ''}`}>
  <slot />
</div>
