<script>
  import { onMount } from "svelte";
  import { Box, Center, Cover } from "creditdesign-svelte-components";

  export let className = "";
  export let scrollytellingSteps;

  let stepContainer;
  let intersectingStep = 0;

  /* '-50%' intercept when the item is half way up the screen */
  let options = {
    root: null,
    rootMargin: "-50% 0px -50% 0px"
  };

  onMount(() => {
    let steps = Array.from(
      stepContainer.querySelectorAll(".scrollytelling-step__content")
    );

    let onEnterScreen = (entries, observer) => {
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
  :global(.scrollytelling-step) {
    margin-bottom: var(--s4);
  }

  .scrollytelling-step__content {
    max-width: var(--measure-small);
    margin-right: auto;
    margin-left: auto;
  }

  .scrollytelling-container__graphic {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    left: 0;
    z-index: -999;
  }
</style>

<section class={`scrollytelling-container ${className}`}>

  <div class="scrollytelling-container__graphic">
    <slot name="graphic" {intersectingStep} />
  </div>

  <div bind:this={stepContainer}>
    {#each scrollytellingSteps as { text }, i}
      <Cover className="scrollytelling-step">
        <div class="centered scrollytelling-step__content" data-index={i}>
          {@html text}
        </div>
      </Cover>
    {/each}
  </div>

</section>
