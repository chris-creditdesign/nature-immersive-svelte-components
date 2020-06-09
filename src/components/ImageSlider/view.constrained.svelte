<script>
  import { onMount } from "svelte";
  import { Box, Center } from "creditdesign-svelte-components";
  import ImageSlider from "./index.svelte";

  export let className = "";
  export let ratio;
  export let imageData;
  export let message;
  export let amountToReveal;

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<Center centerMeasure="600px">
  <Box>
    <ImageSlider
      {className}
      {ratio}
      {imageData}
      {message}
      {amountToReveal}
      bind:mounted />
  </Box>
</Center>
