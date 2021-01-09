<script>
  import CardSideImage from "./index.svelte";

  import cardData from "../preview-content/card-data";
</script>

<CardSideImage {cardData}>
  <p>This is some nested content.</p>
</CardSideImage>
