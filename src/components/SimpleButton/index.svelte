<script>
  /**
   * Class name applied to the button element
   */
  export let className = "";

  /**
   * Text that will be displayed in the button
   */
  export let message = "Click";
  export let theme = "";
</script>

<style>
  button {
    display: flex;
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

  button:active {
    box-shadow: inset -0.2em -0.1em 0.3em rgba(255, 255, 255, 1),
      inset 0 0.1em 0.3em rgba(27, 31, 35, 0.6);
  }

  :global(.filter-button > svg) {
    margin-right: var(--s-3);
  }
</style>

<button
  class={className}
  data-event-action="click"
  data-event-category={message}
  data-event-label="Button clicked"
  data-theme={theme}
  data-track="click"
  on:click
  type="button"
>
  {message}
</button>
