<script>
  import { onMount } from "svelte";
  import Image from "../Image/index.svelte";
  export let className = "";
  export let steps;

  let textContainer;
  let intersectingStep = 0;
  let mounted = false;

  // '-50%' intercet when the item is half way up the screen
  let options = {
    root: null,
    rootMargin: "-50% 0px -50% 0px"
  };

  onMount(() => {
    mounted = true;

    const steps = Array.from(textContainer.querySelectorAll(".step__content"));
    const onEnterScreen = (entries, observer) => {
      entries
        .filter(entry => entry.isIntersecting)
        .forEach(entry => {
          let { index } = entry.target.dataset;

          intersectingStep = parseInt(index, 10);
        });
    };

    const observer = new IntersectionObserver(onEnterScreen, options);

    steps.forEach(step => observer.observe(step));
  });
</script>

<style>
  :global(.image-container) {
    display: none;
  }

  @media screen and (min-width: 600px) {
    .static-image-container {
      position: relative;
      display: grid;
      width: 100%;
      grid-template-columns: 2fr var(--s3) 1fr;
    }

    .text-container {
      grid-column: 1 / span 1;
      grid-row: 1;
    }

    .image-container {
      display: block;
      grid-column: 3 / span 1;
      grid-row: 1;
    }

    .image-container__content {
      position: sticky;
      position: -webkit-sticky;
      top: 10px;
      width: 100%;
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

<div class={`static-image-container ${className}`}>
  <div class="text-container" bind:this={textContainer}>
    <slot />
  </div>

  {#if mounted}
    <div class="image-container">
      <div class="image-container__content">
        <Image
          altText={steps[intersectingStep]['altText']}
          caption={steps[intersectingStep]['caption']}
          srcURL={steps[intersectingStep]['srcURL'].replace(/-small/, '')} />
      </div>
    </div>
  {/if}
</div>
