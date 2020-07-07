import ViewDefault from "./view.default.svelte";
import ViewConstrained from "./view.constrained.svelte";
import cardData from "../preview-content/card-data.js";

const cardDataNoImage = { ...cardData, srcURL: undefined };
const cardDataNoImageNoAuthor = {
  ...cardData,
  srcURL: undefined,
  authorName: undefined,
};
const cardDataNoImageNoAuthorNoJournal = {
  ...cardData,
  srcURL: undefined,
  authorName: undefined,
  journal: undefined,
};

export default {
  title: "Layout components/Card/Card",
};

export const Default = () => ({
  Component: ViewDefault,
  props: {
    className: "test",
    cardData,
  },
});

export const ConstrainedWidth = () => ({
  Component: ViewConstrained,
  props: {
    className: "test",
    cardData,
  },
});

export const NoImage = () => ({
  Component: ViewConstrained,
  props: {
    className: "test",
    cardData: cardDataNoImage,
  },
});

export const NoAuthor = () => ({
  Component: ViewConstrained,
  props: {
    className: "test",
    cardData: cardDataNoImageNoAuthor,
  },
});

export const NoJournal = () => ({
  Component: ViewConstrained,
  props: {
    className: "test",
    cardData: cardDataNoImageNoAuthorNoJournal,
  },
});
