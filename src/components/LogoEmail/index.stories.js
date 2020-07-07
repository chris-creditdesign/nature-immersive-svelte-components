import LogoEmail from "./index.svelte";
import ViewDefault from "./view.default.svelte";
import docs from "./docs.mdx";

export default {
  title: "Logos / LogoEmail",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: LogoEmail,
  props: {
    className: "test",
    height: 10 /* default = 1 */,
    title: "Email" /* default */,
  },
});

export const Multiple = () => ({
  Component: ViewDefault,
});
