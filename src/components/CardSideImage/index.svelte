<script>
  import LayoutStack from "../LayoutStack/index.svelte";
  import LayoutGrid from "../LayoutGrid/index.svelte";
  import Image from "../Image/index.svelte";

  export let className = "";
  export let cardData;
  export let stackSpace = "var(--s-1)";
  export let gridSpace = "var(--s-1)";

  let { altText, caption, footnote, headline, href, srcURL, text } = cardData;
</script>

<style>
  .footnote {
    font-size: var(--font-size-small-1);
    font-family: var(--sans-serif-font);
  }

  h3 {
    margin: 0;
  }
</style>

<div class={`card ${className}`}>
  <LayoutGrid {gridSpace}>
    {#if srcURL}
      <Image {altText} {caption} {srcURL} />
    {/if}
    <LayoutStack {stackSpace}>
      <a {href}>
        <h3>{headline}</h3>
      </a>
      <p>
        {@html text}
      </p>

      {#if footnote}
        <p class="footnote">{footnote}</p>
      {/if}
    </LayoutStack>
  </LayoutGrid>
</div>
