<script>
  import StyleCenter from "./style.svelte";

  export let className = "";
  export let centerSpace = "";
  export let centerMeasure = "";
</script>

<StyleCenter />

<div
  class={`center ${className}`}
  style={`${centerSpace ? `--center-space: ${centerSpace};` : ''} ${centerMeasure ? `--center-measure: ${centerMeasure};` : ''}`}>
  <slot />
</div>
