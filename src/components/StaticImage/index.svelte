<script>
  import { onMount } from "svelte";
  import Image from "../Image/index.svelte";
  export let className = "";
  export let steps;

  let textContainer;
  let intersectingStep = 0;
  let mounted = false;

  let options = {
    root: null, // The viewport is the root
    rootMargin: "0px 0px 0px 0px" // No margins
  };

  onMount(() => {
    mounted = true;
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
      grid-template-columns: 1fr var(--s3) 1fr;
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
