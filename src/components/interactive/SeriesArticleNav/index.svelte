<script lang="ts">
  /*
   *
   * Will call the `onupdate` callback when the button is clicked and after the
   * component updates. This is useful when used as a widget placed inside a Core Media
   * article to send a message to the parent article that the iframe needs to be resized.
   *
   * Normally, the article in which the widget is placed will also be part of the
   * list of articles listed to - as it is part of the series. If the `parentDoi`
   * listed in the `seriesArticleNavData` object matches the doi of the current
   * page - this is indicated with a left border and setting `aria-current="page"`
   * on the link.
   *
   * @component
   */
  import { onMount } from "svelte";
  import { Stack, Box, Cluster } from "creditdesign-svelte-components";
  import Header from "../../Header/index.svelte";
  import ExpandButton from "../../buttons/ExpandButton/index.svelte";

  interface Props {
    articleData: any;
    articles: any[];
    className?: string;
    expandedMessage?: string;
    headerLevel?: string;
    headline: string;
    headlineFontSize?: string;
    headlineFontWeight?: string;
    message?: string;
    stand?: string;
    stackSpace?: string;
    headerStackSpace?: string;
    boxSpace?: string;
    /** Flexbox align-items between headline/standfirst and button group. */
    alignItems?: string;
    /** Optional to add `data-theme` to wrapper and button element. */
    theme?: string;
    onupdate?: () => void;
  }

  let {
    articleData,
    articles,
    className = "",
    expandedMessage = "Close",
    headerLevel = "h2",
    headline,
    headlineFontSize = "big-2",
    headlineFontWeight = "bold",
    message = "Open",
    stand,
    stackSpace = "var(--s0)",
    headerStackSpace = "var(--s-3)",
    boxSpace = "var(--s-1)",
    alignItems = "flex-start",
    theme = "",
    onupdate
  }: Props = $props();

  let parentDoi = $derived(articleData.doi);
  let mounted = $state(false);
  let expanded = $state(true);

  let handleClick = () => {
    expanded = !expanded;
    onupdate?.();
  };

  onMount(() => {
    mounted = true;
    expanded = false;
  });

  $effect(() => {
    // Signal parent (e.g. iframe host) that component has updated and may need resizing.
    // Reading `expanded` ensures this re-runs whenever it changes.
    void expanded;
    if (mounted) {
      onupdate?.();
    }
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
            onclick={handleClick}
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
