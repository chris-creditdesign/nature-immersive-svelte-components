<script>
  import { Sidebar } from "creditdesign-svelte-components";
  import LiteYouTube from "../../../videos/LiteYouTube/index.svelte";
  import VideoInfo from "../VideoInfo/index.svelte";

  export let videoData;
  export let headerLevel = "h2";
  export let headlineFontSize = "big-1";
  export let sidebarOnRight = false;
</script>

<style>
  :global(.video-card) {
    background-color: var(--color--white-1);
  }
</style>

<Sidebar
  className="box video-card"
  sidebarWidth="30ch"
  sidebarContentMinWidth="50%"
  {sidebarOnRight}
  sidebarSpace="var(--s0)"
>
  <svelte:fragment slot="sidebar">
    <VideoInfo {videoData} {headerLevel} {headlineFontSize} />
  </svelte:fragment>

  <svelte:fragment slot="main-content">
    <LiteYouTube title={videoData.title} videoId={videoData.videoId} />
  </svelte:fragment>
</Sidebar>
