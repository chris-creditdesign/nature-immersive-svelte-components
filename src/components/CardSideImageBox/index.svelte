<script>
  import { Box } from "creditdesign-svelte-components";
  import CardSideImage from "../CardSideImage/index.svelte";
  import Image from "../Image/index.svelte";

  export let className = "";
  export let cardData;
  export let stackSpace = "var(--s-1)";
  export let gridSpace = "var(--s-1)";

  let { altText, caption, footnote, headline, href, srcURL, text } = cardData;
</script>

<div class={`card ${className}`}>
  <Box className={'invert'}>
    <CardSideImage {cardData} {stackSpace} {gridSpace} />
  </Box>
</div>
