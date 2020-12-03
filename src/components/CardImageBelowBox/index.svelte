<script>
  import { Box } from "creditdesign-svelte-components";
  import CardImageBelow from "../CardImageBelow/index.svelte";

  export let id = null;
  export let headerLevel = "h2";
  export let className = "";
  export let cardData;
  export let stackSpace = "var(--s-1)";
  export let sidebarWidth = "30ch";
  export let sidebarContentMinWidth = "";
  export let sidebarSpace = "";
  export let sidebarOnLeft = "";
</script>

<div class="{`card invert ${className}`}">
  <Box>
    <CardImageBelow
      {headerLevel}
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
