<script>
  /*
   * Simple widget to add in article navigation between a series of related articles.
   * 
   * Will dispatch an "update" event when the button is clicked 
   * and after the component updates.
   *
   * `const dispatch = createEventDispatcher();`
   *
   * `dispatch("update");`
   *
   * This is useful when used as a widget placed inside a Core Media article 
   * to send a message to the parent article that the iframe needs to be resized.
   *
   * Normally, the article in which the widget is placed will also be part of the 
   * list of articles listed to - as it is part of the series. If the `parentDoi` 
   * listed in the `seriesArticleNavData` object matches the doi of the current 
   * page - this is indicated with a left border and setting `aria-current="page"` 
   * on the link.

   * @component
*/
  import { onMount, createEventDispatcher, afterUpdate } from "svelte";
  import { Stack, Box, Cluster } from "creditdesign-svelte-components";
  import Header from "../../Header/index.svelte";
  import ExpandButton from "../../buttons/ExpandButton/index.svelte";

  const dispatch = createEventDispatcher();

  export let articleData;
  export let articles;
  export let className = "";
  export let expandedMessage = "Close";
  export let headerLevel = "h2";
  export let headline;
  export let headlineFontSize = "big-2";
  export let headlineFontWeight = "bold";
  export let message = "Open";
  export let stand;
  export let stackSpace = "var(--s0)";
  export let headerStackSpace = "var(--s-3)";
  export let boxSpace = "var(--s-1)";
  /**
   * Flexbox align-items between headline/standfirst and button group.
   */
  export let alignItems = "flex-start";
  /**
   * Optional to add `data-theme` to wrapper and button element.
   */
  export let theme = "";

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
  a {
    text-decoration: none;
  }

  .list-item--current {
    padding-left: 10px;
    border-left: 5px solid
      var(--color--link--component, var(--color--link--global));
  }
</style>

<div
  class={`series-article-nav font-size:small font-family:sans-serif ${className}`}
  data-theme={theme}
>
  <Box {boxSpace}>
    <Stack {stackSpace}>
      <Cluster {alignItems}>
        <div class="cluster__grow">
          <Stack stackSpace={headerStackSpace}>
            <Header
              text={headline}
              {headerLevel}
              {headlineFontSize}
              {headlineFontWeight}
            />

            {#if stand}
              <p>
                {@html stand}
              </p>
            {/if}
          </Stack>
        </div>

        {#if mounted}
          <ExpandButton
            {expanded}
            {message}
            {expandedMessage}
            {theme}
            on:click={handleClick}
          />
        {/if}
      </Cluster>

      {#if expanded}
        <Stack {stackSpace} list={true}>
          {#each articles as { title, url, doi, published }}
            <li class:list-item--current={doi === parentDoi}>
              {#if published}
                <a
                  aria-current={doi === parentDoi ? "page" : null}
                  href={url}
                  target="_parent"
                  data-track="click"
                  data-event-category="article-series-link"
                  data-event-action="click"
                  data-event-label={`from ${parentDoi} to ${url}`}
                >
                  {@html title}
                </a>
              {:else}
                {@html title}
              {/if}
            </li>
          {/each}
        </Stack>
      {/if}
    </Stack>
  </Box>
</div>
