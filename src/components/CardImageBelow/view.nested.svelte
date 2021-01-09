<script>
  import CardImageBelow from "./index.svelte";
  import cardData from "../preview-content/card-data.js";
</script>

<CardImageBelow {cardData}>
  <p>This is some nested content</p>
</CardImageBelow>
