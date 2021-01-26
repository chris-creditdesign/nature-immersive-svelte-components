<script>
  import { slide } from "svelte/transition";
  import { quadIn, quadOut } from "svelte/easing";
  import { SwitcherList } from "creditdesign-svelte-components";

  export let menuLinks;
  export let lastMenuLink;
  export let menuHeight;

  let style = `top: ${menuHeight}px;`;
</script>

<style>
  a {
    text-decoration: none;
  }

  nav {
    position: absolute;
    top: calc(1.6em + var(--s-1) + var(--s-1));
    left: 0;
    width: 100vw;
    max-width: none;
    padding: var(--s-1);
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
</style>

<nav
  data-theme="invert"
  {style}
  in:slide="{{ duration: 250, easing: quadOut }}"
  out:slide="{{ duration: 250, easing: quadIn }}"
>
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
            data-event-label="{text}"
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
            bind:this="{lastMenuLink}"
            data-event-category="menu"
            data-event-action="click"
            data-event-label="{text}"
          >
            {@html text}
          </a>
        </li>
      {/if}
    {/each}
  </SwitcherList>
</nav>
