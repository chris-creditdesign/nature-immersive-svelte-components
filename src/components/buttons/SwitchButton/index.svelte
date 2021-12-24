<script>
  /**
   * Button element with `role="switch"` and `type="button"` applied.
   *
   * When the button is in its 'on' state, `aria-checked` will be true.
   *
   * @component
   */
  import { Cluster } from "creditdesign-svelte-components";

  /**
   * Optional to add extra class to button element
   */
  export let className = "";
  /**
   * Flexbox justify-content on message and button
   * within container div
   */
  export let clusterJustifyContent = "flex-start";
  /**
   * Flexbox gap space between message and button
   */
  export let clusterSpace = "var(--s-1)";
  /**
   * Text to place beside button
   */
  export let message = "Switch:";
  /**
   * State of `aria-checked` attribute on button.
   */
  export let checked = false;
  /**
   * Option to add `data-theme` to button element.
   */
  export let theme = "";

  let id = `${message.toLowerCase().replaceAll(" ", "-")}-${Math.random()
    .toString()
    .slice(-5)}`;
</script>

<style>
  button {
    padding-left: 0;
    padding-right: 0;
    background-color: var(--color--background);
    background-image: linear-gradient(
      var(--color--background-invert),
      var(--color--background-invert)
    );
    background-repeat: no-repeat;
    background-position: calc(100% - 2px) 2px;
    background-size: calc(50% - 4px) calc(100% - 4px);
    transition: background-position 100ms ease-in;
  }

  button:hover,
  button:focus {
    background-color: var(--color--background);
  }

  button span {
    transition: color 100ms ease;
  }

  button span:first-child {
    padding-right: var(--s-4);
    padding-left: var(--s-2);
  }

  button span:last-child {
    padding-right: var(--s-2);
    padding-left: var(--s-4);
  }

  button[aria-checked="true"] {
    background-position: 2px 2px;
  }

  button[aria-checked="true"] span:first-child,
  button[aria-checked="false"] span:last-child {
    color: var(--color--text-invert);
  }

  button[aria-checked="true"] span:last-child,
  button[aria-checked="false"] span:first-child {
    color: var(--color--text);
  }
</style>

<Cluster {clusterSpace} {clusterJustifyContent}>
  <span class="font-family:sans-serif" {id}>{message}</span>

  <button
    aria-checked={checked}
    aria-labelledby={id}
    class={`font-family:sans-serif ${className}`}
    data-theme={theme}
    on:click
    role="switch"
    type="button"
  >
    <span>On</span>
    <span>Off</span>
  </button>
</Cluster>
