import ViewDefault from "./view.default.svelte";
import articleData from "../preview-content/article-data.js";

export default {
  title: "Layout components/Menu",
};

export const Default = () => ({
  Component: ViewDefault,
  props: {
    className: "test",
    articleData,
  },
});

const articleDataNoMenuLinks = { ...articleData, menuLinks: undefined };

export const NoMenuLinks = () => ({
  Component: ViewDefault,
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
  Component: ViewDefault,
  props: {
    className: "test",
    articleData: articleDataManyMenuLinks,
  },
});
