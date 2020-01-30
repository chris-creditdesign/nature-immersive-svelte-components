import CardSideImage from './index.svelte';
import cardData from '../preview-content/card-data.js';

const cardDataNoImage = Object.assign({}, cardData, {srcURL: undefined});

export default {
  title: 'Layout components/Card/CardSideImage',
};

export const Default = () => ({
  Component: CardSideImage,
  props: {
	className: 'test',
	cardData,
  },
});

export const NoImage = () => ({
  Component: CardSideImage,
  props: {
	className: 'test',
	cardData: cardDataNoImage,
  },
});
