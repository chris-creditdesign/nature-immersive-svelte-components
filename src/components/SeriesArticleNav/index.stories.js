import ViewDefault from "./view.default.svelte";
import ViewConstrained from "./view.constrained.svelte";
import seriesArticleNavData from "../preview-content/series-article-nav-data.js";

export default {
  title: "Interactive components/SeriesArticleNav",
};

export const Default = () => ({
  Component: ViewDefault,
  props: {
    className: "test",
    seriesArticleNavData,
  },
});

export const ConstrainedWidth = () => ({
  Component: ViewConstrained,
  props: {
    className: "test",
    seriesArticleNavData,
  },
});

const seriesArticleNavDataNoStand = { ...seriesArticleNavData, stand: undefined };

export const NoStand = () => ({
  Component: ViewConstrained,
  props: {
    className: "test",
    seriesArticleNavData: seriesArticleNavDataNoStand,
  },
});

export const ChangeTextInButton = () => ({
  Component: ViewConstrained,
  props: {
    className: "test",
    seriesArticleNavData: seriesArticleNavDataNoStand,
    message: "Show articles in the series",
    expandedMessage: "Hide articles in the series",
  },
});
