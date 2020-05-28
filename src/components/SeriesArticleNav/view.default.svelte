<script>
  import { Box } from "creditdesign-svelte-components";
  import SeriesArticleNav from "./index.svelte";

  export let seriesArticleNavData;
  export let prefersReducedMotion;

  let handleUpdate = () => {
    console.log("Update");
  };
</script>

<style>
  :global(.container) {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    padding: var(--s0);
    background-color: var(--white-1);
    border-radius: 5px;
  }
</style>

<Box>
  <SeriesArticleNav
    className="container"
    {seriesArticleNavData}
    {prefersReducedMotion}
    on:update={handleUpdate} />
</Box>
