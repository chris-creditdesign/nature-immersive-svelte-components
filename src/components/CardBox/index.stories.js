import CardBox from './index.svelte';
import cardData from '../preview-content/card-data.js';

const cardDataNoImage = Object.assign({}, cardData, {srcURL: undefined})

export default {
  title: 'Layout components/Card/CardBox',
};

export const Default = () => ({
  Component: CardBox,
  props: {
	className: 'test',
	cardData,
  },
});

export const NoImage = () => ({
  Component: CardBox,
  props: {
	className: 'test',
	cardData: cardDataNoImage,
  },
});
