<script>
  import { onMount } from "svelte";
  import { Cover } from "creditdesign-svelte-components";

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
  /* Fall back styles for no custom properties */
  .cover__background {
    width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  @supports (color: var(--primary)) {
    .cover__background {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -999;
      width: inherit;
      margin: 0;
      transform: translate(-50%, -50%);
    }

    /* Make the text visible over the dark background */
    .cover--with-background {
      color: var(--white-0);
      background-color: rgba(10, 4, 4, 0.4);
    }
  }
</style>

<div class="cover--with-background">
  <Cover {coverSpace} {coverHeight}>
    <img class="cover__background" {src} {alt} />
    <slot />
  </Cover>
</div>
