import ViewDefault from "./view.default.svelte";

export default {
  title: "Interactive components/ToggleButton",
};

export const Default = () => ({
  Component: ViewDefault,
  props: {
    className: "test",
  },
});

export const NoTriangle = () => ({
  Component: ViewDefault,
  props: {
    className: "test",
    triangle: false,
  },
});
