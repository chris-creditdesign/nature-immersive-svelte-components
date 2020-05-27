<script>
  export let className = "";
  export let toggleButtonColorLight = "";
  export let toggleButtonColorDark = "";
  export let expanded = false;
  export let expandedMessage = "Close";
  export let message = "Open";
  export let controls = "";
</script>

<style>
  :global(:root) {
    --toggle-button-color-light: var(--white-3);
    --toggle-button-color-dark: var(--black-3);
  }

  button {
    font-size: var(--font-size-base);
    padding: var(--s-2);
    border-width: 1px;
    border-style: solid;
    border-color: var(--toggle-button-color-dark);
    color: var(--white-1);
    border-radius: 5px;
    font-weight: 600;
    background-color: var(--toggle-button-color-light);
    background-image: linear-gradient(
      var(--toggle-button-color-light),
      var(--toggle-button-color-dark)
    );
    cursor: pointer;
  }

  button:hover {
    background-image: none;
  }

  button[aria-expanded="true"] {
    border-color: var(--toggle-button-color-light);
    background-color: var(--toggle-button-color-dark);
    background-image: linear-gradient(
      var(--toggle-button-color-dark),
      var(--toggle-button-color-light)
    );
    box-shadow: inset 0 0.1em 0.4em rgba(27, 31, 35, 0.5);
  }
</style>

<button
  class={className}
  style={`${toggleButtonColorLight ? `--toggle-button-color-light: ${toggleButtonColorLight};` : ''} ${toggleButtonColorDark ? `--toggle-button-color-dark: ${toggleButtonColorDark};` : ''}`}
  on:click
  aria-expanded={expanded}
  aria-controls={controls}>
  <slot />
  {#if expanded}{expandedMessage}{:else}{message}{/if}
</button>
