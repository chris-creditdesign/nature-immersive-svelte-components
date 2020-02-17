<script>
  import Image from "./index.svelte";
  import Style from "../Style/index.svelte";
  import Light from "../Style/light.svelte";
  import Dark from "../Style/dark.svelte";

  export let className = "";
  export let altText;
  export let caption;
  export let srcURL;
  export let captionSpace;

  let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
</script>

<Style />

{#if dark}
  <Dark />
{:else}
  <Light />
{/if}

<Image {className} {altText} {caption} {srcURL} {captionSpace} />
