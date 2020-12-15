<script>
  import { onMount } from "svelte";
  import { Frame } from "creditdesign-svelte-components";
  import VideoButton from "../VideoButton/index.svelte";

  export let className = "";
  export let altText;
  export let caption;
  export let srcURL;
  export let autoplay = true;
  export let loop = true;
  export let buttonAtTop = false;
  export let buttonOnLeft = false;
  export let playingMessage = "";
  export let pausedMessage = "";
  export let frameRatioHeight;
  export let frameRatioWidth;
  export let captionSpace;

  let buttonVerticalPosition = buttonAtTop
    ? `--video-button-row--component: 2 / 3;`
    : "";

  let buttonHorizontalPosition = buttonOnLeft
    ? `--video-button-column--component: 2 / 3;`
    : "";

  let videoCaptionSpace = captionSpace
    ? `--video-caption-space--component: ${captionSpace};`
    : "";

  let style = `${buttonHorizontalPosition} ${buttonVerticalPosition}`;
  let captionStyle = `${videoCaptionSpace}`;

  let video;
  let mounted = false;
  let paused = true;
  let prefersReducedMotion = true;

  let srcIMG = srcURL.replace(/-small/, "");
  let srcWEBM = srcURL
    .replace(/-small/, "")
    .slice(0, -4)
    .concat(".webm");
  let srcMP4 = srcURL
    .replace(/-small/, "")
    .slice(0, -4)
    .concat(".mp4");

  let handleBtnClick = () => {
    video[paused ? "play" : "pause"]();
  };

  onMount(() => {
    mounted = true;
    prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
  });
</script>

<style>
  :global(:root) {
    --video-button-column--global: 4 / 5;
    --video-button-row--global: 4 / 5;
    --video-caption-space--global: 0;
  }

  figcaption {
    --video-caption-space--component: initial;
    --video-caption-space: var(
      --video-caption-space--component,
      var(--video-caption-space--global, 0)
    );
  }

  .video-container {
    --video-button-column--component: initial;
    --video-button-row--component: initial;

    display: grid;
    grid-template-columns: var(--s-1) auto 1fr auto var(--s-1);
    grid-template-rows: var(--s-1) auto 1fr auto var(--s-1);
  }

  :global(.video-button) {
    grid-column: var(
      --video-button-column--component,
      var(--video-button-column--global, 4 / 5)
    );
    grid-row: var(
      --video-button-row--component,
      var(--video-button-row--global, 4 / 5)
    );
  }

  video,
  img {
    width: 100%;
    max-width: 100%;
    grid-column: 1 / 6;
    grid-row: 1 / 6;
  }

  figcaption {
    margin-top: var(--s-3);
    margin-right: var(--video-caption-space);
    margin-left: var(--video-caption-space);
  }
</style>

<figure class="{`${className}`}">
  <Frame {frameRatioHeight} {frameRatioWidth}>
    <div class="video-container" {style}>
      {#if mounted}
        <video
          bind:this="{video}"
          poster="{srcIMG}"
          playsinline="true"
          muted="true"
          autoplay="{!prefersReducedMotion && autoplay}"
          {loop}
          aria-label="{altText}"
          bind:paused
          on:click="{handleBtnClick}"
        >
          <source src="{srcWEBM}" type="video/webm" />
          <source src="{srcMP4}" type="video/mp4" />
        </video>
      {:else}
        <img src="{srcURL}" alt="{altText}" />
      {/if}

      {#if mounted}
        <VideoButton
          className="video-button"
          {playingMessage}
          {pausedMessage}
          {paused}
          on:click="{handleBtnClick}"
        />
      {/if}
    </div>
  </Frame>

  {#if caption.length}
    <figcaption
      class="font-size:small font-family:sans-serif"
      style="{captionStyle}"
    >
      {@html caption}
      {#if !mounted}
        Here is a
        <a href="{srcMP4}">link to the video file</a>
        .
      {/if}
    </figcaption>
  {/if}
</figure>
