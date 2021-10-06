<script>
  import { onMount } from "svelte";
  import { Cover, Cluster } from "creditdesign-svelte-components";
  import VideoButton from "../../buttons/VideoButton/index.svelte";

  export let srcURL;
  export let alt;
  /**
   * Side padding of sloted content
   */
  export let coverSpace = "var(--s0)";
  export let coverHeight = "100vh";
  /**
   * Optional class to add to button element.
   */
  export let buttonClassName = "";
  export let buttonPausedMessage = "Play video";
  export let buttonPlayingMessage = "Pause video";
  /**
   * Optional to add `data-theme` to button element.
   */
  export let buttonTheme = "";

  let slotPresent = Object.keys($$slots).length > 0;

  // If the slot is present add the css class to add a semi-transparent
  // background and make the text color white.
  let className = slotPresent ? "cover-with-background" : null;

  let mounted = false;
  let paused = true;
  let prefersReducedMotion = true;
  let video;
  let handleBtnClick;

  let srcIMG = srcURL.replace(/-small/, "");
  let srcWEBM = srcURL
    .replace(/-small/, "")
    .slice(0, -4)
    .concat(".webm");
  let srcMP4 = srcURL
    .replace(/-small/, "")
    .slice(0, -4)
    .concat(".mp4");

  onMount(async () => {
    handleBtnClick = () => {
      video[paused ? "play" : "pause"]();
    };

    mounted = true;

    prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  });
</script>

<style>
  /* Fall back styles for no custom properties */
  img,
  video {
    width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  @supports (color: var(--primary)) {
    img,
    video {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -999;
      width: inherit;
      margin: 0;
      transform: translate(-50%, -50%);
    }

    /* Make the text visible over the dark background
       Only applied if there is a slot present */
    .cover-with-background {
      color: var(--color--white-0);
      background-color: rgba(10, 4, 4, 0.4);
    }
  }
</style>

<div class={className}>
  <Cover {coverSpace} {coverHeight}>
    {#if mounted}
      <video
        bind:this={video}
        poster={srcIMG}
        playsinline="true"
        muted="true"
        autoplay={!prefersReducedMotion}
        loop="true"
        aria-label={alt}
        bind:paused
      >
        <source src={srcWEBM} type="video/webm" />
        <source src={srcMP4} type="video/mp4" />
      </video>
    {:else}
      <img src={srcURL} {alt} />
    {/if}

    <div class="cover__centered">
      <slot />
    </div>

    {#if mounted}
      <Cluster clusterJustifyContent="flex-end">
        <VideoButton
          className={buttonClassName}
          pausedMessage={buttonPausedMessage}
          playingMessage={buttonPlayingMessage}
          theme={buttonTheme}
          {paused}
          on:click={handleBtnClick}
        />
      </Cluster>
    {/if}
  </Cover>
</div>
