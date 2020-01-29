import ViewDefault from './view.default.svelte';

export default {
  title: 'Layout primitives/LayoutGrid',
};

export const Default = () => ({
  Component: ViewDefault,
  props: { className: 'test' },
});

export const WithExtraSpace = () => ({
  Component: ViewDefault,
  props: { className: 'test', gridSpace: 'var(--s3)' },
});
