import { select, text, withKnobs } from "@storybook/addon-knobs";
import Image from "./index.svelte";
import docs from "./docs.mdx";
import { spaceOptions } from "../preview-content/options.js";

export default {
  title: "Layout components/Image",
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
  Component: Image,
  decorators: [withKnobs],
  props: {
    altText: text("altText", "This is the alt text"),
    caption: text("caption", "This is the caption"),
    captionSpace: select("captionSpace", spaceOptions, "var(--s-4)"),
    className: text("className", "image-class"),
    srcURL: text("srcURL", "img/image-small.jpg"),
  },
});
