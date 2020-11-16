<script>
  import { Stack } from "creditdesign-svelte-components";
  import CardSideImageBox from "../CardSideImageBox/index.svelte";

  export let headline = "Related articles";
  export let relatedArticleFlexBasis = "";
  export let relatedArticleFlexGap = "";
  export let cardStackSpace;
  export let cardGridSpace;
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

    display: flex;
    flex-wrap: wrap;
    gap: var(
      --related-article-flex-gap--component,
      var(--related-article-flex-gap--global)
    );
  }

  .related-article-container__article {
    flex-basis: var(
      --related-article-flex-basis--component,
      var(--related-article-flex-basis--global)
    );
    flex-shrink: 1;
    flex-grow: 1;
  }
</style>

<Stack>
  <h2 class="font-family:sans-serif border-above">
    {@html headline}
  </h2>
  <div class="related-article-container" {style}>
    {#each relatedArticles as cardData}
      <div class="related-article-container__article">
        <CardSideImageBox
          headerLevel="h3"
          {cardData}
          stackSpace="{cardStackSpace}"
          gridSpace="{cardGridSpace}"
        />
      </div>
    {/each}
  </div>
</Stack>
