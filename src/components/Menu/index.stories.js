import { object, text, withKnobs, boolean } from "@storybook/addon-knobs";
import Menu from "./view.default.svelte";
import docs from "./docs.mdx";

export default {
  title: "Layout components/Menu",
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
  Component: Menu,
  decorators: [withKnobs],
  props: {
    articleData: {
      doi: text("doi", "123459789", "articleData"),
      articleURL: text(
        "articleURL",
        "https://www.nature.com/articles/",
        "articleData"
      ),
      title: text("title", "Page title", "articleData"),
      description: text("description", "Page description.", "articleData"),
      pdfAvailable: boolean("pdfAvailable", true, "articleData"),
      menuLinks: object(
        "menuLinks",
        [
          { text: "View animation", href: "#" },
          { text: "Controls", href: "#" },
          { text: "Replay intro", href: "#" },
          { text: "About Nature", href: "#" },
          { text: "Credits", href: "#" },
          { text: "Download data", href: "dat/data.zip" },
        ],
        "articleData"
      ),
    },
  },
});

export const NoMenuLinks = () => ({
  Component: Menu,
  decorators: [withKnobs],
  props: {
    articleData: {
      doi: text("doi", "123459789", "articleData"),
      articleURL: text(
        "articleURL",
        "https://www.nature.com/articles/",
        "articleData"
      ),
      title: text("title", "Page title", "articleData"),
      description: text("description", "Page description.", "articleData"),
      pdfAvailable: boolean("pdfAvailable", true, "articleData"),
      menuLinks: object("menuLinks", [], "articleData"),
    },
  },
});

export const manyMenuLinks = () => ({
  Component: Menu,
  decorators: [withKnobs],
  props: {
    articleData: {
      doi: text("doi", "123459789", "articleData"),
      articleURL: text(
        "articleURL",
        "https://www.nature.com/articles/",
        "articleData"
      ),
      title: text("title", "Page title", "articleData"),
      description: text("description", "Page description.", "articleData"),
      pdfAvailable: boolean("pdfAvailable", true, "articleData"),
      menuLinks: object(
        "menuLinks",
        [
          { text: "Menu link one", href: "#" },
          { text: "Menu link two", href: "#" },
          { text: "Menu link three", href: "#" },
          { text: "Menu link four", href: "#" },
          { text: "Menu link five", href: "#" },
          { text: "Menu link six", href: "#" },
          { text: "Menu link seven", href: "#" },
          { text: "Menu link eight", href: "#" },
          { text: "Menu link nine", href: "#" },
          { text: "Menu link ten", href: "#" },
          { text: "Menu link eleven", href: "#" },
          { text: "Menu link twelve", href: "#" },
        ],
        "articleData"
      ),
    },
  },
});
