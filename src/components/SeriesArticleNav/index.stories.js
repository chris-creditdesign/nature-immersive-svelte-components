import { object, select, text, withKnobs } from "@storybook/addon-knobs";
import SeriesArticleNav from "./index.svelte";
import {
  headerLevelOptions,
  fontSizeOptions,
  fontWeightOptions,
} from "../preview-content/options.js";
import docs from "./docs.mdx";

export default {
  title: "Interactive components/SeriesArticleNav",
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
  Component: SeriesArticleNav,
  decorators: [withKnobs],
  props: {
    className: text("className", "test-class"),
    articleData: object("articleData", { doi: "doi-1" }),
    seriesArticleNavData: {
      headline: text(
        "headline",
        "Headline headline headline",
        "seriesArticleNavData"
      ),
      stand: text(
        "stand",
        "Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Hempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
        "seriesArticleNavData"
      ),
      articles: object(
        "articles",
        [
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
        "seriesArticleNavData"
      ),
    },
    expandedMessage: text("expandedMessage", "Close"),
    message: text("message", "Open"),
    headerLevel: select("headerLevel", headerLevelOptions, "h2"),
    headlineFontSize: select("headlineFontSize", fontSizeOptions, "big-2"),
    headlineFontWeight: select("headlineFontWeight", fontWeightOptions, "bold"),
  },
});
