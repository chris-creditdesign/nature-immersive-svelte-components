<script>
  import { Stack } from "creditdesign-svelte-components";
  import CardSideImageBox from "../CardSideImageBox/index.svelte";

  export let headline = "Related articles";
  export let relatedArticleFlexBasis = "";
  export let relatedArticleFlexGap = "";
  export let relatedArticles;

  let relatedArticleFlexGapComponent = relatedArticleFlexGap
    ? `--related-article-flex-gap--component: ${relatedArticleFlexGap};`
    : "";

  let relatedArticleFlexBasisComponent = relatedArticleFlexBasis
    ? `--related-article-flex-basis--component: ${relatedArticleFlexBasis};`
    : "";

  let style = `${relatedArticleFlexGapComponent} ${relatedArticleFlexBasisComponent}`;
</script>

<style>
  :global(:root) {
    --related-article-flex-gap--global: var(--s-1);
    --related-article-flex-basis--global: 20ch;
  }

  .related-article-container {
    --related-article-flex-gap--component: initial;
    --related-article-flex-basis--component: initial;
    --related-article-flex-gap: var(
      --related-article-flex-gap--component,
      var(--related-article-flex-gap--global)
    );
    --related-article-flex-basis: var(
      --related-article-flex-basis--component,
      var(--related-article-flex-basis--global)
    );
  }

  .related-article-containe__inner {
    display: flex;
    flex-wrap: wrap;
    margin: 1rem;
    margin: calc(var(--related-article-flex-gap) / 2 * -1);
  }

  .related-article-container__article {
    flex-basis: var(--related-article-flex-basis);
    flex-shrink: 1;
    flex-grow: 1;
    margin: 1rem;
    margin: calc(var(--related-article-flex-gap) / 2);
  }
</style>

<aside>
  <Stack>
    {#if headline}
      <h2 class="font-family:sans-serif border-above">
        {@html headline}
      </h2>
    {/if}
    <div class="related-article-container" {style}>
      <div class="related-article-containe__inner">
        {#each relatedArticles as cardData}
          <div
            class="related-article-container__article font-family:sans-serif
            invert"
          >
            <CardSideImageBox
              headerLevel="none"
              headlineFontSize="big-1"
              {cardData}
            />
          </div>
        {/each}
      </div>
    </div>
  </Stack>
</aside>
