import Menu from "./index.svelte";
import articleData from "../preview-content/article-data.js";
import docs from "./docs.mdx";

export default {
  title: "Layout components/Menu",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: Menu,
  props: {
    className: "test",
    articleData: {
      doi: "123459789",
      articleURL: "https://www.nature.com/articles/",
      title: "Page title",
      description: "Page description.",
      menuLinks: [
        { text: "View animation", href: "#" },
        { text: "Controls", href: "#" },
        { text: "Replay intro", href: "#" },
        { text: "About Nature", href: "#" },
        { text: "Credits", href: "#" },
        { text: "Download data", href: "dat/data.zip" },
      ],
    },
  },
});

const articleDataNoMenuLinks = { ...articleData, menuLinks: undefined };

export const NoMenuLinks = () => ({
  Component: Menu,
  props: {
    className: "test",
    articleData: articleDataNoMenuLinks,
  },
});

const menuLinks = [
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
];

const articleDataManyMenuLinks = { ...articleData, menuLinks };

export const manyMenuLinks = () => ({
  Component: Menu,
  props: {
    className: "test",
    articleData: articleDataManyMenuLinks,
  },
});
