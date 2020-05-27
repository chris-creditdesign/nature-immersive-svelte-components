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

export const Green = () => ({
  Component: ViewDefault,
  props: {
    className: "test",
	toggleButtonColorLight: "var(--seagreen-3)",
    toggleButtonColorDark: "var(--seagreen-1)",
  },
});

export const Orange = () => ({
  Component: ViewDefault,
  props: {
    className: "test",
	toggleButtonColorLight: "var(--orange-1)",
    toggleButtonColorDark: "var(--orange-3)",
  },
});