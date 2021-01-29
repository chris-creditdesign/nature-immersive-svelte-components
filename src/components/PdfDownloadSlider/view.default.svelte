<script>
  import PdfDownloadSlider from "./index.svelte";

  export let cardData;
  export let articleData;
  export let wideEnough;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
</style>

<div class="container">
  <PdfDownloadSlider
    cardData="{cardData}"
    articleData="{articleData}"
    wideEnough="{wideEnough}"
  />
  <a href="https://www.nature.com">Next focusable item</a>
</div>
