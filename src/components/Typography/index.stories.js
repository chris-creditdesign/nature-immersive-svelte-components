import ViewDefault from "./view.default.svelte";
import ViewFontSizes from "./view.font-sizes.svelte";

export default {
  title: "Design/Typography",
};

export const Default = () => ({
  Component: ViewDefault,
});

export const FontSizes = () => ({
  Component: ViewFontSizes,
});
