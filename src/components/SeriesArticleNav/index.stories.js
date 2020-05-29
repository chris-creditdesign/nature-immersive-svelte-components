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

const seriesArticleNavDataNoStand = Object.assign({}, seriesArticleNavData, { stand: undefined});

export const NoStand = () => ({
	Component: ViewDefault,
	props: {
		className: 'test',
		seriesArticleNavData: seriesArticleNavDataNoStand,
	},
});
