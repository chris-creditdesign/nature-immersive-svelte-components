<script lang="ts">
  import { onMount } from "svelte";
  import { Cover } from "creditdesign-svelte-components";

  
  interface Props {
    srcURL?: string;
    alt?: string;
    /**
   * Side padding of sloted content
   */
    coverSpace?: string;
    coverHeight?: string;
    children?: import('svelte').Snippet;
  }

  let {
    srcURL = "",
    alt = "",
    coverSpace = "var(--s0)",
    coverHeight = "100vh",
    children
  }: Props = $props();

  let src = $derived(srcURL);

  let slotPresent = !!children;

  // If the slot is present add the css class to add a semi-transparent
  // background and make the text color white.
  let className = slotPresent ? "cover-with-background" : null;

  onMount(() => {
    src = srcURL.replace(/-small/, "");
  });
</script>

<style>
  /* Fall back styles for no custom properties */
  img {
    width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  @supports (color: var(--primary)) {
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -999;
      width: inherit;
      margin: 0;
      transform: translate(-50%, -50%);
    }

    /* Make the text visible over the dark background
       Only applied if there is a slot present */
    .cover-with-background {
      color: var(--color--white-0);
      background-color: rgba(10, 4, 4, 0.4);
    }
  }
</style>

<div class={className}>
  <Cover {coverSpace} {coverHeight}>
    <img {src} {alt} />
    <div class="cover__centered">
      {@render children?.()}
    </div>
  </Cover>
</div>
