<script lang="ts">
  import { onMount } from "svelte";
  import { fadeInOnIntersect } from "./actions/fate-in-on-intersect.js";

  
  interface Props {
    text?: string;
    className?: string;
    /**
   * CSS transition-duration property for text to fade from 0 to 1 opacity.
   */
    fadeInDuration?: string;
  }

  let { text = "", className = "", fadeInDuration = "1500ms" }: Props = $props();

  let mounted = $state(false);

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
