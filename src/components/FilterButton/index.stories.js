import ViewDefault from "./view.default.svelte";
import docs from "./docs.mdx";

export default {
  title: "Interactive components/FilterButton",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: ViewDefault,
  props: {
    className: "test",
    expandedMessage: "Close" /* default */,
    message: "Open" /* default */,
    expanded: false /* default */,
  },
});
