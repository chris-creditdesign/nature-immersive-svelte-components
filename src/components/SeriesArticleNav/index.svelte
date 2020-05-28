<script>
  import { onMount, createEventDispatcher, afterUpdate } from "svelte";

  import {
    Box,
    Stack,
    StackList,
    Grid,
    Cluster
  } from "creditdesign-svelte-components";
  import ToggleButton from "../ToggleButton/index.svelte";

  const dispatch = createEventDispatcher();

  export let seriesArticleNavData;

  let { title, blurb, articles, parentDoi } = seriesArticleNavData;
  let mounted = false;
  let expanded = true;

  let handleClick = () => {
    expanded = !expanded;
    dispatch("update");
  };

  onMount(() => {
    mounted = true;
    expanded = false;
  });

  afterUpdate(() => {
    dispatch("update");
  });
</script>

<style>
  nav {
    margin-top: var(--s1);
  }

  .list-item--current {
    border-left: 5px solid var(--link-color);
    padding-left: 10px;
  }
</style>

<Stack>

  {@html title}

  {@html blurb}

  {#if mounted}
    <ToggleButton
      {expanded}
      message="Show articles in series"
      expandedMessage="Hide articles in series"
      on:click={handleClick}
      controls="menu-list" />
  {/if}
</Stack>

<nav id="menu-list" hidden={!expanded}>
  <StackList>
    {#each articles as { title, url, doi, published }}
      <li class:list-item--current={doi === parentDoi}>
        {#if published}
          <a aria-current={doi === parentDoi ? 'page' : null} href={url}>
            {@html title}
          </a>
        {:else}
          {@html title}
        {/if}
      </li>
    {/each}
  </StackList>
</nav>
