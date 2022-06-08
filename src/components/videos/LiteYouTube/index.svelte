<script context="module">
  export const players = new Set();

  export function stopAll() {
    players.forEach((player) => {
      player.pause();
    });
  }
</script>

<script>
  import { onMount } from "svelte";
  import { youTubeIframeAPIReady } from "../../stores/youtube-iframe-api-ready.js";
  import YouTubeButton from "../../buttons/YouTubeButton/index.svelte";
  export let videoId;
  export let title = "YouTube video player";
  export let videoRatioHeight = 9;
  export let videoRatioWidth = 16;

  let iframe;
  let thisPlayer;
  let mounted = false;
  let playVideoRequested = false;
  let backgroundImageUrl = `url('https://i.ytimg.com/vi/${videoId}/sddefault.jpg')`;
  let uniqueVideoId = `${videoId}-${Date.now().toString(36)}`;

  $: instantiatePlayer($youTubeIframeAPIReady, iframe);

  let handleButtonClick = () => {
    playVideoRequested = true;
  };

  let onPlayerReady = () => {
    backgroundImageUrl = "unset";
  };

  let onPlayerStateChange = (event) => {
    /* 0 = ended; 1 = playing; 2 = paused */
    let { data } = event;

    /* If this video is playing, stop instances of this
	   component on page from playing */
    if (data === 1) {
      players.forEach((player) => {
        if (player !== thisPlayer) player.pauseVideo();
      });
    }
  };

  let onPlayerError = () => {
    mounted = false;
  };

  let instantiatePlayer = (apiReady, iframeReady) => {
    if (!thisPlayer && apiReady && iframeReady) {
      thisPlayer = new YT.Player(uniqueVideoId, {
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
          onError: onPlayerError,
        },
      });

      players.add(thisPlayer);

      iframe.focus();
    }
  };

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
  class="nature-youtube-container frame"
  style="--frame-ratio-height--component: {videoRatioHeight}; --frame-ratio-width--component: {videoRatioWidth}; background-image: {backgroundImageUrl};"
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
    <YouTubeButton on:click={handleButtonClick} message={`Play: ${title}`} />
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
