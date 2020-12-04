<script>
  import { Box } from "creditdesign-svelte-components";
  import Card from "../Card/index.svelte";

  export let id = null;
  export let headerLevel = "h2";
  export let className = "";
  export let cardData;
  export let stackSpace = "var(--s-1)";
  export let headerStackSpace;
  export let boxSpace;
</script>

<div class="{`card invert ${className}`}">
  <Box {boxSpace}>
    <Card {headerLevel} {id} {cardData} {stackSpace} {headerStackSpace} />
  </Box>
</div>
