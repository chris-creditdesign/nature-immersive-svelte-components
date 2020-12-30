<script>
  import { Box } from "creditdesign-svelte-components";
  import CardImageBelow from "../CardImageBelow/index.svelte";

  export let boxSpace;
  export let cardData;
  export let cardHeaderStackSpace;
  export let className = "";
  export let headerLevel;
  export let headlineFontSize;
  export let id;
  export let sidebarContentMinWidth;
  export let sidebarOnLeft;
  export let sidebarSpace;
  export let sidebarWidth;
  export let stackSpace;
</script>

<div class="{`card--image-below-box invert ${className}`}">
  <Box {boxSpace}>
    <CardImageBelow
      {cardData}
      {cardHeaderStackSpace}
      {headerLevel}
      {headlineFontSize}
      {id}
      {sidebarContentMinWidth}
      {sidebarOnLeft}
      {sidebarSpace}
      {sidebarWidth}
      {stackSpace}
    />
  </Box>
</div>
