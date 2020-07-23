<script>
  import { Box, Center, Stack } from "creditdesign-svelte-components";
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
  export let playingMessage;
  export let pausedMessage;
</script>

<Stack>
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
        {playingMessage}
        {pausedMessage}
      />
    </Box>
  </Center>

  <Center centerMeasure="600px">
    <Box>
      <Video
        {className}
        {altText}
        caption="Dies ist die Beschriftung"
        {srcURL}
        {captionSpace}
        {autoplay}
        {loop}
        buttonAtTop="true"
        buttonOnLeft="true"
        playingMessage="Video anhalten"
        pausedMessage="Video abspielen"
      />
    </Box>
  </Center>
</Stack>
