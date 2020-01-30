import Card from './index.svelte';
import cardData from '../preview-content/card-data.js';

const cardDataNoImage = Object.assign({}, cardData, {srcURL: undefined});

export default {
  title: 'Layout components/Card/Card',
};

export const Default = () => ({
  Component: Card,
  props: {
	className: 'test',
	cardData,
  },
});

export const NoImage = () => ({
  Component: Card,
  props: {
	className: 'test',
	cardData: cardDataNoImage,
  },
});
