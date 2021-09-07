<script>
  import { onMount } from "svelte";

  export let altText;
  export let caption = "";
  export let className = "";
  export let srcURL;
  /**
   * Optional space to move caption in from side of video.
   */
  export let captionSpace = 0;

  let image;

  let captionSpaceComponent = captionSpace
    ? `--image-caption-space--component: ${captionSpace};`
    : "";

  let captionStyle = `${captionSpaceComponent}`;

  $: src = srcURL;

  onMount(() => {
    if ("loading" in HTMLImageElement.prototype) {
      // Browser supports `loading`..
      src = srcURL.replace(/-small/, "");
    } else {
      // Use Intersection Observer for lazy loading instead
      let options = {
        root: null,
        rootMargin: "0px 0px 0px 0px",
      };

      let onEnterScreen = ([entry]) => {
        if (entry.isIntersecting) {
          src = srcURL.replace(/-small/, "");
          observer.unobserve(image);
        }
      };

      const observer = new IntersectionObserver(onEnterScreen, options);

      observer.observe(image);

      return () => observer.disconnect();
    }
  });
</script>

<style>
  :global(:root) {
    --image-caption-space--global: 0;
  }

  figure {
    --image-caption-space--component: initial;
  }

  img {
    display: block;
  }

  figcaption {
    --video-caption-space--component: initial;
    --image-caption-space: var(
      --image-caption-space--component,
      var(--image-caption-space--global, 0)
    );

    margin-top: var(--s-3);
    margin-right: var(--image-caption-space);
    margin-left: var(--image-caption-space);
  }
</style>

<figure class={`${className}`}>
  <img {src} alt={altText} bind:this={image} loading="lazy" />
  {#if caption.length}
    <figcaption
      style={captionStyle}
      class="font-size:small font-family:sans-serif"
    >
      {@html caption}
    </figcaption>
  {/if}
</figure>
