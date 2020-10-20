<script>
  import { Box, Center } from "creditdesign-svelte-components";
  import CardSideImageBox from "./index.svelte";

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
    <CardSideImageBox
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
