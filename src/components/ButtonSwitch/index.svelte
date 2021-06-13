<script>
  import TempCluster from "./temp-components/temp-cluster.svelte";

  export let className = "";
  export let clusterJustifyContent = "flex-start";
  export let clusterSpace = "var(--s-1)";
  export let message;
  export let checked = false;
  export let theme = "";

  let id = `${message
    .toLowerCase()
    .replaceAll(" ", "-")}-${Math.random().toString().slice(-5)}`;
</script>

<style>
  button {
    display: flex;
    align-items: center;
    padding: 0;
    overflow: hidden;
    font-size: inherit;
    background-color: var(--background-color);
    background-image: linear-gradient(
      var(--background-color-invert),
      var(--background-color-invert)
    );
    background-repeat: no-repeat;
    background-position: calc(100% - 2px) 2px;
    background-size: calc(50% - 4px) calc(100% - 4px);
    border-color: var(--text-color-disabled);
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    transition: background-position 100ms ease-in;
  }

  button:hover,
  button:focus {
    background-color: var(--background-color);
  }

  button span {
    padding: var(--s-2);
    transition: color 100ms ease;
  }

  button[aria-checked="true"] {
    background-position: 2px 2px;
  }

  button[aria-checked="true"] :first-child,
  button[aria-checked="false"] :last-child {
    color: var(--text-color-invert);
  }

  button[aria-checked="true"] :last-child,
  button[aria-checked="false"] :first-child {
    color: var(--text-color);
  }
</style>

<TempCluster {clusterSpace} {clusterJustifyContent}>
  <span class="font-family:sans-serif" {id}>{message}</span>

  <button
    aria-checked={checked}
    aria-labelledby={id}
    class={`switch-button font-family:sans-serif ${className}`}
    data-theme={theme}
    on:click
    role="switch"
    type="button"
  >
    <span>On</span>
    <span>Off</span>
  </button>
</TempCluster>
