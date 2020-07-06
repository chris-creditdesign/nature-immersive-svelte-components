<script>
  import LogoFilter from "../LogoFilter/index.svelte";

  export let className = "";
  export let expanded = false;
  export let expandedMessage = "Close";
  export let message = "Open";
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

  button[aria-expanded="true"] {
    box-shadow: inset -0.2em -0.1em 0.3em rgba(255, 255, 255, 1),
      inset 0 0.1em 0.3em rgba(27, 31, 35, 0.6);
  }

  :global(.filter-button > svg) {
    margin-right: var(--s-3);
  }
</style>

<button
  class="{`${className} filter-button`}"
  on:click
  aria-expanded="{expanded}"
  data-track="click"
  data-event-category="filter-button"
  data-event-action="click"
  data-event-label="Custom filter button clicked"
>

  <LogoFilter height="0.8" />

  {#if expanded}{expandedMessage}{:else}{message}{/if}
</button>
