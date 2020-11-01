<script>
  import Menu from "./index.svelte";
  import Heading from "../Heading/index.svelte";

  export let articleData;

  let headingArticleData = {
    author: "Author Name",
    headline: "Headline headline headline",
    photographer: "Photographer Name",
    publishedAt: 1593734400,
    publishedAtString: "2020-07-03",
    stand: "Standfirst standfirst standfirst.",
  };
</script>

<Menu {articleData}>
  <Heading articleData="{headingArticleData}" />
</Menu>
