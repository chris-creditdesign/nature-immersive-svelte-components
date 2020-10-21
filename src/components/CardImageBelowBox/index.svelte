<script>
  import { Box } from "creditdesign-svelte-components";
  import CardImageBelow from "../CardImageBelow/index.svelte";

  export let id;
  export let className = "";
  export let cardData;
  export let stackSpace = "var(--s-1)";
  export let sidebarWidth = "20ch";
  export let sidebarContentMinWidth;
  export let sidebarSpace;
  export let sidebarOnLeft;
</script>

<div class="{`card invert ${className}`}">
  <Box>
    <CardImageBelow
      {id}
      {cardData}
      {stackSpace}
      {sidebarWidth}
      {sidebarContentMinWidth}
      {sidebarSpace}
      {sidebarOnLeft}
    />
  </Box>
</div>
