import { withKnobs, object, select, boolean } from "@storybook/addon-knobs";
import CardImageBelowSidebar from "./index.svelte";
import cardData from "../preview-content/card-data.js";
import {
  spaceOptions,
  measureOptions,
  percentOptions,
} from "../preview-content/options.js";

export default {
  title: "Layout components/Card/Components/CardImageBelowSidebar",
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

let { altText, caption, footnote, srcURL, text } = cardData;

export const Default = () => ({
  Component: CardImageBelowSidebar,
  decorators: [withKnobs],
  props: {
    cardData: object("cardData", {
      altText,
      caption,
      footnote,
      srcURL,
      text,
    }),
    sidebarContentMinWidth: select(
      "sidebarContentMinWidth",
      percentOptions,
      "50%"
    ),
    sidebarOnLeft: boolean("sidebarOnLeft", true),
    sidebarSpace: select("sidebarSpace", spaceOptions, "var(--s-1)"),
    sidebarWidth: select("sidebarWidth", measureOptions, "var(--s7)"),
    stackSpace: select("stackSpace", spaceOptions, "var(--s-1)"),
  },
});
