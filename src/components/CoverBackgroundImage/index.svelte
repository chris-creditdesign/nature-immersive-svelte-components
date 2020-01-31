<script>
  import { onMount } from "svelte";

  import LayoutCover from "../LayoutCover/index.svelte";
  export let srcURL;
  export let alt;
  export let coverSpace = "1rem";
  export let coverHeight = "100vh";

  $: src = srcURL;

  onMount(() => {
    src = srcURL.replace(/-small/, "");
  });
</script>

<style>
  .cover__background {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -999;
  }
</style>

<LayoutCover className="cover--with-background" {coverSpace} {coverHeight}>
  <img class="cover__background" {src} {alt} />
  <slot />
</LayoutCover>
