import ViewDefault from './view.default.svelte';
import articleData from '../preview-content/article-data.js'

export default {
  title: 'Layout components/Heading',
};

export const Default = () => ({
  Component: ViewDefault,
  props: {
	className: 'test',
	articleData,
  },
});
