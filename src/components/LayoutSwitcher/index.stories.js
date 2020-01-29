import ViewDefault from './view.default.svelte';

export default {
  title: 'Layout primitives/LayoutSwitcher',
};

export const Default = () => ({
  Component: ViewDefault,
  props: { className: 'test' },
});
