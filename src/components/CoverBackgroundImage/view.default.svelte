<script>
  import CoverBackgroundImage from "./index.svelte";
  import Heading from "../Heading/index.svelte";

  export let srcURL;
  export let alt;
  export let coverSpace;
  export let coverHeight;
  export let articleData;
</script>

<CoverBackgroundImage {srcURL} {alt} {coverSpace} {coverHeight}>
  <Heading className={'centered'} {articleData} />
</CoverBackgroundImage>
