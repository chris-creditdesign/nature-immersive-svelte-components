<script>
  import { Box, Center } from "creditdesign-svelte-components";
  import CardBox from "./index.svelte";

  export let id;
  export let headerLevel;
  export let className;
  export let cardData;
  export let stackSpace;
</script>

<Center centerMeasure="600px">
  <Box>
    <CardBox {headerLevel} {id} {className} {cardData} {stackSpace} />
  </Box>
</Center>

{#if id}
  <a href="#test">Click to focus</a>
{/if}
