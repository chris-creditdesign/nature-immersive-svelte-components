<script>
  import { onMount, createEventDispatcher, afterUpdate } from "svelte";
  import { Stack } from "creditdesign-svelte-components";
  import Header from "../Header/index.svelte";
  import ToggleButton from "../ToggleButton/index.svelte";

  const dispatch = createEventDispatcher();

  export let articleData;
  export let seriesArticleNavData;
  export let message = "Open";
  export let expandedMessage = "Close";
  export let headerLevel = "h2";
  export let headlineFontSize = "big-2";
  export let headlineFontWeight = "bold";
  export let className = "";

  let { headline, stand, articles } = seriesArticleNavData;
  let { doi: parentDoi } = articleData;
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
  ul {
    padding: 0;
    list-style: none;
  }

  li {
    margin-top: var(--s-1);
  }

  li:first-of-type {
    margin-top: 0;
  }

  .list-item--current {
    padding-left: 10px;
    border-left: 5px solid var(--link-color);
  }
</style>

<div
  class="{`series-article-nav font-size:small font-family:sans-serif ${className}`}"
>
  <Stack stackSpace="var(--s1)">
    <Stack stackSpace="var(--s-3)">
      <Header
        text="{headline}"
        headerLevel="{headerLevel}"
        headlineFontSize="{headlineFontSize}"
        headlineFontWeight="{headlineFontWeight}"
      />

      {#if stand}
        <p>
          {@html stand}
        </p>
      {/if}
    </Stack>

    {#if mounted}
      <ToggleButton
        expanded="{expanded}"
        message="{message}"
        expandedMessage="{expandedMessage}"
        on:click="{handleClick}"
      />
    {/if}

    <ul hidden="{!expanded}">
      {#each articles as { title, url, doi, published }}
        <li class:list-item--current="{doi === parentDoi}">
          {#if published}
            <a
              aria-current="{doi === parentDoi ? 'page' : null}"
              href="{url}"
              target="_parent"
              data-track="click"
              data-event-category="article-series-link"
              data-event-action="click"
              data-event-label="{`from ${parentDoi} to ${url}`}"
            >
              {@html title}
            </a>
          {:else}
            {@html title}
          {/if}
        </li>
      {/each}
    </ul>
  </Stack>
</div>
