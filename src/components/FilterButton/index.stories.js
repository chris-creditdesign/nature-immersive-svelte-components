import ViewDefault from "./view.default.svelte";

export default {
  title: "Interactive components/FilterButton",
};

export const Default = () => ({
  Component: ViewDefault,
  props: {
    className: "test",
  },
});

