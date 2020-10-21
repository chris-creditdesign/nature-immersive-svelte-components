<script>
  import { Box, Center } from "creditdesign-svelte-components";
  import Card from "./index.svelte";

  export let id;
  export let className;
  export let stackSpace;
  export let cardData;
</script>

<Center centerMeasure="600px">
  <Box>
    <Card {id} {className} {stackSpace} {cardData} />
  </Box>
</Center>

{#if id}
  <a href="#test">Click to focus</a>
{/if}
