<script>
  import CardBox from "./index.svelte";
  import CardImageBelowBox from "../CardImageBelowBox/index.svelte";
  import CardSideImageBox from "../CardSideImageBox/index.svelte";
  import cardData from "../preview-content/card-data.js";

  export let slot = "CardBox";

  let components = {
    CardBox: CardBox,
    CardImageBelowBox: CardImageBelowBox,
    CardSideImageBox: CardSideImageBox,
  };
</script>

<CardBox {cardData}>
  <svelte:component this="{components[slot]}" {cardData} theme="" />
</CardBox>
