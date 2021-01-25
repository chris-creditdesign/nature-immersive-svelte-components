<script>
  import LogoChevron from "../../../LogoChevron/index.svelte";

  export let menuButtonRef;
  export let expanded = false;
</script>

<style>
  button {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 var(--s-1);
    font-size: inherit;
    color: var(--link-color-invert);
    background: none;
    background-color: var(--background-color-invert);
    border: none;
  }

  button:hover,
  button:focus {
    color: var(--link-color-active);
    background-color: var(--outline);
    fill: var(--link-color-active);
  }

  button[aria-expanded="true"] {
    color: var(--link-color-active);
    background-color: var(--white-2);
    fill: var(--link-color-active);
  }

  .toggle-icon {
    margin-left: var(--s-2);
    transition: transform 0.3s ease;
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

<button aria-expanded="{expanded}" bind:this="{menuButtonRef}" on:click on:blur>
  <span>Menu</span>
  <span class="toggle-icon">
    <LogoChevron height="0.3" />
  </span>
</button>
