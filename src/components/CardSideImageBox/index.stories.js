import {
  withKnobs,
  object,
  select,
  text,
  boolean,
} from "@storybook/addon-knobs";
import CardSideImageBox from "./index.svelte";
import ViewNested from "./view.nested.svelte";
import cardData from "../preview-content/card-data.js";
import {
  fontSizeOptions,
  headerLevelOptions,
  measureOptions,
  percentOptions,
  spaceOptions,
  themeOptions,
  slotOptions,
} from "../preview-content/options.js";
import docs from "./docs.mdx";

export default {
  title: "Layout components/Card/CardSideImageBox",
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
  Component: CardSideImageBox,
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
    sidebarContentMinWidth: select(
      "sidebarContentMinWidth",
      percentOptions,
      "50%"
    ),
    headerLevel: select("headerLevel", headerLevelOptions, "h2"),
    headlineFontSize: select("headlineFontSize", fontSizeOptions, "big-2"),
    id: text("id", "card-id"),
    sidebarOnLeft: boolean("sidebarOnLeft", true),
    sidebarSpace: select("sidebarSpace", spaceOptions, "var(--s-1)"),
    sidebarWidth: select("sidebarWidth", measureOptions, "var(--s7)"),
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
