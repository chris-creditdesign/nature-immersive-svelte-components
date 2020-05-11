<script>
  import Interactive from "./interactive.svelte";
  import Static from "./static.svelte";

  export let mounted = false;
  export let className = "";
  export let ratio;
  export let imageData;
  export let message;

  let componentMap = new Map();
  componentMap.set(true, Interactive);
  componentMap.set(false, Static);
</script>

<svelte:component
  this={componentMap.get(mounted)}
  {className}
  {ratio}
  {imageData}
  {message}
  bind:mounted />
