<script>
  export let className = "";
  export let coverHeight = "";
  export let coverSpace = "";
</script>

<div
  class={`cover ${className}`}
  style={`${coverSpace ? `--cover-space: ${coverSpace};` : ''} ${coverHeight ? `--cover-height: ${coverHeight};` : ''}`}>
  <slot />
</div>
