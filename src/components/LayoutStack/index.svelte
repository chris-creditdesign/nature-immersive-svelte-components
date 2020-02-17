<script>
  export let className = "";
  export let stackSpace = "";
</script>

<div>
  <div
    class={`stack ${className}`}
    style={`${stackSpace ? `--stack-space: ${stackSpace};` : ''}`}>
    <slot />
  </div>
</div>
