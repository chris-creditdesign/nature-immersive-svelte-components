<script>
  import { Box } from "creditdesign-svelte-components";
  import SeriesArticleNav from "./index.svelte";

  export let seriesArticleNavData;
  export let message;
  export let expandedMessage;

  let handleUpdate = () => {
    console.log("Update");
  };
</script>

<style>
  .container {
    font-family: var(--sans-serif-font);
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
    <SeriesArticleNav
      {seriesArticleNavData}
      {message}
      {expandedMessage}
      on:update={handleUpdate} />
  </div>
</Box>
