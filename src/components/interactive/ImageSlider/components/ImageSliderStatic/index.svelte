<script>
  import { Stack } from "creditdesign-svelte-components";
  import Image from "../../../../Image/index.svelte";

  export let imageData = [];
</script>

<Stack>
  {#each imageData as { altText, caption, srcURL }}
    <Image {altText} {caption} {srcURL} />
  {/each}
</Stack>
