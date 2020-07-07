<script>
  import { onMount } from "svelte";

  export let className = "";
  export let altText;
  export let caption;
  export let srcURL;

  $: src = srcURL;

  onMount(() => {
    src = srcURL.replace(/-small/, "");
  });
</script>

<style>
  figcaption {
    box-sizing: content-box;
    font-family: var(--sans-serif-font);
    font-size: var(--font-size-small-1);
  }
</style>

<figure class="{`${className}`}">
  <img {src} alt="{altText}" />
  <figcaption>
    {@html caption}
  </figcaption>
</figure>
