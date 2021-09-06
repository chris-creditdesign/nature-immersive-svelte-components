<script>
  import { onMount } from "svelte";
  import { fadeInOnIntersect } from "./actions/fate-in-on-intersect.js";

  export let text = "";
  export let className = "";

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<style>
  p {
    padding: 0;
    margin: 0;
    transition: opacity ease-in 1500ms;
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

<p class={className} class:text-opacity:zero={mounted} use:fadeInOnIntersect>
  {text}
</p>
