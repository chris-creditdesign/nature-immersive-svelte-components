<script>
  import CardBox from "./index.svelte";

  export let className;
  export let cardData;
  export let stackSpace;
</script>

<CardBox {className} {cardData} {stackSpace} />
