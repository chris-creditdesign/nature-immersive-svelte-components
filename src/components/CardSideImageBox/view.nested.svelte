<script>
  import CardBox from "../CardBox/index.svelte";
  import CardImageBelowBox from "../CardImageBelowBox/index.svelte";
  import CardSideImageBox from "./index.svelte";
  import cardData from "../preview-content/card-data.js";

  export let slot = "CardBox";

  let components = {
    CardBox: CardBox,
    CardImageBelowBox: CardImageBelowBox,
    CardSideImageBox: CardSideImageBox,
  };
</script>

<CardSideImageBox {cardData}>
  <svelte:component this="{components[slot]}" {cardData} theme="" />
</CardSideImageBox>
