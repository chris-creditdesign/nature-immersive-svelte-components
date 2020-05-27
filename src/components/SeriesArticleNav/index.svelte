<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import { Box, Stack, StackList } from "creditdesign-svelte-components";
  import ToggleButton from "../ToggleButton/index.svelte";
  import LogoTriangle from "../LogoTriangle/index.svelte";

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
  .container {
    background-color: var(--white-1);
    padding: var(--s-1);
    border-radius: 5px;
  }

  .list-container {
    margin-top: var(--s1);
  }

  h1 {
    font-size: var(--font-size-base);
    margin-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    margin-right: var(--s-1);
  }

  p {
    margin-top: var(--s-1);
    margin-bottom: 0;
  }

  .current {
    border-left: 5px solid var(--link-color);
    padding-left: 10px;
  }

  .cluster-no-margin {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-between;
  }

  :global(button.button-with-triangle) {
    display: flex;
    align-items: center;
  }

  :global(button.button-with-triangle > svg) {
    fill: var(--white-1);
    margin-right: var(--s-3);
    transition: transform 0.3s ease;
    transform: rotate(0deg);
  }

  /* If prefers reduced motion is set, don't animate the
    triangle spinning */
  @media (prefers-reduced-motion: reduce) {
    :global(button.button-with-triangle > svg) {
      transition: none;
    }
  }

  :global(button.button-with-triangle[aria-expanded="true"] > svg) {
    transform: rotate(180deg);
  }
</style>

<div class={`${className} container`}>

  <div class="cluster-no-margin">
    <header>
      <h1>
        {@html title}
      </h1>

      <p>
        {@html blurb}
      </p>
    </header>

    {#if mounted}
      <ToggleButton
        className="button-with-triangle"
        {expanded}
        on:click={handleClick}
        controls="menu-list">
        <LogoTriangle height="0.5" />
      </ToggleButton>
    {/if}
  </div>

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
            <li class:current={doi === parentDoi}>
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

</div>
