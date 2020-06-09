<script>
  import { Box } from "creditdesign-svelte-components";
  import SeriesArticleNav from "./index.svelte";

  export let seriesArticleNavData;
  export let message;
  export let expandedMessage;
  export let className;

  let handleUpdate = () => {
    console.log("Update");
  };
</script>

<SeriesArticleNav
  {seriesArticleNavData}
  {message}
  {expandedMessage}
  {className}
  on:update={handleUpdate} />
