<script>
  import { Sidebar } from "creditdesign-svelte-components";
  import LiteYouTube from "../../../videos/LiteYouTube/index.svelte";
  import VideoButton from "../SelectVideoButton/index.svelte";
  import VideoInfo from "../VideoInfo/index.svelte";

  export let videoDataArray = [];

  let currentVideoIndex = 0;
  let youTubeContainer;
  let playVideoRequested = false;
  $: videoData = videoDataArray[currentVideoIndex];
  $: videoId = videoData.videoId;
  $: title = videoData.title;

  let requestVideo = (event) => {
    if (event.type === "message") {
      let { detail } = event;
      playVideoRequested = true;
      currentVideoIndex = detail.index;
    }

    youTubeContainer.focus();
  };
</script>

<style>
  .side-menu {
    background-color: var(--color--white-1);
  }

  ol.grid {
    list-style: none;
    /* padding: 0; */
    margin: 0;
    max-width: none;
  }
</style>

<Sidebar
  sidebarOnRight={true}
  sidebarWidth="var(--measure)"
  sidebarContentMinWidth="50%"
  sidebarSpace="0px"
  alignItems="flex-start"
>
  <svelte:fragment slot="main-content">
    <div
      class="stack box font-family:sans-serif"
      data-theme="invert"
      style="--stack-space--component:  var(--s1);"
    >
      <LiteYouTube
        bind:youTubeContainer
        {videoId}
        {title}
        {playVideoRequested}
      />
      <VideoInfo {videoData} />
    </div>
  </svelte:fragment>

  <svelte:fragment slot="sidebar">
    <ol
      class="grid side-menu box"
      style="--grid-min-width--component: 20ch; --grid-column-space--component: var(--s1); --grid-row-space--component: var(--s1); --box-space--component: var(--s1)"
    >
      {#each videoDataArray as { videoId, title }, i}
        <li>
          <VideoButton on:message={requestVideo} {title} {videoId} index={i} />
        </li>
      {/each}
    </ol>
  </svelte:fragment>
</Sidebar>
