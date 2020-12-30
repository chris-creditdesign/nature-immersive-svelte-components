<script>
  import CardHeadline from "./index.svelte";

  export let cardData;
  export let headerLevel;
  export let headlineFontSize;
  export let id;
</script>

<CardHeadline {cardData} {headerLevel} {headlineFontSize} {id}>
  This is the headline
</CardHeadline>
