<script>
  import { Box, Center } from "creditdesign-svelte-components";
  import Video from "./index.svelte";

  export let className = "";
  export let altText;
  export let caption;
  export let srcURL;
  export let captionSpace;
  export let autoplay;
  export let loop;
  export let buttonAtTop;
  export let buttonOnLeft;
</script>

<Center centerMeasure="600px">
  <Box>
    <Video
      {className}
      {altText}
      {caption}
      {srcURL}
      {captionSpace}
      {autoplay}
      {loop}
      {buttonAtTop}
      {buttonOnLeft}
    />
  </Box>
</Center>
