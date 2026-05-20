<script lang="ts">
  import { createBubbler } from 'svelte/legacy';

  const bubble = createBubbler();
  import { slide } from "svelte/transition";
  import { quadIn, quadOut } from "svelte/easing";
  import { Switcher, Box } from "creditdesign-svelte-components";

  interface Props {
    menuLinks?: any;
    lastMenuLinkElem?: any;
    menuHeight?: number;
  }

  let { menuLinks = [], lastMenuLinkElem = $bindable(null), menuHeight = 0 }: Props = $props();

  let style = `top: ${menuHeight}px;`;
</script>

<style>
  nav {
    position: absolute;

    /* Position the nav just below the Menu compontent */
    top: calc(1.6em + var(--s-1) + var(--s-1));
    left: 0;
    z-index: 999;
    width: 100%;
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
    <Switcher list={true}>
      {#each menuLinks as { text, href }, i}
        {#if i !== menuLinks.length - 1}
          <li>
            <a
              {href}
              onfocus={bubble('focus')}
              onblur={bubble('blur')}
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
              onfocus={bubble('focus')}
              onblur={bubble('blur')}
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
    </Switcher>
  </Box>
</nav>
