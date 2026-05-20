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
  let linearGradientStyle = slotPresent
    ? `linear-gradient(rgba(10, 4, 4, 0.4), rgba(10, 4, 4, 0.4)),`
    : "";

  let backgroundImageStyle = $derived(`background-image: ${linearGradientStyle} url(${src});`);

  onMount(() => {
    src = srcURL.replace(/-small/, "");
  });
</script>

<style>
  .static-background-image-section {
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }

  /* Make the text visible over the dark background
       Only applied if there is a slot present */
  .cover-with-background {
    color: var(--color--white-0);
  }
</style>

<div
  class={`static-background-image-section ${className}`}
  style={backgroundImageStyle}
  aria-label={alt}
>
  <Cover {coverSpace} {coverHeight}>
    <div class="cover__centered">
      {@render children?.()}
    </div>
  </Cover>
</div>
