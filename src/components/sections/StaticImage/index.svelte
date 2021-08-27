<script>
  /**
   * _Please use the 'Open canvas in new tab' button to view this component in Storybook._
   *
   * The `steps` prop must be an array of objects each containing `altText`, `caption`, `srcURL` properties. These are used to build the static images.
   *
   * The scrolling text content is created via a separate component which is passed in as a `slot` to the `StaticImage` component.
   *
   * The child component must create html elements with a class of html elements with the class `.step`. CSS will be applied to make these at least 100vh tall and to vertially center the content.
   *
   * Inside there should be a html elemnt with the class of `.step__content` and `data-index` attribute. This is used by the component's javascript to trigger the changes in the static image.
   *
   * If there is an image present, it should be given a class of `.step__image` or contained within an element with that class. This will apply a 'vissually hidden' style when the screen is wider than 600px.
   *
   * ```
   * <div class="step">
   *     <div class="step__content" data-index="1">
   *         <div class="step__image">
   *             <img />
   *         </div>
   *         <p>...</p>
   *     </div>
   * </div>
   * ```
   *
   * @component
   */

  import { onMount } from "svelte";
  import Image from "../../Image/index.svelte";

  export let className = "";
  export let gridGap = "";
  export let imageWidth = "";
  export let justifyContent = "";
  export let placeImageOnLeft = false;
  /* '-50%' intercept when the item is half way up the screen */
  export let rootMargin = "-50% 0px -50% 0px";
  export let steps;
  export let textWidth = "";

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

  let imagePlacment = placeImageOnLeft
    ? `--static-image-text-column--component: 2 / 3; --static-image-image-column--component: 1 / 2;`
    : "";

  let style = `${justifyContentComponent} ${textWidthComponent} ${imageWidthComponent} ${gridGapComponent} ${imagePlacment}`;

  let textContainer;
  let intersectingStep = 0;
  let mounted = false;

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

<div class={`static-image-container ${className}`} {style}>
  <div class="text-container" bind:this={textContainer}>
    <slot />
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
