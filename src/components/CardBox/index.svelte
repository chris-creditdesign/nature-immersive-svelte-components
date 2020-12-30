<script>
  import { Box } from "creditdesign-svelte-components";
  import Card from "../Card/index.svelte";

  export let boxSpace;
  export let cardData;
  export let cardHeaderStackSpace;
  export let className = "";
  export let headerLevel;
  export let headlineFontSize;
  export let id;
  export let stackSpace;
</script>

<div class="{`card--box invert ${className}`}">
  <Box {boxSpace}>
    <Card
      {cardData}
      {cardHeaderStackSpace}
      {headerLevel}
      {headlineFontSize}
      {id}
      {stackSpace}
    />
  </Box>
</div>
