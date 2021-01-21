import { object, select, text, withKnobs } from "@storybook/addon-knobs";
import RelatedArticleContainer from "./index.svelte";
import { measureOptions, spaceOptions } from "../preview-content/options.js";
import docs from "./docs.mdx";

let cardData1 = {
  altText: "This is the alt text",
  srcURL: "img/image.jpg",
  headline: "Headline consectetur ipsum dolor sit amet",
  href: "https://www.nature.com",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus.",
};

let cardData2 = {
  altText: "This is the alt text",
  srcURL: "img/image.jpg",
  headline: "Headline adipisicing",
  href: "https://www.nature.com",
  text:
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
};

let cardData3 = {
  altText: "This is the alt text",
  srcURL: "img/image.jpg",
  headline: "Headline",
  href: "https://www.nature.com",
  text: "Lorem ipsum dolor sit amet",
};

export default {
  title: "Layout components/RelatedArticleContainer",
  parameters: {
    docs: {
      page: docs,
    },
    knobs: {
      escapeHTML: false,
    },
  },
};

export const Default = () => ({
  Component: RelatedArticleContainer,
  decorators: [withKnobs],
  props: {
    headline: text("headline", "Related articles"),
    relatedArticleFlexBasis: select(
      "relatedArticleFlexBasis",
      measureOptions,
      "20ch"
    ),
    relatedArticleFlexGap: select(
      "relatedArticleFlexGap",
      spaceOptions,
      "var(--s-1)"
    ),
    relatedArticles: object("relatedArticles", [
      cardData1,
      cardData2,
      cardData3,
    ]),
  },
});

export const ManyArticles = () => ({
  Component: RelatedArticleContainer,
  decorators: [withKnobs],
  props: {
    headline: text("headline", "Related articles"),
    relatedArticleFlexBasis: select(
      "relatedArticleFlexBasis",
      measureOptions,
      "20ch"
    ),
    relatedArticleFlexGap: select(
      "relatedArticleFlexGap",
      spaceOptions,
      "var(--s-1)"
    ),
    relatedArticles: object("relatedArticles", [
      cardData2,
      cardData1,
      cardData1,
      cardData2,
      cardData3,
      cardData1,
      cardData3,
    ]),
  },
});

export const OneArticle = () => ({
  Component: RelatedArticleContainer,
  decorators: [withKnobs],
  props: {
    headline: text("headline", "Related articles"),
    relatedArticleFlexBasis: select(
      "relatedArticleFlexBasis",
      measureOptions,
      "20ch"
    ),
    relatedArticleFlexGap: select(
      "relatedArticleFlexGap",
      spaceOptions,
      "var(--s-1)"
    ),
    relatedArticles: object("relatedArticles", [cardData1]),
  },
});
