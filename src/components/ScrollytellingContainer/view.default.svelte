<script>
  import ScrollytellingContainer from "./index.svelte";
  import TestGraphic from "./test-graphic.svelte";

  export let scrollytellingSteps;
  export let className;
</script>

<style>
  .graphic {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }

  :global(.scrollytelling-step__content p) {
    padding: var(--s-1);
    margin: 0;
    color: var(--text-color);
    background-color: var(--background-color);
  }
</style>

<ScrollytellingContainer {scrollytellingSteps} {className} let:intersectingStep>

  <div slot="graphic" class="graphic">
    <TestGraphic {scrollytellingSteps} {intersectingStep} />
  </div>

</ScrollytellingContainer>
