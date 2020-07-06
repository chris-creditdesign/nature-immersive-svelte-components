import ViewDefault from "./view.default.svelte";
import ViewMultiple from "./view.multiple.svelte";
import ViewMultipleWidths from "./view.multiple-widths.svelte";
import ViewCards from "./view.cards.svelte";
import ViewGrid from "./view.grid.svelte";
import ViewMultipleLayouts from "./view.multiple-layouts.svelte";

export default {
  title: "Layout components/Section",
};

export const Default = () => ({
  Component: ViewDefault,
  props: { className: "test", headline: "Section head" },
});

export const NoHeadline = () => ({
  Component: ViewDefault,
  props: { className: "test" },
});

export const MultipleSections = () => ({
  Component: ViewMultiple,
});

export const MultipleWidths = () => ({
  Component: ViewMultipleWidths,
});

export const WithCards = () => ({
  Component: ViewCards,
});

export const WithGrid = () => ({
  Component: ViewGrid,
});

export const MultipleLayouts = () => ({
  Component: ViewMultipleLayouts,
});
