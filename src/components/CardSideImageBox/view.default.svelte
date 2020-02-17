<script>
  import CardSideImageBox from "./index.svelte";
  import Style from "../Style/index.svelte";
  import Light from "../Style/light.svelte";
  import Dark from "../Style/dark.svelte";

  export let className;
  export let cardData;
  export let stackSpace;
  export let gridSpace;

  let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
</script>

<Style />

{#if dark}
  <Dark />
{:else}
  <Light />
{/if}

<CardSideImageBox {className} {cardData} {stackSpace} {gridSpace} />
