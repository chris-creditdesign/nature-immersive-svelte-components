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
        });
    };

    const observer = new IntersectionObserver(onEnterScreen, options);

    steps.forEach(step => observer.observe(step));

    // return () => observer.unobserve(onEnterScreen);
  });
</script>

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
