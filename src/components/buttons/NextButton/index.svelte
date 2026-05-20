<script lang="ts">
  import { createBubbler } from 'svelte/legacy';

  const bubble = createBubbler();
  import ChevronRightIcon from "../../icons/ChevronRightIcon/index.svelte";

  
  
  
  interface Props {
    /**
   * Class name applied to the button element
   */
    className?: string;
    /**
   * Text that will be displayed in the button
   */
    message?: string;
    /**
   * Option to add a value to `data-theme` attribute for styling.
   */
    theme?: string;
    disabled?: boolean;
  }

  let {
    className = "",
    message = "Next",
    theme = "",
    disabled = false
  }: Props = $props();
</script>

<button
  class={className}
  data-event-action="click"
  data-event-category={message}
  data-event-label="Button clicked"
  data-theme={theme}
  data-track="click"
  onclick={bubble('click')}
  type="button"
  disabled={disabled ? true : null}
>
  <ChevronRightIcon title={message} height={1.5} />
</button>
