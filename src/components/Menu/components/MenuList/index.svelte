<script>
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
    position: fixed;
    top: calc(1.6em + var(--s-1) + var(--s-1));
    left: 0;
    width: 100%;
    max-width: none;
    padding: var(--s-1);
    background-color: var(--black-2);
  }
</style>

<nav data-theme="invert" {style}>
  <SwitcherList>
    {#each menuLinks as { text, href }, i}
      {#if i !== menuLinks.length - 1}
        <li>
          <a {href} on:focus on:blur>
            {@html text}
          </a>
        </li>
      {:else}
        <li>
          <a {href} on:focus on:blur bind:this="{lastMenuLink}">
            {@html text}
          </a>
        </li>
      {/if}
    {/each}
  </SwitcherList>
</nav>
