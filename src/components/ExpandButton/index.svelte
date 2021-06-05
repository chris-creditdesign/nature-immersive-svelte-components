<script>
  import LogoChevron from "../LogoChevron/index.svelte";

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

  let buttonElement;

  /**
   * Exported function so that the button element can be
   * focused programatically by the parent component.
   * Ref: https://stackoverflow.com/a/58288696
   */
  export function focusButton() {
    buttonElement.focus();
  }
</script>

<style>
  button {
    display: flex;
    gap: var(--s-2);
    align-items: center;
    height: 1.8em;
    padding: 0 var(--s-1);
    font-size: inherit;
    border-style: solid;
    border-width: 1px;
  }

  .toggle-icon {
    transition: transform 250ms ease;
    transform: rotate(0deg);
  }

  /* If prefers reduced motion is set, don't animate the
    triangle spinning */
  @media (prefers-reduced-motion: reduce) {
    .toggle-icon {
      transition: none;
    }
  }

  button[aria-expanded="true"] .toggle-icon {
    transform: rotate(180deg);
  }

  :global(.no-flexbox-gap .expand-button > * + *) {
    margin-left: var(--s-2);
  }
</style>

<button
  aria-expanded={expanded}
  bind:this={buttonElement}
  class={`expand-button ${className}`}
  data-event-action="click"
  data-event-category={message}
  data-event-label="Expand button clicked"
  data-theme={theme}
  data-track="click"
  on:blur
  on:click
  on:focus
  type="button"
>
  <span>
    {#if expanded}{expandedMessage}{:else}{message}{/if}</span
  >
  <span class="toggle-icon">
    <LogoChevron height="0.3" />
  </span>
</button>
