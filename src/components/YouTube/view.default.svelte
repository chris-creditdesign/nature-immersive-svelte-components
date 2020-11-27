<script>
  import YouTube from "./index.svelte";

  export let videoId;
  export let videoRatioHeight;
  export let videoRatioWidth;
</script>

<YouTube {videoId} {videoRatioHeight} {videoRatioWidth} />
