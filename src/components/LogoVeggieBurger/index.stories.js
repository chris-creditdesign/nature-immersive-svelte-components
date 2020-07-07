import LogoVeggieBurger from "./index.svelte";
import ViewDefault from "./view.default.svelte";
import docs from "./docs.mdx";

export default {
  title: "Logos / LogoVeggieBurger",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: LogoVeggieBurger,
  props: {
    className: "test",
    height: 10 /* default = 1 */,
    title: "Menu" /* default */,
  },
});

export const Multiple = () => ({
  Component: ViewDefault,
});
