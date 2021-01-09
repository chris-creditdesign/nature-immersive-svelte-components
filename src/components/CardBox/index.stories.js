import { object, select, text, withKnobs } from "@storybook/addon-knobs";
import CardBox from "./index.svelte";
import ViewNested from "./view.nested.svelte";
import cardData from "../preview-content/card-data.js";
import {
  fontSizeOptions,
  headerLevelOptions,
  slotOptions,
  spaceOptions,
  themeOptions,
} from "../preview-content/options.js";
import docs from "./docs.mdx";

export default {
  title: "Layout components/Card/CardBox",
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
  Component: CardBox,
  decorators: [withKnobs],
  props: {
    boxSpace: select("boxSpace", spaceOptions, "var(--s-1)"),
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
    theme: select("theme", themeOptions, "invert"),
  },
});

export const Nested = () => ({
  Component: ViewNested,
  decorators: [withKnobs],
  props: {
    slot: select("slot", slotOptions, "CardBox"),
  },
});
