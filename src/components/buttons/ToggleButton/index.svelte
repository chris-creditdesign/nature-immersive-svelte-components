<script lang="ts">
  import { createBubbler } from 'svelte/legacy';

  const bubble = createBubbler();
  /**
   * When the button is in its 'open' state, `aria-expanded` will be true.
   *
   * @component
   */
  import RadioButton from "../../icons/RadioIcon/index.svelte";

  
  
  
  
  
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
    /**
   * Optional to add `data-theme` to button element.
   */
    theme?: string;
    disabled?: boolean;
  }

  let {
    className = "",
    expanded = false,
    expandedMessage = "Checked",
    message = "Unchecked",
    theme = "",
    disabled = false
  }: Props = $props();
</script>

<button
  class={className}
  onclick={bubble('click')}
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
