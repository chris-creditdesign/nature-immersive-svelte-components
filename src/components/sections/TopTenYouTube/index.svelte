<script>
  import { Sidebar } from "creditdesign-svelte-components";
  import LiteYouTube from "../../videos/LiteYouTube/index.svelte";
  import VideoButton from "./components/SelectVideoButton/index.svelte";

  export let videoData = [];

  let currentVideoIndex = 0;
  let youTubeContainer;
  let playVideoRequested = false;
  $: videoId = videoData[currentVideoIndex].videoId;
  $: title = videoData[currentVideoIndex].title;
  $: authors = videoData[currentVideoIndex].authors;
  $: institution = videoData[currentVideoIndex].institution;

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
  sidebarSpace="var(--s1)"
  alignItems="flex-start"
>
  <svelte:fragment slot="main-content">
    <div
      class="stack font-family:sans-serif"
      data-theme="invert"
      style="--stack-space--component: 0;"
    >
      <LiteYouTube
        bind:youTubeContainer
        {videoId}
        {title}
        {playVideoRequested}
      />
      <div class="stack box">
        <h2 class="font-size:big-1">{title}</h2>
        <ul>
          {#each authors as author}
            <li>{author}</li>
          {/each}
        </ul>
        <p>{institution}</p>
      </div>
    </div>
  </svelte:fragment>

  <svelte:fragment slot="sidebar">
    <ol
      class="grid side-menu box"
      style="--grid-min-width--component: 20ch; --grid-column-space--component: var(--s0); --grid-row-space--component: var(--s0); --box-space--component: var(--s0)"
    >
      {#each videoData as { videoId, title }, i}
        <li>
          <VideoButton on:message={requestVideo} {title} {videoId} index={i} />
        </li>
      {/each}
    </ol>
  </svelte:fragment>
</Sidebar>
