import { object, select, text, withKnobs } from "@storybook/addon-knobs";
import RelatedArticleContainer from "./index.svelte";
import {
  headerLevelOptions,
  fontSizeOptions,
  measureOptions,
  spaceOptions,
} from "../preview-content/options.js";
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
      "var(--s6)"
    ),
    relatedArticleFlexGap: select(
      "relatedArticleFlexGap",
      spaceOptions,
      "var(--s-1)"
    ),
    relatedArticles: object("relatedArticles", [cardData, cardData, cardData]),
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
      "var(--s6)"
    ),
    relatedArticleFlexGap: select(
      "relatedArticleFlexGap",
      spaceOptions,
      "var(--s-1)"
    ),
    relatedArticles: object("relatedArticles", [
      cardData,
      cardData,
      cardData,
      cardData,
      cardData,
      cardData,
      cardData,
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
      "var(--s6)"
    ),
    relatedArticleFlexGap: select(
      "relatedArticleFlexGap",
      spaceOptions,
      "var(--s-1)"
    ),
    relatedArticles: object("relatedArticles", [cardData]),
  },
});
