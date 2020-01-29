import ViewDefault from './view.default.svelte';

export default {
  title: 'Template component',
};

export const Default = () => ({
  Component: ViewDefault,
  props: { className: 'test' },
});
