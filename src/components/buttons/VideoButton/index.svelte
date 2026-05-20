<script lang="ts">
  import { createBubbler } from 'svelte/legacy';

  const bubble = createBubbler();
  
  interface Props {
    className?: string;
    paused?: boolean;
    pausedMessage?: string;
    playingMessage?: string;
    /**
   * Optional to add `data-theme` to button element.
   */
    theme?: string;
    disabled?: boolean;
  }

  let {
    className = "",
    paused = true,
    pausedMessage = "Play video",
    playingMessage = "Pause video",
    theme = "",
    disabled = false
  }: Props = $props();
</script>

<style>
  button {
    z-index: 1; /* Make sure button is above video */
    font-weight: bold;
    color: var(--color--text-invert);
    text-transform: uppercase;
    background-color: var(--color--background-invert);
    border-color: var(--color--text-invert);
    border-width: 3px;
  }

  button:hover,
  button:focus {
    color: var(--color--link-active);
    background-color: var(--color--outline);
    border-color: var(--color--link-active);
  }
</style>

<button
  aria-checked={paused}
  class={`${className} font-size:small`}
  role="switch"
  type="button"
  data-theme={theme}
  onclick={bubble('click')}
  disabled={disabled ? true : null}
>
  {#if paused}
    {pausedMessage}
  {:else}
    {playingMessage}
  {/if}
</button>
