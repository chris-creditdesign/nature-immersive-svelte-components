<script lang="ts">
  import { onMount } from "svelte";

  
  interface Props {
    altText: any;
    caption?: string;
    className?: string;
    srcURL: any;
    /**
   * Optional space to move caption in from side of video.
   */
    captionSpace?: number;
  }

  let {
    altText,
    caption = "",
    className = "",
    srcURL,
    captionSpace = 0
  }: Props = $props();

  let image = $state();

  let captionSpaceComponent = captionSpace
    ? `--image-caption-space--component: ${captionSpace};`
    : "";

  let captionStyle = `${captionSpaceComponent}`;

  let src = $derived(srcURL);

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
