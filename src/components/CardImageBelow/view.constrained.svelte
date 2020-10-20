<script>
  import { Box, Center } from "creditdesign-svelte-components";
  import CardImageBelow from "./index.svelte";

  export let className;
  export let stackSpace;
  export let sidebarWidth;
  export let sidebarContentMinWidth;
  export let sidebarSpace;
  export let sidebarOnRight;
  export let cardData;
</script>

<Center centerMeasure="800px">
  <Box>
    <CardImageBelow
      {className}
      {stackSpace}
      {sidebarWidth}
      {sidebarContentMinWidth}
      {sidebarSpace}
      {sidebarOnRight}
      {cardData}
    />
  </Box>
</Center>
