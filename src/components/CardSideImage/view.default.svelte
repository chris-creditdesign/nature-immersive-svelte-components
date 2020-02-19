<script>
  import CardSideImage from "./index.svelte";

  export let className;
  export let cardData;
  export let stackSpace;
  export let gridSpace;
</script>

<CardSideImage {className} {cardData} {stackSpace} {gridSpace} />
