<script>
  import ImageSlider from "./index.svelte";
  import { Box, Center } from "creditdesign-svelte-components";

  export let className = "";
  export let ratio;
  export let imageData;
  export let message;
</script>

<Center>
  <Box boxSpace="var(--s3)">
    <ImageSlider {className} {ratio} {imageData} {message} />
  </Box>
</Center>
