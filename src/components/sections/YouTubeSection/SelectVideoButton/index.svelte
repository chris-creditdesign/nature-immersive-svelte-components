<script>
  import { createEventDispatcher } from "svelte";
  export let videoId;
  export let title;
  export let index;

  const dispatch = createEventDispatcher();

  function sendMessage() {
    dispatch("message", {
      index,
    });
  }
</script>

<style>
  button {
    align-items: start;
    border-style: none;
    padding: 0;
    text-align: start;
    background-color: unset;
  }
</style>

<button
  on:click={sendMessage}
  class="stack"
  style="--stack-space--component: var(--s-2);"
>
  <div
    class="nature-youtube-container frame"
    style="--frame-ratio-height--component: 9; --frame-ratio-width--component: 16;"
  >
    <img src="https://i.ytimg.com/vi/{videoId}/sddefault.jpg" alt="" />
  </div>
  <p class="font-size:small margin-top:auto">
    {title}
  </p>
</button>
