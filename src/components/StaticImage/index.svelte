<script>
  import { onMount } from "svelte";
  import Image from "../Image/index.svelte";
  export let className = "";
  export let steps;

  let textContainer;
  let intersectingStep = 0;

  let options = {
    root: null, // The viewport is the root
    rootMargin: "0px 0px 0px 0px" // No margins
  };

  onMount(() => {
    const steps = Array.from(textContainer.querySelectorAll(".step__content"));
    const onEnterScreen = entries => {
      entries
        .filter(entry => entry.isIntersecting)
        .forEach(entry => {
          const { id } = entry.target;
          const { isIntersecting } = entry;

          intersectingStep = parseInt(id, 10);
          console.log(`From parent: ${id} : ${isIntersecting}`);
        });
    };

    const observer = new IntersectionObserver(onEnterScreen, options);

    steps.forEach(step => observer.observe(step));

    // return () => observer.unobserve(onEnterScreen);
  });
</script>

<style>
  .image-container {
    display: none;
  }

  @media screen and (min-width: 800px) {
    /* media query */
    .static-image-container {
      width: 100%;
      display: grid;
      grid-template-columns: 2fr 1fr 2fr;
      position: relative;
    }
    .step {
      height: 100vh;
      display: flex;
      align-items: center;
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

    /* Don't show the images if the screen is wide enough and processed */
    /* Keep them available for screen readers */
    .step__image {
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
    {#each steps as { text, altText, caption, srcURL }, i}
      <div class="step">
        <div class="step__content" id={i}>
          <div class="step__image">
            <Image {altText} {caption} {srcURL} />
          </div>
          <p>
            {@html text}
          </p>
        </div>
      </div>
    {/each}
  </div>

  <div class="image-container">
    <div class="image-container__content">
      <Image
        altText={steps[intersectingStep]['altText']}
        caption={steps[intersectingStep]['caption']}
        srcURL={steps[intersectingStep]['srcURL'].replace(/-small/, '')} />
    </div>
  </div>
</div>
