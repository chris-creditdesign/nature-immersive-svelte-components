<script>
  import { Box, Center } from "creditdesign-svelte-components";
  import CardImageBelow from "./index.svelte";

  export let className;
  export let stackSpace;
  export let cardData;
</script>

<Center centerMeasure="600px">
  <Box>
    <CardImageBelow {className} {stackSpace} {cardData} />
  </Box>
</Center>
