<script>
  import { Box } from "creditdesign-svelte-components";
  import SeriesArticleNav from "./index.svelte";

  export let seriesArticleNavData;

  let handleUpdate = () => {
    console.log("Update");
  };
</script>

<style>
  .container {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    padding: var(--s0);
    background-color: var(--white-1);
    border-radius: 5px;
  }
</style>

<Box>
  <div class="container">
    <SeriesArticleNav {seriesArticleNavData} on:update={handleUpdate} />
  </div>
</Box>
