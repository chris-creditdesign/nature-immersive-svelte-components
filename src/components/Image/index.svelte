<script>
  import { onMount } from "svelte";

  export let altText;
  export let caption;
  export let className = "";
  export let srcURL;

  let image;

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
  img {
    display: block;
  }

  figcaption {
    margin-top: var(--s-3);
  }
</style>

<figure class="{`${className}`}">
  <img {src} alt="{altText}" bind:this="{image}" loading="lazy" />
  {#if caption}
    <figcaption class="font-size:small font-family:sans-serif">
      {@html caption}
    </figcaption>
  {/if}
</figure>
