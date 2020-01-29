<script>
  import { onMount, tick } from "svelte";
  import LayoutCover from "../LayoutCover/index.svelte";
  import LayoutCluster from "../LayoutCluster/index.svelte";
  import StyleBox from "../LayoutBox/style.svelte";

  export let srcURL;
  export let alt;
  export let coverSpace = "1rem";
  export let coverHeight = "100vh";

  let video;
  let btn;
  let btnMSG;

  $: srcIMG = srcURL;
  $: srcWEBM = srcURL;
  $: srcMP4 = srcURL;

  let handleBtnClick = () => {
    video[video.paused ? "play" : "pause"]();
    btnMSG = video.paused ? "Play video" : "Pause video";
  };

  onMount(async () => {
    srcIMG = srcURL.replace(/-small/, "");
    srcWEBM = srcURL
      .replace(/-small/, "")
      .slice(0, -4)
      .concat(".webm");
    srcMP4 = srcURL
      .replace(/-small/, "")
      .slice(0, -4)
      .concat(".mp4");

    await tick();
    btnMSG = video.paused ? "Pause video" : "Play video";
  });
</script>

<style>
  .cover__background {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -999;
  }

  button {
    --box-space: var(--s-2);
    color: var(--text-color-invert);
    font-size: var(--font-size-small-1);
    font-weight: bold;
    text-transform: uppercase;
    outline: none;
    border: 3px solid var(--text-color-invert);
    background: none;
    cursor: pointer;
    transition: background-color 300ms ease;
  }

  button:hover {
    background-color: var(--black-3);
  }

  button:focus {
    background-color: var(--black-3);
    border: 3px solid var(--outline);
  }
</style>

<StyleBox />

<LayoutCover className="cover--with-background" {coverSpace} {coverHeight}>

  <video
    bind:this={video}
    poster={srcIMG}
    playsinline={true}
    muted={true}
    autoplay={true}
    loop={true}
    class="cover__background"
    aria-label={alt}>
    <source src={srcWEBM} type="video/webm" />
    <source src={srcMP4} type="video/mp4" />
  </video>

  <slot />

  <LayoutCluster clusterJustifyContent="flex-end">

    <button class="box" type="button" bind:this={btn} on:click={handleBtnClick}>
      {btnMSG}
    </button>
  </LayoutCluster>

</LayoutCover>
