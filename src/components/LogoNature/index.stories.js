import LogoNature from "./index.svelte";
import ViewDefault from "./view.default.svelte";
import docs from "./docs.mdx";

export default {
  title: "Logos / LogoNature",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: LogoNature,
  props: {
    className: "test",
    height: 5 /* default = 1 */,
    title: "Nature" /* default */,
  },
});

export const Multiple = () => ({
  Component: ViewDefault,
});
