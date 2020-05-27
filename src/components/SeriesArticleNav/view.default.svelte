<script>
  import SeriesArticleNav from "./index.svelte";

  export let className;
  export let seriesArticleNavData;
  export let parentDoi;
  export let prefersReducedMotion;
</script>

<SeriesArticleNav
  {className}
  {seriesArticleNavData}
  {parentDoi}
  {prefersReducedMotion} />
