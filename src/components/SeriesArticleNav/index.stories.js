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
		parentDoi: 'doi-1'
	},
});

export const ReducedMotion = () => ({
	Component: ViewDefault,
	props: {
		className: 'test',
		seriesArticleNavData,
		parentDoi: 'doi-1',
		prefersReducedMotion: true
	},
});
