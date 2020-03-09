<script>
  import { onMount } from "svelte";
  import Image from "../Image/index.svelte";
  export let className = "";
  export let steps;

  let textContainer;
  let intersectingStep = 0;
  let mounted = false;

  onMount(() => {
    mounted = true;

    // '-50%' intercet when the item is half way up the screen
    let options = {
      root: null,
      rootMargin: "-50% 0px -50% 0px"
    };

    const steps = Array.from(textContainer.querySelectorAll(".step__content"));
    const onEnterScreen = (entries, observer) => {
      entries
        .filter(entry => entry.isIntersecting)
        .forEach(entry => {
          const { id } = entry.target;
          const { isIntersecting } = entry;

          intersectingStep = parseInt(id, 10);
        });
    };

    const observer = new IntersectionObserver(onEnterScreen, options);

    steps.forEach(step => observer.observe(step));

    // return () => observer.unobserve(onEnterScreen);
  });
</script>

<style>
  :global(.image-container) {
    display: none;
  }

  @media screen and (min-width: 600px) {
    .static-image-container {
      width: 100%;
      display: grid;
      grid-template-columns: 2fr var(--s3) 1fr;
      position: relative;
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
      width: 100%;
      margin: 0;
      position: sticky;
      position: -webkit-sticky;
      top: 10px;
    }

    /* Content contained within the 'slot' */
    :global(.step) {
      min-height: 100vh;
      margin-bottom: var(--s4);
      display: flex;
      align-items: center;
    }

    /* Don't show the images if the screen is wide enough and processed */
    /* Keep them available for screen readers */
    :global(.step__image) {
      opacity: 0;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      height: 1px;
      width: 1px;
      margin: -1px !important;
      padding: 0 !important;
      border: 0 !important;
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
