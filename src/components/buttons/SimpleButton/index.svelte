<script>
  /**
   * Class name applied to the button element
   */
  export let className = "";
  /**
   * Text that will be displayed in the button
   */
  export let message = "Click";
  /**
   * Option to add a value to `data-theme` attribute for styling.
   */
  export let theme = "";
  export let disabled = false;
</script>

<button
  class={className}
  data-event-action="click"
  data-event-category={message}
  data-event-label="Button clicked"
  data-theme={theme}
  data-track="click"
  on:click
  type="button"
  disabled={disabled ? true : null}
>
  {message}
</button>
