<script>
  /**
   * _Please use the 'Open canvas in new tab' button to view this component in Storybook._
   *
   * The `steps` prop must be an array of objects each containing `altText`, `caption`, `srcURL`,
   * `stepComponent`, `stepContent`, properties.
   * The the value of `stepComponent` should be a svelte component and `stepContent` should be the
   * props to pass to that component - this render the scrolling conent
   * that will cause the corresponding image to be to be displayed.
   *
   *
   * @component
   */

  import { onMount } from "svelte";
  import Image from "../../Image/index.svelte";

  /**
   * Arbitary class name to apply to the wrapper div
   */
  export let className = "";
  /**
   * Space between the two columns
   */
  export let gridGap = "";
  /**
   * Width of the image column - either in fr or absolute values
   */
  export let imageWidth = "";
  /**
   * Width of the text column - either in fr or absolute values
   */
  export let textWidth = "";
  /**
   * The vertical placement of the static image
   */
  export let justifyContent = "";
  /**
   * If true, image column will swap to be on the left
   */
  export let imageOnLeft = false;
  /* '-50%' intercept when the item is half way up the screen */
  export let rootMargin = "-50% 0px -50% 0px";
  /**
   * Expects an array of objects containing:
   * { stepComponent, stepContent, altText, caption, srcURL }
   */
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

  let textColumnWidth =
    "var(--static-image-text-width--component, var(--static-image-text-width--global, 2fr))";
  let imageColumnWidth =
    "var(--static-image-image-width--component, var(--static-image-image-width--global, 1fr))";

  let gridTemplateColumns = imageOnLeft
    ? `${imageColumnWidth} ${textColumnWidth};`
    : `${textColumnWidth} ${imageColumnWidth};`;

  let imagePlacment = imageOnLeft
    ? `--static-image-text-column--component: 2 / 3; --static-image-image-column--component: 1 / 2;`
    : "";

  let style = `grid-template-columns: ${gridTemplateColumns}; ${justifyContentComponent} ${textWidthComponent} ${imageWidthComponent} ${gridGapComponent} ${imagePlacment}`;

  let textContainer = null;
  let intersectingStep = 0;
  let mounted = false;
  let stepImageClassName = "";

  let options = {
    root: null,
    rootMargin,
  };

  onMount(() => {
    mounted = true;
    stepImageClassName = "step__image";

    const onEnterScreen = (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          let { index } = entry.target.dataset;

          intersectingStep = parseInt(index, 10);
        });
    };

    const observer = new IntersectionObserver(onEnterScreen, options);

    const renderedSteps = Array.from(
      textContainer.querySelectorAll("[data-index]")
    );

    renderedSteps.forEach((step) => observer.observe(step));
  });
</script>

<style>
  :global(:root) {
    --static-image-justify-content--global: center;
    --static-image-text-width--global: 2fr;
    --static-image-image-width--global: 1fr;
    --static-image-grid-gap--global: var(--s3);
    --static-image-text-column--global: 1 / 2;
    --static-image-image-column--global: 2 / 3;
  }

  :global(.static-image-container) {
    --static-image-grid-gap--component: initial;
    --static-image-text-width--component: initial;
    --static-image-image-width--component: initial;
    --static-image-grid-gap--component: initial;
    --static-image-text-column--component: initial;
    --static-image-image-column--component: initial;
  }

  :global(.image-container) {
    display: none;
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
    }

    .text-container {
      grid-column: var(
        --static-image-text-column--component,
        var(--static-image-text-column--global, 1 / 2)
      );
      grid-row: 1;
    }

    .image-container {
      display: block;
      grid-column: var(
        --static-image-image-column--component,
        var(--static-image-image-column--global, 2 / 3)
      );
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

<div class:static-image-container={mounted} class={className} {style}>
  <div class:text-container={mounted} bind:this={textContainer}>
    {#each steps as { stepContent, stepComponent, altText, caption, srcURL }, i}
      <div class:step={mounted}>
        <div class:step__content={mounted} data-index={i}>
          <Image className={stepImageClassName} {altText} {caption} {srcURL} />
          <svelte:component this={stepComponent} {stepContent} />
        </div>
      </div>
    {/each}
  </div>

  {#if mounted}
    <div class="image-container">
      <div class="image-container__content">
        <Image
          altText={steps[intersectingStep].altText}
          caption={steps[intersectingStep].caption}
          srcURL={steps[intersectingStep].srcURL.replace(/-small/, "")}
        />
      </div>
    </div>
  {/if}
</div>
