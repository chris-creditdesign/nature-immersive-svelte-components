<script>
  import { onMount } from "svelte";
  import { fadeInOnIntersect } from "./actions/fate-in-on-intersect.js";

  export let text = "";
  export let className = "";
  /**
   * CSS transition-duration property for text to fade from 0 to 1 opacity.
   */
  export let fadeInDuration = "1500ms";

  let mounted = false;

  let style = `transition-duration: ${fadeInDuration};`;

  onMount(() => {
    mounted = true;
  });
</script>

<style>
  p {
    transition-timing-function: ease-in;
    transition-property: opacity;
  }

  .text-opacity\:zero {
    opacity: 0;
  }

  @media (prefers-reduced-motion) {
    .text-opacity\:zero {
      opacity: 1;
    }
  }
</style>

<p
  class={className}
  {style}
  class:text-opacity:zero={mounted}
  use:fadeInOnIntersect
>
  {@html text}
</p>
