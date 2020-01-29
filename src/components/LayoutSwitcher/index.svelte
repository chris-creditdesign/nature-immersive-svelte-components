<script>
  import StyleSwitcher from "./style.svelte";

  export let className = "";
  export let id = "";
  export let switcherSpace;
  export let switcherMinWidth;
</script>

<StyleSwitcher />

<div
  {id}
  class={`switcher ${className}`}
  style={`${switcherSpace ? `--switcher-space: ${switcherSpace};` : ''} ${switcherMinWidth ? `--switcher-min-width: ${switcherMinWidth};` : ''}`}>
  <div>
    <slot />
  </div>
</div>
