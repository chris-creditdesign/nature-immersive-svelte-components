<script>
  import { Box, Center } from "creditdesign-svelte-components";
  import CardImageBelowBox from "./index.svelte";

  export let id;
  export let headerLevel;
  export let className;
  export let cardData;
  export let stackSpace;
  export let sidebarWidth;
  export let sidebarContentMinWidth;
  export let sidebarSpace;
  export let sidebarOnLeft;
</script>

<Center centerMeasure="800px">
  <Box>
    <CardImageBelowBox
      {headerLevel}
      {id}
      {className}
      {cardData}
      {stackSpace}
      {sidebarWidth}
      {sidebarContentMinWidth}
      {sidebarSpace}
      {sidebarOnLeft}
    />
  </Box>
</Center>

{#if id}
  <a href="#test">Click to focus</a>
{/if}
