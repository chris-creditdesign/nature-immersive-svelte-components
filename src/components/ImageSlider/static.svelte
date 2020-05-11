<script>
  import Image from "../Image/index.svelte";
  export let imageData = [];
</script>

{#each imageData as { altText, caption, srcURL }}
  <Image {altText} {caption} {srcURL} />
{/each}
