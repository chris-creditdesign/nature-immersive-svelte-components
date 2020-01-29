<script>
  import { onMount } from "svelte";
  export let className = "";
  export let altText;
  export let caption;
  export let srcURL;

  $: src = srcURL;
  //   export let captionSpace;

  onMount(() => {
    src = srcURL.replace(/-small/, "");
  });
</script>

<style>
  figure {
    margin: 0;
  }

  figcaption {
    box-sizing: content-box;
    font-size: var(--font-size-small-1);
    font-family: var(--sans-serif-font);
    /* padding-left: ${captionSpace};
			padding-right: ${captionSpace}; */
  }
</style>

<figure class={`${className}`}>
  <img {src} alt={altText} />
  <figcaption>{caption}</figcaption>
</figure>
