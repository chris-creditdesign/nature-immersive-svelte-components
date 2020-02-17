<script>
  export let className = "";
  export let boxSpace = "";
</script>

<div
  class={`box ${className}`}
  style={`${boxSpace ? `--box-space: ${boxSpace};` : ''}`}>
  <slot />
</div>
