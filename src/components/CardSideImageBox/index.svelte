<script>
  import { Box } from "creditdesign-svelte-components";
  import CardSideImage from "../CardSideImage/index.svelte";

  export let id;
  export let className = "";
  export let cardData;
  export let stackSpace = "var(--s-1)";
  export let gridSpace = "var(--s-1)";
</script>

<div class="{`card invert ${className}`}">
  <Box>
    <CardSideImage {id} {cardData} {stackSpace} {gridSpace} />
  </Box>
</div>
