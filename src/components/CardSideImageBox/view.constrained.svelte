<script>
  import { Box, Center } from "creditdesign-svelte-components";
  import CardSideImageBox from "./index.svelte";

  export let id;
  export let headerLevel;
  export let className;
  export let cardData;
  export let stackSpace;
  export let gridSpace;
</script>

<Center centerMeasure="800px">
  <Box>
    <CardSideImageBox
      {headerLevel}
      {id}
      {className}
      {cardData}
      {stackSpace}
      {gridSpace}
    />
  </Box>
</Center>

{#if id}
  <a href="#test">Click to focus</a>
{/if}
