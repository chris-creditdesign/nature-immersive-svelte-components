import { object, select, text, withKnobs } from "@storybook/addon-knobs";
import ViewDefault from "./index.svelte";
import cardData from "../preview-content/card-data.js";
import {
  headerLevelOptions,
  fontSizeOptions,
  spaceOptions,
} from "../preview-content/options.js";

export default {
  title: "Layout components/Card/Components/CardHeader",
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

let { eyebrow, subHead, headline, href } = cardData;

export const Default = () => ({
  Component: ViewDefault,
  decorators: [withKnobs],
  props: {
    cardData: object("cardData", { eyebrow, subHead, headline, href }),
    cardHeaderStackSpace: select(
      "cardHeaderStackSpace",
      spaceOptions,
      "var(--s-4)"
    ),
    headerLevel: select("headerLevel", headerLevelOptions, "h2"),
    headlineFontSize: select("headlineFontSize", fontSizeOptions, "big-2"),
    id: text("id", "card-id"),
  },
});
