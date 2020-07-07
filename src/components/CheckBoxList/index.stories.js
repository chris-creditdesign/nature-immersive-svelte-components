import ViewDefault from "./view.default.svelte";
import docs from "./docs.mdx";

export default {
  title: "Interactive components/CheckBoxList",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: ViewDefault,
  props: {
    categories: ["one", "two", "three", "four", "five", "six"],
  },
});
