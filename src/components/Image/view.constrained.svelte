<script>
  import { Box, Center } from "creditdesign-svelte-components";
  import Image from "./index.svelte";

  export let className = "";
  export let altText;
  export let caption;
  export let srcURL;
  export let captionSpace;
</script>

<Center centerMeasure="600px">
  <Box>
    <Image {className} {altText} {caption} {srcURL} {captionSpace} />
  </Box>
</Center>
