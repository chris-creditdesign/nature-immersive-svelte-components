<script>
  import { onMount } from "svelte";
  import ImageSlider from "./index.svelte";
  import { Box, Center } from "creditdesign-svelte-components";

  export let className = "";
  export let ratio;
  export let imageData;
  export let message;

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<Center>
  <Box boxSpace="var(--s3)">
    <ImageSlider {className} {ratio} {imageData} {message} bind:mounted />
  </Box>
</Center>
