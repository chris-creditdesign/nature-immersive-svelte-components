<script>
  import { Box, Center } from "creditdesign-svelte-components";
  import Card from "./index.svelte";

  export let className;
  export let stackSpace;
  export let cardData;
</script>

<Center centerMeasure="600px">
  <Box>
    <Card {className} {stackSpace} {cardData} />
  </Box>
</Center>
