import { object, withKnobs, boolean } from "@storybook/addon-knobs";
import PdfDownloadSlider from "./view.default.svelte";
import docs from "./docs.mdx";

export default {
  title: "Layout components/PdfDownloadSlider",
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
  Component: PdfDownloadSlider,
  decorators: [withKnobs],
  props: {
    cardData: object("cardData", {
      headline: "Headline headline headline",
      srcURL: "img/image-small.jpg",
      text: "Download a pdf of headline headline headline.",
    }),
    articleData: object("articleData", { doi: "123459789" }),
    wideEnough: boolean("wideEnough", true),
  },
});
