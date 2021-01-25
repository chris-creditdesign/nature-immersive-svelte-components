<script>
  import { onMount } from "svelte";
  import { Stack } from "creditdesign-svelte-components";

  export let menuLinks;
</script>

<style>
  a {
    text-decoration: none;
  }

  nav {
    left: 0;
    width: 100%;
    max-width: none;
    padding: var(--s-1);
  }
</style>

{#if menuLinks && menuLinks.length}
  <nav data-theme="invert" class="font-family:sans-serif">
    <Stack>
      <h2 id="menu" class="font-size:base" tabindex="-1">Menu</h2>
      <ul>
        {#each menuLinks as { text, href }, i}
          <li>
            <a {href}>
              {@html text}
            </a>
          </li>
        {/each}
      </ul>
    </Stack>
  </nav>
{/if}
