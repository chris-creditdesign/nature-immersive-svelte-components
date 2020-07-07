import LogoSpringerNature from "./index.svelte";
import ViewDefault from "./view.default.svelte";
import docs from "./docs.mdx";

export default {
  title: "Logos / LogoSpringerNature",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: LogoSpringerNature,
  props: {
    className: "test",
    height: 3 /* default = 1 */,
    title: "Springer Nature" /* default */,
  },
});

export const Multiple = () => ({
  Component: ViewDefault,
});
