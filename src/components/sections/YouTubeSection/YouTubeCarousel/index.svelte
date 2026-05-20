<script lang="ts">
  import { Sidebar } from "creditdesign-svelte-components";
  import LiteYouTube from "../../../videos/LiteYouTube/index.svelte";
  import VideoButton from "../SelectVideoButton/index.svelte";
  import VideoInfo from "../VideoInfo/index.svelte";

  interface Props {
    videoDataArray?: any;
    headerLevel?: string;
    headlineFontSize?: string;
    videoListLabel?: string;
  }

  let {
    videoDataArray = [],
    headerLevel = "h2",
    headlineFontSize = "big-1",
    videoListLabel = "Choose a video from the following list to load in the above player."
  }: Props = $props();

  let currentVideoIndex = $state(0);
  let youTubeContainer = $state();
  let playVideoRequested = $state(false);
  let videoData = $derived(videoDataArray[currentVideoIndex]);
  let videoId = $derived(videoData.videoId);
  let title = $derived(videoData.title);

  let requestVideo = (detail: { index: number }) => {
    playVideoRequested = true;
    currentVideoIndex = detail.index;
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
  <div
      class="stack box font-family:sans-serif"
      slot="main-content"
      data-theme="invert"
      style="--stack-space--component:  var(--s1);"
    >
      <div
        role="region"
        aria-live="polite"
        aria-atomic="true"
        class="visually-hidden"
      >
        <p>
          Video {currentVideoIndex + 1} of {videoDataArray.length} selected.
        </p>
      </div>

      <LiteYouTube
        bind:youTubeContainer
        {videoId}
        {title}
        {playVideoRequested}
        autoplay={false}
      />
      <VideoInfo {videoData} {headerLevel} {headlineFontSize} />
    </div>

  {#snippet sidebar()}
  
      <div>
        <p id="video-selection-list-label" class="visually-hidden">
          {videoListLabel}
        </p>
        <ol
          class="grid side-menu box"
          aria-labelledby="video-selection-list-label"
          style="--grid-min-width--component: 20ch; --grid-column-space--component: var(--s1); --grid-row-space--component: var(--s1); --box-space--component: var(--s1)"
        >
          {#each videoDataArray as { videoId, title }, i}
            <li>
              <VideoButton
                onmessage={requestVideo}
                {title}
                {videoId}
                index={i}
                {currentVideoIndex}
              />
            </li>
          {/each}
        </ol>
      </div>
    
  {/snippet}
</Sidebar>
