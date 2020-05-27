<script>
  import SeriesArticleNav from "./index.svelte";

  export let className;
  export let seriesArticleNavData;
</script>

<style>
  .container {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<div class="container">
  <SeriesArticleNav {className} {seriesArticleNavData} />
</div>
