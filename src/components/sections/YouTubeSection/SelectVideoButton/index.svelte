<script>
  import { createEventDispatcher } from "svelte";
  export let videoId;
  export let title;
  export let index;

  let backgroundImageUrl = `url('https://i.ytimg.com/vi/${videoId}/sddefault.jpg')`;

  const dispatch = createEventDispatcher();

  function sendMessage() {
    console.log("message");
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
    background-color: var(--color--white-0);
    padding: var(--s-1);
  }
</style>

<button
  on:click={sendMessage}
  class="frame"
  style="--frame-ratio-height--component: 9; --frame-ratio-width--component: 16; background-image: {backgroundImageUrl};"
>
  <span class="font-size:small margin-top:auto">
    {title}
  </span>
</button>
