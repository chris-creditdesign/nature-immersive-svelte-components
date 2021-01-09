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
  export let theme = "invert";
</script>

<div class="{`card--box ${className}`}" data-theme="{theme}">
  <Box {boxSpace}>
    <Card
      {cardData}
      {cardHeaderStackSpace}
      {headerLevel}
      {headlineFontSize}
      {id}
      {stackSpace}
      {theme}
    >
      <slot />
    </Card>
  </Box>
</div>
