<script>
  import { createEventDispatcher } from "svelte";
  import LogoVeggieBurger from "../../../LogoVeggieBurger/index.svelte";

  export let menuExpanded;
  let dispatch = createEventDispatcher();
</script>

<style>
  /* Reset the default browser button styles
     To enable the veggieburger svg to be styled */
  button {
    font-size: var(--font-size-base);
    cursor: pointer;
    background-color: inherit;
  }

  button:hover,
  button:focus {
    background-color: var(--outline);
    fill: var(--link-color-active);
  }

  /* ------------------------------ Veggie burger ----------------------------- */

  /* Animate the veggieburger icon - there's a better way to do this */
  :global(.menu__button .closed, .menu__button .open) {
    transition: opacity 300ms ease;
  }

  /* Open state  */
  :global(.menu__button[aria-expanded="true"] .closed) {
    opacity: 0;
  }

  :global(.menu__button[aria-expanded="true"] .open) {
    opacity: 1;
  }

  /* Closed state */
  :global(.menu__button[aria-expanded="false"] .closed) {
    opacity: 1;
  }

  :global(.menu__button[aria-expanded="false"] .open) {
    opacity: 0;
  }
</style>

<button
  on:click="{() => dispatch('menu-button-click')}"
  class="menu__button"
  id="menu-expand-button"
  aria-expanded="{menuExpanded}"
  aria-controls="menu-list"
  data-event-category="menu"
  data-event-action="click"
  data-event-label="button"
>
  <LogoVeggieBurger height="{1.6}" />
</button>
