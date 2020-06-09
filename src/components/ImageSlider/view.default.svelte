<script>
  import { onMount } from "svelte";
  import ImageSlider from "./index.svelte";

  export let className = "";
  export let ratio;
  export let imageData;
  export let message;
  export let amountToReveal;

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<ImageSlider
  {className}
  {ratio}
  {imageData}
  {message}
  {amountToReveal}
  bind:mounted />
