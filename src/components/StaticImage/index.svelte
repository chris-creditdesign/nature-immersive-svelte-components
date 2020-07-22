<script>
  import { onMount } from "svelte";
  import Image from "../Image/index.svelte";

  export let className = "";
  export let justifyContent = "";
  export let textWidth = "";
  export let imageWidth = "";
  export let gridGap = "";
  export let rootMargin = "-50% 0px -50% 0px";
  export let steps;

  let justifyContentComponent = justifyContent
    ? `--static-image-justify-content--component: ${justifyContent};`
    : "";

  let textWidthComponent = textWidth
    ? `--static-image-text-width--component: ${textWidth};`
    : "";
  let imageWidthComponent = imageWidth
    ? `--static-image-image-width--component: ${imageWidth};`
    : "";
  let gridGapComponent = gridGap
    ? `--static-image-grid-gap--component: ${gridGap};`
    : "";

  let style = `${justifyContentComponent} ${textWidthComponent} ${imageWidthComponent} ${gridGapComponent}`;

  let textContainer;
  let intersectingStep = 0;
  let mounted = false;

  // '-50%' intercept when the item is half way up the screen
  let options = {
    root: null,
    rootMargin,
  };

  onMount(() => {
    mounted = true;

    const renderedSteps = Array.from(
      textContainer.querySelectorAll(".step__content")
    );
    const onEnterScreen = (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          let { index } = entry.target.dataset;

          intersectingStep = parseInt(index, 10);
        });
    };

    const observer = new IntersectionObserver(onEnterScreen, options);

    renderedSteps.forEach((step) => observer.observe(step));
  });
</script>

<style>
  :global(:root) {
    --static-image-justify-content--global: center;
    --static-image-text-width--global: 2fr;
    --static-image-image-width--global: 1fr;
    --static-image-grid-gap--global: var(--s3);
  }

  :global(.image-container) {
    display: none;

    --static-image-grid-gap--component: initial;
    --static-image-text-width--component: initial;
    --static-image-image-width--component: initial;
    --static-image-grid-gap--component: initial;
  }

  @media screen and (min-width: 600px) {
    .static-image-container {
      position: relative;
      display: grid;
      width: 100%;
      grid-gap: var(
        --static-image-grid-gap--component,
        var(--static-image-grid-gap--global, var(--s3, 1rem))
      );
      grid-template-columns:
        var(
          --static-image-text-width--component,
          var(--static-image-text-width--global, 2fr)
        )
        var(
          --static-image-image-width--component,
          var(--static-image-image-width--global, 1fr)
        );
    }

    .text-container {
      grid-column: 1 / 2;
      grid-row: 1;
    }

    .image-container {
      display: block;
      grid-column: 2 / 3;
      grid-row: 1;
    }

    .image-container__content {
      position: sticky;
      position: -webkit-sticky;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: var(
        --static-image-justify-content--component,
        var(--static-image-justify-content--global, center)
      );
      width: 100%;
      height: 100vh;
      margin: 0;
    }

    /* Content contained within the 'slot' */
    :global(.step) {
      display: flex;
      align-items: center;
      min-height: 100vh;
      margin-bottom: var(--s4);
    }

    /* Don't show the images if the screen is wide enough and processed */

    /* Keep them available for screen readers */
    :global(.step__image) {
      width: 1px;
      height: 1px;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0 !important;
      opacity: 0;
    }
  }
</style>

<div class="{`static-image-container ${className}`}" {style}>
  <div class="text-container" bind:this="{textContainer}">
    <slot />
  </div>

  {#if mounted}
    <div class="image-container">
      <div class="image-container__content">
        <Image
          altText="{steps[intersectingStep].altText}"
          caption="{steps[intersectingStep].caption}"
          srcURL="{steps[intersectingStep].srcURL.replace(/-small/, '')}"
        />
      </div>
    </div>
  {/if}
</div>
