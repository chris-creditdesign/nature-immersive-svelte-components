<script>
  import LayoutStack from "../LayoutStack/index.svelte";
  import LayoutBox from "../LayoutBox/index.svelte";
  import Card from "../Card/index.svelte";

  export let className = "";
  export let cardData;
  export let stackSpace = "var(--s-1)";
</script>

<div class={`card ${className}`}>
  <LayoutBox className={'invert'}>
    <Card {cardData} {stackSpace} />
  </LayoutBox>
</div>
