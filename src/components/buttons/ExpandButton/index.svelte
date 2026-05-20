<script lang="ts">
  /**
   * When the button is in its 'open' state, `aria-expanded` will be true.
   *
   * If prefers reduced motion is set, the triangle icon will transition immediately.
   *
   * Expects flexbox gap to be available. Otherwise a parent element should have a
   * `no-flexbox-gap` class applied. In this case margin-left will be applied to the
   * triangle icon.
   *
   * A `focusButton` function is exported so that the element can be focused
   * programatically by a parent component. https://stackoverflow.com/a/58288696
   *
   * @component
   */
  import ChevronIcon from "../../icons/ChevronIcon/index.svelte";

  interface Props {
    /** Optional to add extra class to button element */
    className?: string;
    /** State of `aria-expanded` attribute on button. */
    expanded?: boolean;
    /** Text that will be displayed in the button when it is expanded */
    expandedMessage?: string;
    /** Text that will be displayed in the button when it is not expanded */
    message?: string;
    /** Option to add `data-theme` to button element. */
    theme?: string;
    disabled?: boolean;
    onclick?: (event: MouseEvent) => void;
    onfocus?: (event: FocusEvent) => void;
    onblur?: (event: FocusEvent) => void;
  }

  let {
    className = "",
    expanded = false,
    expandedMessage = "Close",
    message = "Open",
    theme = "",
    disabled = false,
    onclick,
    onfocus,
    onblur
  }: Props = $props();

  let buttonElement = $state<HTMLButtonElement | undefined>();

  export function focusButton() {
    buttonElement?.focus();
  }
</script>

<style>
  .toggle-icon {
    transition: transform 250ms ease;
    transform: rotate(0deg);
  }

  @media (prefers-reduced-motion: reduce) {
    .toggle-icon {
      transition: none;
    }
  }

  button[aria-expanded="true"] .toggle-icon {
    transform: rotate(180deg);
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
  onblur={onblur}
  onclick={onclick}
  onfocus={onfocus}
  type="button"
  disabled={disabled ? true : null}
>
  <span>
    {#if expanded}{expandedMessage}{:else}{message}{/if}</span
  >
  <span class="toggle-icon">
    <ChevronIcon />
  </span>
</button>
