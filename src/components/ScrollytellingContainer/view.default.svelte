<script>
  import { Center } from "creditdesign-svelte-components";
  import ScrollytellingContainer from "./index.svelte";
  import TestGraphic from "./test-graphic.svelte";

  export let scrollytellingSteps;

  let intToLetter = ["a", "b", "c", "d", "e"];
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
    background-color: var(--white-0);
  }
</style>

<ScrollytellingContainer {scrollytellingSteps} let:intersectingStep>

  <div slot="graphic" class="graphic">
    <TestGraphic {scrollytellingSteps} {intersectingStep} />
  </div>

</ScrollytellingContainer>
