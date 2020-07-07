import ViewDefault from "./view.default.svelte";
import SeriesArticleNav from "./view.constrained.svelte";
import seriesArticleNavData from "../preview-content/series-article-nav-data.js";
import docs from "./docs.mdx";

export default {
  title: "Interactive components/SeriesArticleNav",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: ViewDefault,
  props: {
    className: "test",
    seriesArticleNavData,
  },
});

export const ConstrainedWidth = () => ({
  Component: SeriesArticleNav,
  props: {
    className: "test",
    seriesArticleNavData: {
      headline:
        "<h2>Article series really really really long long long title</h2>",
      stand:
        "<p>Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Hempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>",
      articles: [
        {
          title:
            "<strong>Article 1:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
          url: "#",
          doi: "doi-1",
          published: true,
        },
        {
          title:
            "<strong>Article 2:</strong> Hempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
          url: "#",
          doi: "doi-2",
          published: true,
        },
        {
          title:
            "<strong>Article 3:</strong> Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
          url: "#",
          doi: "doi-3",
          published: true,
        },
        {
          title:
            "<strong>Coming soon:</strong> Article 4 Consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non",
          url: "#",
          doi: "doi-4",
          published: false,
        },
        {
          title:
            "<strong>Coming soon:</strong> Article 5 Hempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
          url: "#",
          doi: "doi-5",
          published: false,
        },
      ],
    },
    expandedMessage: "Close" /* default */,
    message: "Open" /* default */,
  },
});

const seriesArticleNavDataNoStand = {
  ...seriesArticleNavData,
  stand: undefined,
};

export const NoStand = () => ({
  Component: SeriesArticleNav,
  props: {
    className: "test",
    seriesArticleNavData: seriesArticleNavDataNoStand,
  },
});

export const ChangeTextInButton = () => ({
  Component: SeriesArticleNav,
  props: {
    className: "test",
    seriesArticleNavData: seriesArticleNavDataNoStand,
    message: "Show articles in the series",
    expandedMessage: "Hide articles in the series",
  },
});
