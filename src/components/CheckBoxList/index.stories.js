import ViewDefault from "./view.default.svelte";

export default {
  title: "Interactive components/CheckBoxList",
};

let categories = ["one", "two", "three", "four", "five", "six"];

export const Default = () => ({
  Component: ViewDefault,
  props: {
    categories,
  },
});
