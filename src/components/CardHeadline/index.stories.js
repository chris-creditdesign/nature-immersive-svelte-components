import { withKnobs, object, text, select } from "@storybook/addon-knobs";
import ViewDefault from "./view.default.svelte";
import docs from "./docs.mdx";
import cardData from "../preview-content/card-data.js";
import {
  headerLevelOptions,
  fontSizeOptions,
} from "../preview-content/options.js";

export default {
  title: "Layout components/Card/Components/CardHeadline",
  parameters: {
    knobs: {
      escapeHTML: false,
    },
    docs: {
      page: docs,
    },
  },
};

let { href } = cardData;

export const Default = () => ({
  Component: ViewDefault,
  decorators: [withKnobs],
  props: {
    id: text("id", "card-id"),
    cardData: object("cardData", { href }),
    headerLevel: select("headerLevel", headerLevelOptions, "h2"),
    headlineFontSize: select("headlineFontSize", fontSizeOptions, "big-2"),
  },
});
