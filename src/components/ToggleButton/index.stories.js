import ToggleButton from "./view.default.svelte";
import docs from "./docs.mdx";

export default {
  title: "Interactive components/ToggleButton",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: ToggleButton,
  props: {
    className: "test",
    expanded: false /* default */,
    showTriangle: true /* default */,
    expandedMessage: "Close" /* default */,
    message: "Open" /* default */,
  },
});

export const NoTriangle = () => ({
  Component: ToggleButton,
  props: {
    className: "test",
    showTriangle: false,
  },
});
