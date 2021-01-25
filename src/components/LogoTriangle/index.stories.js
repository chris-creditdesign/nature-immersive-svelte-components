import LogoTriangle from "./index.svelte";
import ViewDefault from "./view.default.svelte";
import docs from "./docs.mdx";

export default {
  title: "Logos / LogoTriangle",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: LogoTriangle,
  props: {
    className: "test",
    height: 10 /* default = 1 */,
  },
});

export const Multiple = () => ({
  Component: ViewDefault,
});
