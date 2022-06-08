<script>
  import { onMount } from "svelte";
  import YouTubeButton from "../../buttons/YouTubeButton/index.svelte";

  export let youTubeContainer;
  export let iframe;
  export let videoRatioHeight = 9;
  export let videoRatioWidth = 16;

  let mounted = false;

  let youtubeAPIScriptLoaded = () => {
    if (!$youTubeIframeAPIReady) {
      youTubeIframeAPIReady.set(true);
    }
  };

  onMount(() => {
    mounted = true;
  });
</script>

<style>
  .nature-youtube-container {
    background-position: center center;
    background-size: cover;
  }

  .nature-youtube-container > iframe {
    width: 100%;
    height: 100%;
  }
</style>

<svelte:head>
  {#if !$youTubeIframeAPIReady}
    <script
      type="text/javascript"
      src="https://www.youtube.com/iframe_api"
      on:load={youtubeAPIScriptLoaded}>
    </script>
  {/if}
</svelte:head>

<div
  bind:this={youTubeContainer}
  class="nature-youtube-container frame"
  style="--frame-ratio-height--component: {videoRatioHeight}; --frame-ratio-width--component: {videoRatioWidth}; background-image: {backgroundImageUrl};"
  tabindex="-1"
>
  {#if !mounted}
    <div class="invert">
      <p class="font-family:sans-serif">
        Please visit
        <a href="https://youtu.be/{videoId}">YouTube</a>
        to view this video.
      </p>
    </div>
  {:else if !playVideoRequested}
    <YouTubeButton on:click={requestVideo} message={`Play: ${title}`} />
  {:else}
    <iframe
      bind:this={iframe}
      id={uniqueVideoId}
      src="https://www.youtube-nocookie.com/embed/{videoId}?autoplay=1&enablejsapi=1"
      frameborder="0"
      width="560"
      height="315"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      {title}
    />
  {/if}
</div>
