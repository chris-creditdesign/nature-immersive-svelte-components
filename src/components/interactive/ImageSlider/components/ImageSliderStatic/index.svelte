<script lang="ts">
  import { Stack } from "creditdesign-svelte-components";
  import Image from "../../../../Image/index.svelte";


  
  interface Props {
    imageData?: any;
    /**
   * Class to add to container div
   */
    className?: string;
  }

  let { imageData = [], className = "" }: Props = $props();
</script>

<div class={`${className} image-slider font-size:small font-family:sans-serif`}>
  <Stack>
    {#each imageData as { altText, caption, srcURL }}
      <Image {altText} {caption} {srcURL} />
    {/each}
  </Stack>
</div>
