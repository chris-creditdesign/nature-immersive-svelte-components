<script>
  import { slide } from "svelte/transition";
  import { quadIn, quadOut } from "svelte/easing";
  import { SwitcherList, Box } from "creditdesign-svelte-components";

  export let menuLinks = [];
  export let lastMenuLinkElem = null;
  export let menuHeight = 0;

  let style = `top: ${menuHeight}px;`;
</script>

<style>
  nav {
    position: absolute;

    /* Position the nav just below the Menu compontent */
    top: calc(1.6em + var(--s-1) + var(--s-1));
    left: 0;
    width: 100vw;
    max-width: none;
    border-top: 1px solid var(--color--text-invert);
  }

  /* If prefers reduced motion is set, don't animate the
    triangle spinning */
  @media (prefers-reduced-motion: reduce) {
    nav {
      animation-duration: 1ms !important;
      animation-delay: 0ms !important;
    }
  }

  li {
    min-width: fit-content;
  }
</style>

<nav
  data-theme="menu"
  {style}
  in:slide={{ duration: 250, easing: quadOut }}
  out:slide={{ duration: 250, easing: quadIn }}
  class="font-family:sans-serif"
>
  <Box boxSpace="var(--s-2)">
    <SwitcherList>
      {#each menuLinks as { text, href }, i}
        {#if i !== menuLinks.length - 1}
          <li>
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
          <li>
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
    </SwitcherList>
  </Box>
</nav>
