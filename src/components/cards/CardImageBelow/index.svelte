<script lang="ts">
  import { Stack } from "creditdesign-svelte-components";
  import CardHeader from "../components/CardHeader/index.svelte";
  import CardImageBelowSidebar from "../components/CardImageBelowSidebar/index.svelte";
  import CardImageBelowStack from "../components/CardImageBelowStack/index.svelte";

  
  
  
  
  
  interface Props {
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
    theme = "",
    children
  }: Props = $props();

  let { srcURL } = cardData;
</script>

<div class={`card--image-below ${className}`} data-theme={theme}>
  <Stack {stackSpace}>
    <CardHeader
      {cardData}
      {cardHeaderStackSpace}
      {headerLevel}
      {headlineFontSize}
      {id}
    />

    {#if srcURL}
      <CardImageBelowSidebar
        {cardData}
        {textMinWidth}
        {imageOnLeft}
        {sidebarSpace}
        {imageWidth}
        {stackSpace}
        {relatedLinksStackSpace}
      />
    {:else}
      <CardImageBelowStack {stackSpace} {cardData} {relatedLinksStackSpace} />
    {/if}

    {@render children?.()}
  </Stack>
</div>
