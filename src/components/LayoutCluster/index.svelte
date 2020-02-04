<script>
  export let className = "";
  export let clusterJustifyContent = "";
  export let clusterSpace = "";
</script>

<div
  class={`cluster ${className}`}
  style={`${clusterJustifyContent ? `--cluster-justify-content: ${clusterJustifyContent};` : ''} ${clusterSpace ? `--cluster-space: ${clusterSpace};` : ''}`}>
  <div>
    <slot />
  </div>
</div>
