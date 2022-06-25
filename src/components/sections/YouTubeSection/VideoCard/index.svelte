<script>
  import LiteYouTube from "../../../videos/LiteYouTube/index.svelte";
  import VideoInfo from "../VideoInfo/index.svelte";

  export let videoData;
  export let headerLevel = "h2";
  export let headlineFontSize = "big-1";
  export let videoOnLeft = false;
</script>

<style>
  .video-card {
    background-color: var(--color--white-1);
    display: flex;
    flex-wrap: wrap;
    gap: var(--s0);
  }

  .video-card.row-reverse {
    flex-direction: row-reverse;
  }

  :global(.video-card > *:first-child) {
    flex-basis: 30ch;
    flex-grow: 1;
  }

  :global(.video-card > *:last-child) {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(50% - var(--s0));
  }
</style>

<div class="video-card box" class:row-reverse={videoOnLeft}>
  <VideoInfo {videoData} {headerLevel} {headlineFontSize} />

  <LiteYouTube title={videoData.title} videoId={videoData.videoId} />
</div>
