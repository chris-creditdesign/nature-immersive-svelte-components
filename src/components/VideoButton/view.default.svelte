<script>
  import { Box } from "creditdesign-svelte-components";
  import VideoButton from "./index.svelte";

  export let className;
  export let playingMessage;
  export let pausedMessage;

  let paused = true;

  let handleClick = () => {
    paused = !paused;
  };
</script>

<style>
  .container {
    background-color: black;
  }
</style>

<div class="container">
  <Box>
    <VideoButton
      {className}
      {paused}
      {playingMessage}
      {pausedMessage}
      on:click="{handleClick}"
    />
  </Box>
</div>
