import ViewDefault from './view.default.svelte';
import articleData from '../preview-content/article-data.js';

export default {
  title: 'Layout components/Menu',
};

export const Default = () => ({
  Component: ViewDefault,
  props: {
	  className: 'test',
	  articleData,
  },
});

const articleDataNoMenuLinks = Object.assign({}, articleData, { menuLinks: undefined} )

export const NoMenuLinks = () => ({
  Component: ViewDefault,
  props: {
	  className: 'test',
	  articleData: articleDataNoMenuLinks,
  },
});