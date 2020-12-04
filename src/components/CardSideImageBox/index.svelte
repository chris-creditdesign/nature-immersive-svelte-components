<script>
  import { Box } from "creditdesign-svelte-components";
  import CardSideImage from "../CardSideImage/index.svelte";

  export let id = null;
  export let headerLevel = "h2";
  export let className = "";
  export let cardData;
  export let stackSpace = "var(--s-1)";
  export let gridSpace = "var(--s-1)";
  export let headerStackSpace;
  export let boxSpace;
</script>

<div class="{`card invert ${className}`}">
  <Box {boxSpace}>
    <CardSideImage
      {headerLevel}
      {id}
      {cardData}
      {stackSpace}
      {gridSpace}
      {headerStackSpace}
    />
  </Box>
</div>
