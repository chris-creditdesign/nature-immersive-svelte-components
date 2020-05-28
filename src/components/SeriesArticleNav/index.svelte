<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import {
    Box,
    Stack,
    StackList,
    Grid,
    Cluster
  } from "creditdesign-svelte-components";
  import ToggleButton from "../ToggleButton/index.svelte";

  const dispatch = createEventDispatcher();

  export let className = "";
  export let seriesArticleNavData;
  export let prefersReducedMotion = false;

  let { title, blurb, articles, parentDoi } = seriesArticleNavData;
  let mounted = false;
  let expanded = true;

  $: duration = prefersReducedMotion ? 0 : 300;

  let handleClick = () => {
    expanded = !expanded;
  };

  onMount(() => {
    mounted = true;
    expanded = false;
  });

  function sayHello() {
    dispatch("update");
  }
</script>

<style>
  h1 {
    font-size: var(--font-size-base);
  }

  .container {
    background-color: var(--white-1);
    padding: var(--s-1);
    border-radius: 5px;
  }

  .list-container {
    margin-top: var(--s1);
  }

  .list-item--current {
    border-left: 5px solid var(--link-color);
    padding-left: 10px;
  }
</style>

<main class={`${className} container`}>

  <Stack>
    <h1>
      {@html title}
    </h1>

    <p>
      {@html blurb}
    </p>

    {#if mounted}
      <ToggleButton
        {expanded}
        message="Show articles in series"
        expandedMessage="Hide articles in series"
        on:click={handleClick}
        controls="menu-list" />
    {/if}
  </Stack>

  <nav id="menu-list">
    {#if expanded}
      <div
        class="list-container"
        transition:fade={{ delay: 0, duration }}
        on:introstart={() => dispatch('update')}
        on:outrostart={() => dispatch('update')}
        on:introend={() => dispatch('update')}
        on:outroend={() => dispatch('update')}>
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
      </div>
    {/if}
  </nav>

</main>
