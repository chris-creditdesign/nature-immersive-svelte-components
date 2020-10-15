<script>
  import { Box, Center } from "creditdesign-svelte-components";
  import CardSideImageBox from "./index.svelte";

  export let className;
  export let cardData;
  export let stackSpace;
  export let gridSpace;
  export let minWidth;
</script>

<Center centerMeasure="800px">
  <Box>
    <CardSideImageBox
      {className}
      {cardData}
      {stackSpace}
      {gridSpace}
      {minWidth}
    />
  </Box>
</Center>
