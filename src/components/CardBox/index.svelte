<script>
  import { Box } from "creditdesign-svelte-components";
  import Card from "../Card/index.svelte";

  export let boxSpace = "var(--s-1)";
  /**
   * - altText
   * - caption
   * - eyebrow
   * - footnote
   * - headline
   * - href
   * - srcURL
   * - subHead
   * - text
   */
  export let cardData;
  export let cardHeaderStackSpace = "var(--s-4)";
  export let className = "";
  export let headerLevel = "h2";
  export let headlineFontSize = "big-2";
  export let id = "";
  export let stackSpace = "var(--s-1)";
  export let theme = "invert";
</script>

<div class={`card--box ${className}`} data-theme={theme}>
  <Box {boxSpace}>
    <Card
      {cardData}
      {cardHeaderStackSpace}
      {headerLevel}
      {headlineFontSize}
      {id}
      {stackSpace}
      {theme}
    >
      <slot />
    </Card>
  </Box>
</div>
