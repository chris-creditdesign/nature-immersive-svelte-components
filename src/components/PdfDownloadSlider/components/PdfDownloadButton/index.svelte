<script>
  import { buttonElement } from "../../stores/pdf-download-stores.js";
  import DownloadIcon from "../../../icons/DownloadIcon/index.svelte";

  export let expanded;
</script>

<style>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 245px;
    padding: 0;
    cursor: pointer;
    background: none;
    background-color: var(--background-color);
    border-color: var(--pdf-download-accent-color, var(--text-color));
    border-style: solid;
    border-width: 2px;
    transition: border-color 100ms ease-in;
    fill: var(--text-color);
  }

  button:hover,
  button:focus {
    border-color: var(--outline);
    outline: none;
  }
</style>

<button
  bind:this={$buttonElement}
  on:click
  on:focus
  on:blur
  aria-expanded={expanded}
>
  <DownloadIcon width={30} title="Download PDF" />
</button>
