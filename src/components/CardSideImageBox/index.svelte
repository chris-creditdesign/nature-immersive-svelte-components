<script>
  import LayoutStack from "../LayoutStack/index.svelte";
  import LayoutGrid from "../LayoutGrid/index.svelte";
  import LayoutBox from "../LayoutBox/index.svelte";
  import CardSideImage from "../CardSideImage/index.svelte";
  import Image from "../Image/index.svelte";

  export let className = "";
  export let cardData;
  export let stackSpace = "var(--s-1)";
  export let gridSpace = "var(--s-1)";

  let { altText, caption, footnote, headline, href, srcURL, text } = cardData;
</script>

<div class={`card ${className}`}>
  <LayoutBox className={'invert'}>
    <CardSideImage {cardData} {stackSpace} {gridSpace} />
  </LayoutBox>
</div>
