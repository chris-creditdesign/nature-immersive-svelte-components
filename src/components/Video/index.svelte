<script>
  import { onMount } from "svelte";

  export let className = "";
  export let altText;
  export let caption;
  export let srcURL;
  export let autoplay = true;
  export let loop = true;

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
  .video-container {
    display: grid;
    grid-template-columns: var(--s-1) 1fr auto var(--s-1);
    grid-template-rows: var(--s-1) 1fr auto var(--s-1);
  }

  video {
    max-width: 100%;
    grid-column: 1 / 5;
    grid-row: 1 / 5;
  }

  button {
    z-index: 1; /* Make sure button is above video */
    padding: var(--s-3);
    font-size: var(--font-size-small-1);
    font-weight: bold;
    color: var(--white-0);
    text-transform: uppercase;
    cursor: pointer;
    background: none;
    border: 3px solid var(--white-0);
    outline: none;
    transition: background-color 300ms ease;
    grid-column: 3 / 4;
    grid-row: 3 / 4;
  }

  figcaption {
    margin-top: var(--s-3);
    font-family: var(--sans-serif-font);
    font-size: var(--font-size-small-1);
  }

  button:hover {
    background-color: var(--black-3);
  }

  button:focus {
    background-color: var(--black-3);
    border: 3px solid var(--outline);
  }
</style>

<figure class="{`${className}`}">

  <div class="video-container">

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
      <button class="box" type="button" on:click="{handleBtnClick}">
        {paused ? 'Play video' : 'Pause video'}
      </button>
    {/if}
  </div>

  {#if caption.length}
    <figcaption>
      {@html caption}
    </figcaption>
  {/if}
</figure>
