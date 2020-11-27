<script>
  import { Box, Center } from "creditdesign-svelte-components";
  import YouTube from "./index.svelte";

  export let videoId;
  export let videoRatioHeight;
  export let videoRatioWidth;
</script>

<Center centerMeasure="600px">
  <Box>
    <YouTube {videoId} {videoRatioHeight} {videoRatioWidth} />
  </Box>
</Center>
