import ViewDefault from "./view.default.svelte";
import docs from "./docs.mdx";

export default {
  title: "Template component",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: ViewDefault,
  props: { className: "test" },
});
