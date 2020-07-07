<script>
  import Interactive from "./interactive.svelte";
  import Static from "./static.svelte";

  export let mounted = false;
  export let className = "";
  export let ratio = 0.5625;
  export let imageData;
  export let message = "Use the slider to reveal the hidden image:";
  export let amountToReveal = 0;

  let componentMap = new Map();
  componentMap.set(true, Interactive);
  componentMap.set(false, Static);
</script>

<svelte:component
  this="{componentMap.get(mounted)}"
  {className}
  {ratio}
  {imageData}
  {message}
  {amountToReveal}
  bind:mounted
/>
