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
</script>

{#if headerLevel === "h1"}
  <h1
    id={useId}
    {tabindex}
    class={`card__headline font-size:${headlineFontSize} font-weight:bold`}
  >
    <slot />
  </h1>
{:else if headerLevel === "h2"}
  <h2
    id={useId}
    {tabindex}
    class={`card__headline font-size:${headlineFontSize} font-weight:bold`}
  >
    <slot />
  </h2>
{:else if headerLevel === "h3"}
  <h3
    id={useId}
    {tabindex}
    class={`card__headline font-size:${headlineFontSize} font-weight:bold`}
  >
    <slot />
  </h3>
{:else if headerLevel === "h4"}
  <h4
    id={useId}
    {tabindex}
    class={`card__headline font-size:${headlineFontSize} font-weight:bold`}
  >
    <slot />
  </h4>
{:else if headerLevel === "none"}
  <span
    id={useId}
    {tabindex}
    class={`card__headline font-size:${headlineFontSize} font-weight:bold`}
  >
    <slot />
  </span>
{/if}
