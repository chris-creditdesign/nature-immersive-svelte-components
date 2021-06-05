<script>
  import LogoFilter from "../LogoFilter/index.svelte";

  export let className = "";
  export let expanded = false;
  /**
   * Text that will be displayed in the button when it is expanded
   */
  export let expandedMessage = "Close";
  /**
   * Text that will be displayed in the button when it is not expanded
   */
  export let message = "Open";
  export let theme = "";
</script>

<style>
  button {
    display: flex;
    gap: var(--s-3);
    align-items: center;
    width: max-content;
    padding: var(--s-3);
    font-size: var(--font-size-base);
    font-weight: 600;
    color: var(--black-1);
    cursor: pointer;
    background-color: var(--white-1);
    border-color: var(--black-1);
    border-style: solid;
    border-width: 2px;
    border-radius: 5px;
    box-shadow: inset 0.2em 0.2em 0.3em rgba(255, 255, 255, 1),
      inset -0.05em -0.05em 0.3em rgba(27, 31, 35, 0.6);
    fill: var(--black-1);
  }

  button[aria-expanded="true"] {
    box-shadow: inset -0.2em -0.1em 0.3em rgba(255, 255, 255, 1),
      inset 0 0.1em 0.3em rgba(27, 31, 35, 0.6);
  }

  :global(.no-flexbox-gap .filter-button > * + *) {
    margin-left: var(--s-3);
  }
</style>

<button
  aria-expanded={expanded}
  class={`filter-button ${className}`}
  data-event-action="click"
  data-event-category={message}
  data-event-label="Filter button clicked"
  data-theme={theme}
  data-track="click"
  on:click
  type="button"
>
  <LogoFilter height="0.8" />

  <span>
    {#if expanded}{expandedMessage}{:else}{message}{/if}
  </span>
</button>
