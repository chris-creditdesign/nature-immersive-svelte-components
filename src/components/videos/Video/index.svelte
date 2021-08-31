<script>
  /**
   * Video element with basic play/pause button
   * to be used as an animated gif replacement.
   *
   * As such there other video controls or caption options
   * but an `altText` prop should be provided to be applied
   * as an `aria-label` on the video elemnent.
   *
   * The video can be paused by clicking on the button on or
   * the video element itself.
   *
   * @component
   */

  import { onMount } from "svelte";
  import { Frame } from "creditdesign-svelte-components";
  import { autoplayVideoOnIntersect } from "../actions/autoplay-video-on-Intersect";

  /**
   * To be applied to placeholder image or as
   * `aria-label` on video element.
   */
  export let altText;
  /**
   * If autoplay is true, `autoplayVideoOnIntersect` will attempt to play
   * the video when it is scrolled 50% into view - if prefers reduced motion
   * is not set.
   */
  export let autoplay = false;

  export let caption;
  /**
   * Optional space to move caption in from side of video.
   */
  export let captionSpace;
  export let className = "";
  /**
   * Aspect ration of video.
   */
  export let frameRatioHeight;
  export let frameRatioWidth;
  /**
   * If true video will continuously loop until paused.
   */
  export let loop = false;
  /**
   * Location of fallback image should be provided as the src url
   * ie video/video-small.jpg
   */
  export let srcURL;

  export let videoCaptionTracks = [];

  let videoCaptionSpace = captionSpace
    ? `--video-caption-space--component: ${captionSpace};`
    : "";

  let captionStyle = `${videoCaptionSpace}`;

  let mounted = false;

  let srcIMG = srcURL.replace(/-small/, "");
  let srcWEBM = srcURL
    .replace(/-small/, "")
    .slice(0, -4)
    .concat(".webm");
  let srcMP4 = srcURL
    .replace(/-small/, "")
    .slice(0, -4)
    .concat(".mp4");

  onMount(() => {
    mounted = true;
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

    margin-top: var(--s-3);
    margin-right: var(--video-caption-space);
    margin-left: var(--video-caption-space);
  }

  video,
  img {
    width: 100%;
    max-width: 100%;
  }
</style>

<figure class={`${className}`}>
  <Frame {frameRatioHeight} {frameRatioWidth}>
    {#if mounted}
      <!-- svelte-ignore a11y-media-has-caption -->
      <video
        controls
        poster={srcIMG}
        playsinline="true"
        {loop}
        aria-label={altText}
        use:autoplayVideoOnIntersect={autoplay}
      >
        <source src={srcWEBM} type="video/webm" />
        <source src={srcMP4} type="video/mp4" />

        {#each videoCaptionTracks as { label, srclang, defaultTrack }}
          <track
            {label}
            kind="captions"
            {srclang}
            src={srcURL
              .replace(/-small/, "")
              .slice(0, -4)
              .concat(`-${srclang}.vtt`)}
            default={defaultTrack}
          />
        {/each}
      </video>
    {:else}
      <img src={srcURL} alt={altText} />
    {/if}
  </Frame>

  {#if caption.length}
    <figcaption
      class="font-size:small font-family:sans-serif"
      style={captionStyle}
    >
      {@html caption}
      {#if !mounted}
        Here is a
        <a href={srcMP4}>link to the video file</a>
        .
      {/if}
    </figcaption>
  {/if}
</figure>
