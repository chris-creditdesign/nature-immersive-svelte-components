<script context="module">
  import { youTubeIframeAPIReady } from "./stores/youtube-iframe-api-ready.js";

  // https://developers.google.com/youtube/iframe_api_reference
  // This code loads the IFrame Player API code asynchronously.
  let tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  let firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  window.onYouTubeIframeAPIReady = function () {
    youTubeIframeAPIReady.set(true);
  };
</script>

<script>
  import { afterUpdate, onDestroy } from "svelte";
  import { Frame } from "creditdesign-svelte-components";
  import { youTubePlayerReady } from "./stores/youtube-player-ready.js";
  import { container, width } from "./stores/resize.js";

  export let videoId;
  export let videoRatioHeight = 9;
  export let videoRatioWidth = 16;

  let heightOverWidthRatio = videoRatioHeight / videoRatioWidth;
  let player;
  let uniqueVideoId = `${videoId}-${Date.now().toString(36)}`;

  let onPlayerReady = () => {
    youTubePlayerReady.set(true);
  };

  afterUpdate(() => {
    // Would this be better with async await?
    if (!player && $youTubeIframeAPIReady) {
      player = new YT.Player(uniqueVideoId, {
        videoId,
        events: {
          onReady: onPlayerReady,
        },
      });
    }

    if ($youTubePlayerReady && $width) {
      player.setSize($width, $width * heightOverWidthRatio);
    }
  });

  onDestroy(() => {
    player.destroy();
    youTubePlayerReady.set(false);
  });
</script>

<Frame
  frameRatioHeight="{videoRatioHeight}"
  frameRatioWidth="{videoRatioWidth}"
>
  <div bind:this="{$container}">
    <div id="{uniqueVideoId}"></div>
  </div>
</Frame>
