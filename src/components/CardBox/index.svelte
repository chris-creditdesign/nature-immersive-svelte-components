<script>
  import { Box } from "creditdesign-svelte-components";
  import Card from "../Card/index.svelte";

  export let className = "";
  export let cardData;
  export let stackSpace = "var(--s-1)";
</script>

<div class="{`card ${className}`}">
  <Box className="{'invert'}">
    <Card {cardData} {stackSpace} />
  </Box>
</div>
