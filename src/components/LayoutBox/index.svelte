<script>
  import StyleBox from "./style.svelte";

  export let className = "";
  export let boxSpace = "";
</script>

<StyleBox />

<div
  class={`box ${className}`}
  style={`${boxSpace ? `--box-space: ${boxSpace};` : ''}`}>
  <slot />
</div>
