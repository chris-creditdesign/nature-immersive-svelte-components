<script lang="ts">
  import { Box } from "creditdesign-svelte-components";
  import Card from "../Card/index.svelte";

  
  interface Props {
    boxSpace?: string;
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
    cardData: any;
    cardHeaderStackSpace?: string;
    className?: string;
    headerLevel?: string;
    headlineFontSize?: string;
    id?: string;
    stackSpace?: string;
    relatedLinksStackSpace?: string;
    theme?: string;
    children?: import('svelte').Snippet;
  }

  let {
    boxSpace = "var(--s-1)",
    cardData,
    cardHeaderStackSpace = "var(--s-4)",
    className = "",
    headerLevel = "h2",
    headlineFontSize = "big-2",
    id = "",
    stackSpace = "var(--s-1)",
    relatedLinksStackSpace = "var(--s-3)",
    theme = "invert",
    children
  }: Props = $props();
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
      {relatedLinksStackSpace}
      {theme}
    >
      {@render children?.()}
    </Card>
  </Box>
</div>
