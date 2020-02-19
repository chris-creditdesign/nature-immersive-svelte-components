<script>
  import CardSideImageBox from "./index.svelte";

  export let className;
  export let cardData;
  export let stackSpace;
  export let gridSpace;
</script>

<CardSideImageBox {className} {cardData} {stackSpace} {gridSpace} />
