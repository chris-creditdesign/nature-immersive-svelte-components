<script>
  import { Box } from "creditdesign-svelte-components";
  import Card from "../Card/index.svelte";

  export let id = null;
  export let headerLevel = "h2";
  export let className = "";
  export let cardData;
  export let stackSpace = "var(--s-1)";
</script>

<div class="{`card invert ${className}`}">
  <Box>
    <Card {headerLevel} {id} {cardData} {stackSpace} />
  </Box>
</div>
