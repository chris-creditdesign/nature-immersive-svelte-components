<script>
  import { Stack } from "creditdesign-svelte-components";
  import CardHeader from "../CardHeader/index.svelte";
  import CardImageBelowSidebar from "../CardImageBelowSidebar/index.svelte";
  import CardImageBelowStack from "../CardImageBelowStack/index.svelte";

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
  /**
   * Minimum percentage of the components width that the text can
   * be squashed to before switching to the stacked view.
   */
  export let textMinWidth = "50%";
  export let imageOnLeft = true;
  /**
   * Space between the text block and the image,
   * either stacked or side by side.
   */
  export let sidebarSpace = "var(--s-1)";
  /**
   * Width of the image when in side by side view.
   */
  export let imageWidth = "var(--s7)";
  /**
   * Stack space within the text block
   */
  export let stackSpace = "var(--s-1)";
  export let theme = "";

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
      />
    {:else}
      <CardImageBelowStack {stackSpace} {cardData} />
    {/if}

    <slot />
  </Stack>
</div>
