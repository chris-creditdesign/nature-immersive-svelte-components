<script module>
  export const players = new Set();

  export function stopAll() {
    players.forEach((player) => {
      player.pause();
    });
  }
</script>

<script lang="ts">
  import { run } from 'svelte/legacy';

  import { onMount } from "svelte";
  import { youTubeIframeAPIReady } from "../../stores/youtube-iframe-api-ready.js";
  import YouTubeButton from "../../buttons/YouTubeButton/index.svelte";
  interface Props {
    videoId: any;
    title?: string;
    videoRatioHeight?: number;
    videoRatioWidth?: number;
    playVideoRequested?: boolean;
    autoplay?: boolean;
    youTubeContainer: any;
  }

  let {
    videoId,
    title = "YouTube video player",
    videoRatioHeight = 9,
    videoRatioWidth = 16,
    playVideoRequested = $bindable(false),
    autoplay = true,
    youTubeContainer = $bindable()
  }: Props = $props();

  let iframe = $state();
  let thisPlayer;
  let mounted = $state(false);
  let backgroundImageUrl = $state(`url('https://i.ytimg.com/vi/${videoId}/sddefault.jpg')`);
  let uniqueVideoId = `${videoId}-${Date.now().toString(36)}`;


  let handleButtonClick = () => {
    playVideoRequested = true;
  };

  let onPlayerReady = () => {
    backgroundImageUrl = "unset";
    stopOtherPlayers();
  };

  let onPlayerStateChange = (event) => {
    /* 0 = ended; 1 = playing; 2 = paused */
    let { data } = event;

    /* If this video is playing, stop instances of this
	   component on page from playing */
    if (data === 1) {
      stopOtherPlayers();
    }
  };

  let onPlayerError = () => {
    mounted = false;
  };

  let stopOtherPlayers = () => {
    players.forEach((player) => {
      if (player !== thisPlayer) player.pauseVideo();
    });
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

      youTubeContainer.focus();
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
  run(() => {
    instantiatePlayer($youTubeIframeAPIReady, iframe);
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
      onload={youtubeAPIScriptLoaded}>
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
    <div class="box" data-theme="invert">
      <p class="font-family:sans-serif">
        Please visit <a href="https://youtu.be/{videoId}">YouTube</a> to view this
        video.
      </p>
    </div>
  {:else if !playVideoRequested}
    <YouTubeButton
      onclick={handleButtonClick}
      message={`Play video: ${title}`}
    />
  {:else}
    <iframe
      bind:this={iframe}
      id={uniqueVideoId}
      src="https://www.youtube-nocookie.com/embed/{videoId}?autoplay={autoplay
        ? '1'
        : '0'}&enablejsapi=1"
      frameborder="0"
      width="560"
      height="315"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      {title}
></iframe>
  {/if}
</div>
