<script>
  import { onMount } from "svelte";
  import { slide, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { Box, Stack, StackList } from "creditdesign-svelte-components";
  import ToggleButton from "../ToggleButton/index.svelte";
  import LogoTriangle from "../LogoTriangle/index.svelte";

  export let className = "";
  export let seriesArticleNavData;
  export let parentDoi = "";
  export let prefersReducedMotion = false;

  let { title, articles } = seriesArticleNavData;
  let expanded = false;
  let mounted = false;

  $: duration = prefersReducedMotion ? 0 : 300;

  let handleClick = () => {
    expanded = !expanded;
  };

  onMount(() => {
    mounted = true;
  });
</script>

<style>
  h1 {
    font-size: var(--font-size-base);
    margin-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    margin-right: var(--s-1);
  }

  .cluster-no-margin {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
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
    triangle spining */
  @media (prefers-reduced-motion: reduce) {
    :global(button.button-with-triangle > svg) {
      transition: none;
    }
  }

  :global(button.button-with-triangle[aria-expanded="true"] > svg) {
    transform: rotate(180deg);
  }
</style>

<Box>
  <Stack>
    <div class="cluster-no-margin">
      <h1>{title}</h1>

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

    <nav class={className} id="menu-list">
      {#if expanded}
        <div transition:fade={{ delay: 0, duration }}>
          <StackList>
            {#each articles as { title, url, doi, published }}
              <li>
                {#if published}
                  <a
                    aria-current={doi === parentDoi ? 'page' : null}
                    href={url}>
                    {title}
                  </a>
                {:else}{title}{/if}
              </li>
            {/each}
          </StackList>
        </div>
      {/if}
    </nav>
  </Stack>
</Box>
