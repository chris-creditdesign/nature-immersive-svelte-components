<script>
  import LayoutStack from "../LayoutStack/index.svelte";
  import LayoutGrid from "../LayoutGrid/index.svelte";
  import Card from "../Card/index.svelte";
  import Image from "../Image/index.svelte";

  export let className = "";
  export let cardData;
  export let stackSpace = "var(--s-1)";
  export let gridSpace = "var(--s-1)";

  let { altText, caption, footnote, headline, href, srcURL, text } = cardData;

  let cardDataNoImage = Object.assign({}, cardData, { srcURL: undefined });
</script>

<div class={`card ${className}`}>
  <LayoutGrid {gridSpace}>
    {#if srcURL}
      <Image {altText} {caption} {srcURL} />
    {/if}
    <Card cardData={cardDataNoImage} {stackSpace} />
  </LayoutGrid>
</div>
