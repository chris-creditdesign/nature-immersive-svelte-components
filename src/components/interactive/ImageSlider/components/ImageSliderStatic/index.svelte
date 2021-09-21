<script>
  import { Stack } from "creditdesign-svelte-components";
  import Image from "../../../../Image/index.svelte";

  export let imageData = [];

  /**
   * Class to add to container div
   */
  export let className = "";
</script>

<div class={`${className} image-slider font-size:small font-family:sans-serif`}>
  <Stack>
    {#each imageData as { altText, caption, srcURL }}
      <Image {altText} {caption} {srcURL} />
    {/each}
  </Stack>
</div>
