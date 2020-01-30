import CardSideImageBox from './index.svelte';
import cardData from '../preview-content/card-data.js';

const cardDataNoImage = Object.assign({}, cardData, {srcURL: undefined});

export default {
  title: 'Layout components/Card/CardSideImageBox',
};

export const Default = () => ({
  Component: CardSideImageBox,
  props: {
	className: 'test',
	cardData,
  },
});

export const NoImage = () => ({
  Component: CardSideImageBox,
  props: {
	className: 'test',
	cardData: cardDataNoImage,
  },
});
