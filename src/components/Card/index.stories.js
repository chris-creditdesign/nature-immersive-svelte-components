import { object, select, text, withKnobs } from "@storybook/addon-knobs";
import Card from "./index.svelte";
import cardData from "../preview-content/card-data.js";
import {
  headerLevelOptions,
  fontSizeOptions,
  spaceOptions,
} from "../preview-content/options.js";
import docs from "./docs.mdx";

export default {
  title: "Layout components/Card/Card",
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
  Component: Card,
  decorators: [withKnobs],
  props: {
    cardData: object("cardData", { ...cardData }),
    cardHeaderStackSpace: select(
      "cardHeaderStackSpace",
      spaceOptions,
      "var(--s-4)"
    ),
    className: text("className", "card-class"),
    headerLevel: select("headerLevel", headerLevelOptions, "h2"),
    headlineFontSize: select("headlineFontSize", fontSizeOptions, "big-2"),
    id: text("id", "card-id"),
    stackSpace: select("stackSpace", spaceOptions, "var(--s-1)"),
  },
});
