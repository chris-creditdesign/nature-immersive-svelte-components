<script>
  import CoverBackgroundImage from "./index.svelte";
  import Heading from "../Heading/index.svelte";
  import articleData from "../preview-content/article-data.js";

  export let srcURL;
  export let alt;
  export let coverSpace;
  export let coverHeight;
</script>

<CoverBackgroundImage {srcURL} {alt} {coverSpace} {coverHeight}>
  <Heading className="{'cover__centered'}" {articleData} />
</CoverBackgroundImage>
