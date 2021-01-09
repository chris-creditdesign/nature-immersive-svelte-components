<script>
  import CardBox from "../CardBox/index.svelte";
  import CardImageBelowBox from "./index.svelte";
  import CardSideImageBox from "../CardSideImageBox/index.svelte";
  import cardData from "../preview-content/card-data.js";

  export let slot = "CardBox";

  let components = {
    CardBox: CardBox,
    CardImageBelowBox: CardImageBelowBox,
    CardSideImageBox: CardSideImageBox,
  };
</script>

<CardImageBelowBox {cardData}>
  <svelte:component this="{components[slot]}" {cardData} theme="" />
</CardImageBelowBox>
