<script>
  import CardHeadline from "./index.svelte";

  export let id;
  export let headerLevel;
  export let cardData;
  export let headlineFontSize;
</script>

<CardHeadline {id} {headerLevel} {cardData} {headlineFontSize}>
  This is the headline
</CardHeadline>
