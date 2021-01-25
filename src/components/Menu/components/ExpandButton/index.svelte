<script>
  import LogoVeggieBurger from "../../../LogoVeggieBurger/index.svelte";

  export let menuExpanded;
  export let menuLinkFocused;
  export let menuButtonRef = null;

  let handleKeydown = (event) => {
    if (event.key === "Escape" && menuExpanded && menuLinkFocused) {
      dispatch("menu-button-click");
      menuButtonRef.focus();
      return;
    }
    return;
  };
</script>

<style>
  /* Reset the default browser button styles
     To enable the veggieburger svg to be styled */

  /* button {
    padding: 0;
    font-size: var(--font-size-base);
    color: inherit;
    cursor: pointer;
    background-color: inherit;
  } */

  /* button:hover,
  button:focus {
    background-color: var(--outline);
    fill: var(--link-color-active);
  } */

  /* ------------------------------ Veggie burger ----------------------------- */

  /* Animate the veggieburger icon - there's a better way to do this */

  /* :global(.menu__button .closed, .menu__button .open) {
    transition: opacity 300ms ease;
  } */

  /* Open state  */

  /* :global(.menu__button[aria-expanded="true"] .closed) {
    opacity: 0;
  }

  :global(.menu__button[aria-expanded="true"] .open) {
    opacity: 1;
  } */

  /* Closed state */

  /* :global(.menu__button[aria-expanded="false"] .closed) {
    opacity: 1;
  }

  :global(.menu__button[aria-expanded="false"] .open) {
    opacity: 0;
  } */
</style>

<svelte:window on:keydown="{handleKeydown}" />

<button
  on:click
  class="menu__button"
  aria-expanded="{menuExpanded}"
  aria-controls="menu-list"
  data-event-category="menu"
  data-event-action="click"
  data-event-label="button"
  bind:this="{menuButtonRef}"
>
  <!-- <LogoVeggieBurger height="{1.6}" /> -->
  Menu
</button>
