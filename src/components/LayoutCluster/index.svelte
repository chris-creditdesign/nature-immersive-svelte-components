<script>
  import StyleCluster from "./style.svelte";

  export let className = "";
  export let clusterJustifyContent = "";
  export let clusterSpace = "";
</script>

<StyleCluster />

<div
  class={`cluster ${className}`}
  style={`${clusterJustifyContent ? `--cluster-justify-content: ${clusterJustifyContent};` : ''} ${clusterSpace ? `--cluster-space: ${clusterSpace};` : ''}`}>
  <div>
    <slot />
  </div>
</div>
