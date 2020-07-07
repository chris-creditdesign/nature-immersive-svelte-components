import LogoTwitter from "./index.svelte";
import ViewDefault from "./view.default.svelte";
import docs from "./docs.mdx";

export default {
  title: "Logos / LogoTwitter",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: LogoTwitter,
  props: {
    className: "test",
    height: 10 /* default = 1 */,
    title: "Twitter" /* default */,
  },
});

export const Multiple = () => ({
  Component: ViewDefault,
});
