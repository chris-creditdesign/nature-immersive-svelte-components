<script>
  import { Box, Center } from "creditdesign-svelte-components";
  import CardBox from "./index.svelte";

  export let className;
  export let cardData;
  export let stackSpace;
</script>

<Center centerMeasure="600px">
  <Box>
    <CardBox {className} {cardData} {stackSpace} />
  </Box>
</Center>
