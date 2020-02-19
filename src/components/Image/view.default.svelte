<script>
  import Image from "./index.svelte";

  export let className = "";
  export let altText;
  export let caption;
  export let srcURL;
  export let captionSpace;
</script>

<Image {className} {altText} {caption} {srcURL} {captionSpace} />
