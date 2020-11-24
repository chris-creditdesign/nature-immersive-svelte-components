import RelatedArticleContainer from "./index.svelte";
import docs from "./docs.mdx";

let cardData = {
  altText: "This is the alt text",
  srcURL: "img/image.jpg",
  headline: "Headline",
  href: "https://www.nature.com",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus.",
};

export default {
  title: "Layout components/RelatedArticleContainer",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: RelatedArticleContainer,
  props: {
    headline: "Related articles" /* default */,
    relatedArticleFlexBasis: "20ch" /* default */,
    relatedArticleFlexGap: "var(--s-1)" /* default */,
    cardStackSpace: "var(--s-1)" /* default */,
    cardGridSpace: "var(--s-1)" /* default */,
    relatedArticles: [
      {
        altText: "This is the alt text",
        srcURL: "img/image.jpg",
        headline: "Article 1",
        href: "https://www.nature.com",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus.",
      },
      {
        altText: "This is the alt text",
        srcURL: "img/image.jpg",
        headline: "Article 2",
        href: "https://www.nature.com",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus.",
      },
      {
        altText: "This is the alt text",
        srcURL: "img/image.jpg",
        headline: "Article 3",
        href: "https://www.nature.com",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus.",
      },
    ],
  },
});

export const DifferentHeadline = () => ({
  Component: RelatedArticleContainer,
  props: {
    headline: "More like this",
    relatedArticles: [cardData, cardData, cardData],
  },
});

export const NoHeadline = () => ({
  Component: RelatedArticleContainer,
  props: {
    headline: null,
    relatedArticles: [cardData, cardData, cardData],
  },
});

export const ManyArticles = () => ({
  Component: RelatedArticleContainer,
  props: {
    relatedArticles: [
      cardData,
      cardData,
      cardData,
      cardData,
      cardData,
      cardData,
      cardData,
    ],
  },
});

export const OneArticle = () => ({
  Component: RelatedArticleContainer,
  props: {
    relatedArticles: [cardData],
  },
});

export const LargerGap = () => ({
  Component: RelatedArticleContainer,
  props: {
    relatedArticleFlexGap: "var(--s3)",
    cardGridSpace: "var(--s3)",
    relatedArticles: [cardData, cardData, cardData],
  },
});

export const WiderBoxes = () => ({
  Component: RelatedArticleContainer,
  props: {
    relatedArticleFlexBasis: "40ch",
    relatedArticles: [cardData, cardData, cardData],
  },
});
