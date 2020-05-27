<script>
  import SeriesArticleNav from "./index.svelte";

  export let className;
  export let seriesArticleNavData;
  export let parentDoi;
</script>

<SeriesArticleNav {className} {seriesArticleNavData} {parentDoi} />
