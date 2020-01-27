<script>
  import StyleStack from "./style.svelte";

  export let className = "";
  export let stackSpace = "";
</script>

<StyleStack />

<div
  class={`stack ${className}`}
  style={`${stackSpace ? `--stack-space: ${stackSpace};` : ''}`}>
  <slot />
</div>
