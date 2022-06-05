<script context="module">
  const elements = new Set();

  export function stopAll() {
    elements.forEach((element) => {
      element.pause();
    });
  }
</script>

<script>
  import { onMount } from "svelte";
  import { youTubeIframeAPIReady } from "./stores/youtube-iframe-api-ready.js";
  export let videoId;
  export let title = "YouTube video player";
  export let videoRatioHeight = 9;
  export let videoRatioWidth = 16;

  let iframe;
  let player;
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
      elements.forEach((element) => {
        if (element !== player) element.pauseVideo();
      });
    }
  };

  let onPlayerError = () => {
    mounted = false;
  };

  let instantiatePlayer = (apiReady, iframeReady) => {
    if (!player && apiReady && iframeReady) {
      player = new YT.Player(uniqueVideoId, {
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
          onError: onPlayerError,
        },
      });

      elements.add(player);

      iframe.focus();
    }
  };

  onMount(() => {
    mounted = true;

    // https://developers.google.com/youtube/iframe_api_reference
    // This code loads the IFrame Player API code asynchronously.
    let script;
    let scriptAddedToPage = document.getElementById(
      "nature-immersive-youtube-api"
    );

    if (!$youTubeIframeAPIReady && !scriptAddedToPage) {
      script = document.createElement("script");
      script.setAttribute("id", "nature-immersive-youtube-api");
      script.type = "text/javascript";
      script.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(script);
    }

    /* The onYouTubeIframeAPIReady function will execute
	   as soon as the player API code downloads. */
    window.onYouTubeIframeAPIReady = function () {
      /* This is set to true so that the API code is not 
	     downloaded multiple times */
      youTubeIframeAPIReady.set(true);
    };
  });
</script>

<style>
  .nature-youtube-container {
    background-position: center center;
    background-size: cover;
  }

  /* https://github.com/paulirish/lite-youtube-embed/blob/master/src/lite-yt-embed.css */
  .nature-youtube-play-button {
    display: block;
    width: 68px;
    height: 48px;
    position: absolute;
    cursor: pointer;
    transform: translate3d(-50%, -50%, 0);
    top: 50%;
    left: 50%;
    z-index: 1;
    background-color: transparent;
    /* YT's actual play button svg */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');
    filter: grayscale(100%);
    transition: filter 0.1s cubic-bezier(0, 0, 0.2, 1);
    border: none;
  }

  .nature-youtube-play-button:focus,
  .nature-youtube-play-button:hover {
    filter: none;
    background-color: unset;
  }

  .nature-youtube-play-button:active {
    transform: translate3d(-50%, -50%, 0);
  }

  .nature-youtube-container > iframe {
    width: 100%;
    height: 100%;
  }
</style>

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
    <button class="nature-youtube-play-button" on:click={handleButtonClick}>
      <span class="visually-hidden">Play video</span>
    </button>
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
