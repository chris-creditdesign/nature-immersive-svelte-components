<script>
  export let className = "";
  export let message = "Click";
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
  class="{`${className} simple-button`}"
  on:click
  data-track="click"
  data-event-category="button"
  data-event-action="click"
  data-event-label="Button clicked"
>
  {message}
</button>
