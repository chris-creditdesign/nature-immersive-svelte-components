<script lang="ts">
  import { Box } from "creditdesign-svelte-components";
  import CardImageBelow from "../CardImageBelow/index.svelte";

  
  
  
  
  
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
    /**
   * Minimum percentage of the components width that the text can
   * be squashed to before switching to the stacked view.
   */
    textMinWidth?: string;
    imageOnLeft?: boolean;
    /**
   * Space between the text block and the image,
   * either stacked or side by side.
   */
    sidebarSpace?: string;
    /**
   * Width of the image when in side by side view.
   */
    imageWidth?: string;
    /**
   * Stack space within the text block
   */
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
    textMinWidth = "50%",
    imageOnLeft = true,
    sidebarSpace = "var(--s-1)",
    imageWidth = "var(--s7)",
    stackSpace = "var(--s-1)",
    relatedLinksStackSpace = "var(--s-3)",
    theme = "invert",
    children
  }: Props = $props();
</script>

<div class={`card--image-below-box ${className}`} data-theme={theme}>
  <Box {boxSpace}>
    <CardImageBelow
      {cardData}
      {cardHeaderStackSpace}
      {headerLevel}
      {headlineFontSize}
      {id}
      {textMinWidth}
      {imageOnLeft}
      {sidebarSpace}
      {imageWidth}
      {stackSpace}
      {relatedLinksStackSpace}
      {theme}
    >
      {@render children?.()}
    </CardImageBelow>
  </Box>
</div>
