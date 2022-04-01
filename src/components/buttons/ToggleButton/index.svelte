<script>
  /**
   * When the button is in its 'open' state, `aria-expanded` will be true.
   *
   * @component
   */
  import RadioButton from "../../icons/RadioIcon/index.svelte";

  /**
   * Optional to add extra class to button element
   */
  export let className = "";
  /**
   * State of `aria-expanded` attribute on button.
   */
  export let expanded = false;
  /**
   * Text that will be displayed in the button when it is expanded
   */
  export let expandedMessage = "Checked";
  /**
   * Text that will be displayed in the button when it is not expanded
   */
  export let message = "Unchecked";
  /**
   * Optional to add `data-theme` to button element.
   */
  export let theme = "";
  export let disabled = false;
</script>

<button
  class={className}
  on:click
  aria-expanded={expanded}
  data-track="click"
  data-event-category="toggle-button"
  data-event-action="click"
  data-event-label="Custom toggle button clicked"
  data-theme={theme}
  disabled={disabled ? true : null}
>
  <RadioButton checked={expanded} />

  <span>
    {#if expanded}{expandedMessage}{:else}{message}{/if}
  </span>
</button>
