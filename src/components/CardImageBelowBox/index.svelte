<script>
  import { Box } from "creditdesign-svelte-components";
  import CardImageBelow from "../CardImageBelow/index.svelte";

  export let className = "";
  export let cardData;
  export let stackSpace = "var(--s-1)";
  export let gridSpace = "var(--s-1)";
  export let minWidth = "20ch";
</script>

<div class="{`card invert ${className}`}">
  <Box>
    <CardImageBelow {cardData} {stackSpace} {gridSpace} {minWidth} />
  </Box>
</div>
