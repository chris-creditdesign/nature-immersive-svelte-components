<script lang="ts">
  import { Sidebar, Stack } from "creditdesign-svelte-components";
  import Card from "../Card/index.svelte";
  import Image from "../../Image/index.svelte";

  
  
  
  
  
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

  let { altText, caption, srcURL } = cardData;

  let cardDataNoImage = { ...cardData, srcURL: undefined };
</script>

<div class={`card--side-image ${className}`} data-theme={theme}>
  {#if srcURL}
    <Stack {stackSpace}>
      <Sidebar
        sidebarContentMinWidth={textMinWidth}
        sidebarOnRight={!imageOnLeft}
        {sidebarSpace}
        sidebarWidth={imageWidth}
      >
        {#snippet sidebar()}
                <div >
            <Image {altText} {caption} {srcURL} />
          </div>
              {/snippet}
        <div slot="main-content">
          <Card
            {cardHeaderStackSpace}
            {headerLevel}
            {headlineFontSize}
            {id}
            {stackSpace}
            {relatedLinksStackSpace}
            cardData={cardDataNoImage}
            {theme}
          />
        </div>
      </Sidebar>
      {@render children?.()}
    </Stack>
  {:else}
    <Card
      {cardData}
      {cardHeaderStackSpace}
      {headerLevel}
      {id}
      {stackSpace}
      {relatedLinksStackSpace}
      {theme}
    >
      {@render children?.()}
    </Card>
  {/if}
</div>
