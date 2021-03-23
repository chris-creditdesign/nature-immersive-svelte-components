import { select, text } from "@storybook/addon-knobs";
import Header from "./index.svelte";
import {
  headerLevelOptions,
  fontSizeOptions,
  fontWeightOptions,
} from "../preview-content/options.js";
import docs from "./docs.mdx";

export default {
  title: "Layout components/Header",
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
  Component: Header,
  props: {
    text: text("text", "Some headline text goes here"),
    headerLevel: select("headerLevel", headerLevelOptions, "h2"),
    headlineFontSize: select("headlineFontSize", fontSizeOptions, "big-2"),
    headlineFontWeight: select("headlineFontWeight", fontWeightOptions, "bold"),
  },
});
