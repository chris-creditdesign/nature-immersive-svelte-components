<script>
  import LogoChevron from "../../../LogoChevron/index.svelte";
  import { buttonElement } from "../../stores/menu-stores.js";

  export let expanded = false;
</script>

<style>
  button {
    display: flex;
    align-items: center;
    height: 1.8em;
    padding: 0 var(--s-1);
    font-size: inherit;
    color: var(--link-color-invert);
    background: none;
    background-color: var(--background-color-invert);
    border-color: var(--link-color-invert);
    border-style: solid;
    border-width: 1px;
  }

  button:hover,
  button:focus {
    color: var(--link-color-active);
    background-color: var(--outline);
    border-color: var(--link-color-active);
    fill: var(--link-color-active);
  }

  button[aria-expanded="true"] {
    color: var(--link-color-active);
    background-color: var(--white-2);
    border-color: var(--link-color-active);
    fill: var(--link-color-active);
  }

  .toggle-icon {
    margin-left: var(--s-2);
    transition: transform 250ms ease;
    transform: rotate(0deg);
  }

  /* If prefers reduced motion is set, don't animate the
    triangle spinning */
  @media (prefers-reduced-motion: reduce) {
    .toggle-icon {
      transition: none;
    }
  }

  button[aria-expanded="true"] .toggle-icon {
    transform: rotate(180deg);
  }
</style>

<button
  aria-expanded="{expanded}"
  bind:this="{$buttonElement}"
  on:click
  on:focus
  on:blur
  data-event-category="menu"
  data-event-action="click"
  data-event-label="button"
>
  <span>Menu</span>
  <span class="toggle-icon">
    <LogoChevron height="0.3" />
  </span>
</button>
