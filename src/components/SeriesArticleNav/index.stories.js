import ViewDefault from './view.default.svelte';
import seriesArticleNavData from '../preview-content/series-article-nav-data.js';

export default {
	title: 'Layout components/SeriesArticleNav',
};

export const Default = () => ({
	Component: ViewDefault,
	props: {
		className: 'test',
		seriesArticleNavData,
	},
});
