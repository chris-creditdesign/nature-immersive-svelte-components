<script>
  import { Box, Center } from "creditdesign-svelte-components";
  import CardSideImage from "./index.svelte";

  export let className;
  export let cardData;
  export let stackSpace;
  export let gridSpace;
</script>

<Center centerMeasure="800px">
  <Box>
    <CardSideImage {className} {cardData} {stackSpace} {gridSpace} />
  </Box>
</Center>
