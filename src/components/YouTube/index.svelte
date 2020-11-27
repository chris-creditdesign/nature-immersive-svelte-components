<script>
  import { onMount, afterUpdate } from "svelte";
  import { Frame } from "creditdesign-svelte-components";
  import { youTubeIframeAPIReady } from "./stores/youtube-iframe-api-ready.js";
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

  onMount(() => {
    // https://developers.google.com/youtube/iframe_api_reference
    // This code loads the IFrame Player API code asynchronously.
    let script;
    if (!$youTubeIframeAPIReady) {
      script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(script);
    }

    window.onYouTubeIframeAPIReady = function () {
      youTubeIframeAPIReady.set(true);
    };

    return () => {
      if (script) {
        script.parentNode.removeChild(script);
      }
      if (player) {
        player.destroy();
      }
      youTubePlayerReady.set(false);
    };
  });

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
</script>

<Frame
  frameRatioHeight="{videoRatioHeight}"
  frameRatioWidth="{videoRatioWidth}"
>
  <div bind:this="{$container}">
    <div id="{uniqueVideoId}"></div>
  </div>
</Frame>
