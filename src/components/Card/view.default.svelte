<script>
  import Card from "./index.svelte";

  export let className;
  export let stackSpace;
  export let cardData;
</script>

<Card {className} {stackSpace} {cardData} />
