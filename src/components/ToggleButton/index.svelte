<script>
  import LogoTriangle from "../LogoTriangle/index.svelte";

  export let className = "";
  export let expanded = false;
  export let triangle = true;
  export let expandedMessage = "Close";
  export let message = "Open";
</script>

<style>
  button {
    display: flex;
    align-items: center;
    width: max-content;
    font-size: var(--font-size-base);
    padding: var(--s-2);
    border-width: 2px;
    border-style: solid;
    border-color: var(--toggle-button-color-dark);
    border-radius: 5px;
    font-weight: 600;
    background: none;
    cursor: pointer;
  }

  button[aria-expanded="true"] {
    box-shadow: inset 0 0.1em 0.1em rgba(27, 31, 35, 0.2);
  }

  :global(.toggle-button-with-triangle > svg) {
    margin-right: var(--s-3);
    transition: transform 0.3s ease;
    transform: rotate(0deg);
  }

  /* If prefers reduced motion is set, don't animate the
    triangle spinning */
  @media (prefers-reduced-motion: reduce) {
    :global(.toggle-button-with-triangle > svg) {
      transition: none;
    }
  }

  :global(.toggle-button-with-triangle[aria-expanded="true"] > svg) {
    transform: rotate(180deg);
  }
</style>

<button
  class={`${className} ${triangle ? 'toggle-button-with-triangle' : ''}`}
  on:click
  aria-expanded={expanded}>
  {#if triangle}
    <LogoTriangle height="0.5" />
  {/if}
  {#if expanded}{expandedMessage}{:else}{message}{/if}
</button>
