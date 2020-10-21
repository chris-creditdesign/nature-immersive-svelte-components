<script>
  import { Box } from "creditdesign-svelte-components";
  import Card from "../Card/index.svelte";

  export let id;
  export let className = "";
  export let cardData;
  export let stackSpace = "var(--s-1)";
</script>

<div class="{`card invert ${className}`}">
  <Box>
    <Card {id} {cardData} {stackSpace} />
  </Box>
</div>
