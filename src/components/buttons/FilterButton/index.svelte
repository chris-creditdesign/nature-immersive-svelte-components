<script>
  /**
   * When the button is in its 'filter on' state, `aria-expanded` will be true.
   *
   * @component
   */
  import FilterIcon from "../../icons/FilterIcon/index.svelte";

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
  export let expandedMessage = "Remove filter";
  /**
   * Text that will be displayed in the button when it is not expanded
   */
  export let message = "Add filter";
  export let theme = "";
  export let disabled = false;
</script>

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
  disabled={disabled ? true : null}
>
  <FilterIcon checked={expanded} />

  <span>
    {#if expanded}{expandedMessage}{:else}{message}{/if}
  </span>
</button>
