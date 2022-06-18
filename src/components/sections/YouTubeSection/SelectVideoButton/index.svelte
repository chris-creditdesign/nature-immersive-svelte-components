<script>
  import { createEventDispatcher } from "svelte";
  export let videoId;
  export let title;
  export let index;
  export let currentVideoIndex;

  let backgroundImageUrl = `url('https://i.ytimg.com/vi/${videoId}/sddefault.jpg')`;

  const dispatch = createEventDispatcher();

  function sendMessage() {
    dispatch("message", {
      index,
    });
  }
</script>

<style>
  button {
    align-items: start !important;
    border-style: none !important;
    padding: 0 !important;
    text-align: start !important;
    background-color: unset;
    width: 100% !important;
    background-position: center center !important;
    background-size: cover !important;
  }

  span {
    width: 100%;
    padding: var(--s-1);
    background-color: var(--color--background);
    color: var(--color--text);
  }

  button[aria-current] span {
    background-color: var(--color--background-invert);
    color: var(--color--text-invert);
  }
</style>

<button
  on:click={sendMessage}
  aria-current={index === currentVideoIndex ? "true" : null}
  class="frame"
  style="--frame-ratio-height--component: 9; --frame-ratio-width--component: 16; background-image: {backgroundImageUrl};"
>
  <span class="font-size:small margin-top:auto">
    {title}
  </span>
</button>
