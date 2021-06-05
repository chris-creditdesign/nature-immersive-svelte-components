<script>
  import { slide } from "svelte/transition";
  import { quadIn, quadOut } from "svelte/easing";

  export let menuLinks = [];
  export let lastMenuLinkElem = null;
  export let menuHeight = 0;

  let style = `top: ${menuHeight}px;`;
</script>

<style>
  nav {
    --switcher-min-width: var(--measure);
    --switcher-space: var(--s-1);
    --modifier: calc(
      var(--switcher-min-width) - (100% - var(--switcher-space))
    );

    position: absolute;
    top: calc(1.6em + var(--s-1) + var(--s-1));
    left: 0;
    width: 100vw;
    max-width: none;
    padding: var(--s-2);
    border-top: 1px solid var(--text-color-invert);
  }

  /* If prefers reduced motion is set, don't animate the
    triangle spinning */
  @media (prefers-reduced-motion: reduce) {
    nav {
      animation-duration: 1ms !important;
      animation-delay: 0ms !important;
    }
  }

  .menu-switcher {
    overflow: hidden;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: none;
    padding: 0;
    margin: calc((var(--switcher-space) / 2) * -1);
    list-style: none;
  }

  li {
    flex-basis: calc(var(--modifier) * 999);
    min-width: fit-content;
    margin: calc(var(--switcher-space) / 2);
  }

  /* Used for the case where there are more than 8 list items
	so that the will be stacked automatically. Appiled with JS. */
  .flex-basis\:100 {
    flex-basis: 100%;
  }
</style>

<nav
  data-theme="menu"
  {style}
  in:slide={{ duration: 250, easing: quadOut }}
  out:slide={{ duration: 250, easing: quadIn }}
  class="font-family:sans-serif"
>
  <div class="menu-switcher">
    <ul>
      {#each menuLinks as { text, href }, i}
        {#if i !== menuLinks.length - 1}
          <li class:flex-basis:100={menuLinks.length > 8}>
            <a
              {href}
              on:focus
              on:blur
              data-event-category="menu"
              data-event-action="click"
              data-event-label={text}
              class="text-decoration:none"
            >
              {@html text}
            </a>
          </li>
        {:else}
          <li class:flex-basis:100={menuLinks.length > 8}>
            <a
              {href}
              on:focus
              on:blur
              bind:this={lastMenuLinkElem}
              data-event-category="menu"
              data-event-action="click"
              data-event-label={text}
              class="text-decoration:none"
            >
              {@html text}
            </a>
          </li>
        {/if}
      {/each}
    </ul>
  </div>
</nav>
