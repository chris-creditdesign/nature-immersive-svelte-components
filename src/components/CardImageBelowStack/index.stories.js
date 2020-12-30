import { withKnobs, object, select } from "@storybook/addon-knobs";
import CardImageBelowStack from "./index.svelte";
import cardData from "../preview-content/card-data.js";
import { spaceOptions } from "../preview-content/options.js";

export default {
  title: "Layout components/Card/Components/CardImageBelowStack",
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

let { footnote, text } = cardData;

export const Default = () => ({
  Component: CardImageBelowStack,
  decorators: [withKnobs],
  props: {
    cardData: object("cardData", { footnote, text }),
    stackSpace: select("stackSpace", spaceOptions, "var(--s-1)"),
  },
});
