import LogoFacebook from "./index.svelte";
import ViewDefault from "./view.default.svelte";
import docs from "./docs.mdx";

export default {
  title: "Logos / LogoFacebook",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: LogoFacebook,
  props: {
    className: "test",
    height: 10 /* default = 1 */,
    title: "Facebook" /* default */,
  },
});

export const Multiple = () => ({
  Component: ViewDefault,
});
