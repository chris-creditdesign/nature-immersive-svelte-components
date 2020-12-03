import ViewDefault from "./view.default.svelte";
import ViewMeasures from "./view.measures.svelte";

export default {
  title: "Design/Measurements",
};

export const Default = () => ({
  Component: ViewDefault,
});

export const Measures = () => ({
  Component: ViewMeasures,
});
