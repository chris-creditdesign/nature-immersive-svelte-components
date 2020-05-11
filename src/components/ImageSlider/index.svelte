<script>
  import { onMount } from "svelte";
  import Interactive from "./interactive.svelte";
  import Static from "./static.svelte";

  export let className = "";
  export let ratio;
  export let imageData;
  export let message;

  let mounted = false;
  let componentMap = new Map();
  componentMap.set(true, Interactive);
  componentMap.set(false, Static);

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:component
  this={componentMap.get(mounted)}
  {className}
  {ratio}
  {imageData}
  {message}
  bind:mounted />
