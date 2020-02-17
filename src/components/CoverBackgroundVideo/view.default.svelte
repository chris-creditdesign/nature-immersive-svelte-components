<script>
  import CoverBackgroundImage from "./index.svelte";
  import Heading from "../Heading/index.svelte";
  import Style from "../Style/index.svelte";
  import Light from "../Style/light.svelte";
  import Dark from "../Style/dark.svelte";

  export let srcURL;
  export let alt;
  export let coverSpace;
  export let coverHeight;
  export let articleData;

  let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
</script>

<Style />

{#if dark}
  <Dark />
{:else}
  <Light />
{/if}

<CoverBackgroundImage {srcURL} {alt} {coverSpace} {coverHeight}>
  <Heading className={'centered'} {articleData} />
</CoverBackgroundImage>
