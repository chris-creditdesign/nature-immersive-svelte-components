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
  img {
    display: block;
  }

  figcaption {
    margin-top: var(--s-3);
  }
</style>

<figure class="{`${className}`}">
  <img {src} alt="{altText}" />
  {#if caption}
    <figcaption class="font-size:small font-family:sans-serif">
      {@html caption}
    </figcaption>
  {/if}
</figure>
