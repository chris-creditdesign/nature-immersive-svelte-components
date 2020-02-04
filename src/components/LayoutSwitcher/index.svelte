<script>
  import StyleSwitcher from "./style.svelte";

  export let className = "";
  export let id = "";
  export let switcherSpace = "var(--s-1)";
  export let switcherMinWidth = "var(--measure)";
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
