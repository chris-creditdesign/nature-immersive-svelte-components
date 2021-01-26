<script>
  import Menu from "./index.svelte";
  import Heading from "../Heading/index.svelte";

  export let articleData;

  let headingData = {
    author: "Author Name",
    headline: "Headline headline headline",
    photographer: "Photographer Name",
    publishedAt: 1593734400,
    publishedAtString: "2020-07-03",
    stand: "Standfirst standfirst standfirst.",
  };
</script>

<style>
  .container {
    height: 50vh;
  }
</style>

<Menu {articleData}>
  <div slot="heading">
    <Heading articleData="{headingData}" />
  </div>

  <div class="container">
    <a href="https://www.nature.come">Next focusable item...</a>
  </div>
</Menu>
