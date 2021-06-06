<script>
  import { Cluster } from "creditdesign-svelte-components";

  export let className = "";
  export let clusterJustifyContent = "flex-start";
  export let message;
  export let checked = false;

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
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
  }

  span {
    padding: var(--s-2);
  }

  button[role="switch"][aria-checked="true"] :first-child,
  button[role="switch"][aria-checked="false"] :last-child {
    color: var(--text-color-invert);
    background: var(--background-color-invert);
  }
</style>

<Cluster {clusterJustifyContent}>
  <span class="font-family:sans-serif" {id}>{message}</span>

  <button
    aria-checked={checked}
    aria-labelledby={id}
    class={`switch-button font-family:sans-serif ${className}`}
    on:click
    role="switch"
    type="button"
  >
    <span>On</span>
    <span>Off</span>
  </button>
</Cluster>
