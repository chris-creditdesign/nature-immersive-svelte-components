<script>
  /**
   * - href
   */
  export let cardData;
  export let headerLevel = "h2";
  export let headlineFontSize = "big-2";
  export let id = "";

  let { href } = cardData;

  // If there is no `href` within the `cardData` there will not be a link within the headline.
  // In this case the headline itself should be focusable if it has an id.
  // This is to allow anchor linking to the card from other points in the document.
  // Changing the headline level should not effect the size of the text.
  let useId = id.length && href !== undefined ? id : null;
  let tabindex = id.length && href !== undefined ? "-1" : null;

  let className = `font-size:${headlineFontSize} font-weight:bold`;

  let tag = headerLevel === "none" ? "span" : headerLevel;
</script>

<svelte:element this={tag} id={useId} {tabindex} class={className}>
  <slot />
</svelte:element>
