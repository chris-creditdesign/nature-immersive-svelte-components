<script>
  export let className = "";
  export let paused = true;
  export let pausedMessage = "";
  export let playingMessage = "";

  let playingMessageComponent = playingMessage.length
    ? playingMessage
    : "Pause video";
  let pausedMessageComponent = pausedMessage.length
    ? pausedMessage
    : "Play video";
</script>

<style>
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
  }

  button:hover {
    background-color: var(--black-3);
  }

  button:focus {
    background-color: var(--black-3);
    border: 3px solid var(--outline);
  }
</style>

<button class={className} type="button" on:click>
  {#if paused}{pausedMessageComponent}{:else}{playingMessageComponent}{/if}
</button>
