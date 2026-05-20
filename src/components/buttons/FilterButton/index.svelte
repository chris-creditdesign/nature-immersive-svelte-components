<script lang="ts">
  import { createBubbler } from 'svelte/legacy';

  const bubble = createBubbler();
  /**
   * When the button is in its 'filter on' state, `aria-expanded` will be true.
   *
   * @component
   */
  import FilterIcon from "../../icons/FilterIcon/index.svelte";

  
  
  
  
  interface Props {
    /**
   * Optional to add extra class to button element
   */
    className?: string;
    /**
   * State of `aria-expanded` attribute on button.
   */
    expanded?: boolean;
    /**
   * Text that will be displayed in the button when it is expanded
   */
    expandedMessage?: string;
    /**
   * Text that will be displayed in the button when it is not expanded
   */
    message?: string;
    theme?: string;
    disabled?: boolean;
  }

  let {
    className = "",
    expanded = false,
    expandedMessage = "Remove filter",
    message = "Add filter",
    theme = "",
    disabled = false
  }: Props = $props();
</script>

<button
  aria-expanded={expanded}
  class={`filter-button ${className}`}
  data-event-action="click"
  data-event-category={message}
  data-event-label="Filter button clicked"
  data-theme={theme}
  data-track="click"
  onclick={bubble('click')}
  type="button"
  disabled={disabled ? true : null}
>
  <FilterIcon checked={expanded} />

  <span>
    {#if expanded}{expandedMessage}{:else}{message}{/if}
  </span>
</button>
