import Card from './index.svelte';
import cardData from '../preview-content/card-data.js';

const cardDataNoImage = Object.assign({}, cardData, {srcURL: undefined});
const cardDataNoImageNoAuthor = Object.assign({}, cardData, {srcURL: undefined, authorName: undefined});
const cardDataNoImageNoAuthorNoJournal = Object.assign({}, cardData, {srcURL: undefined, authorName: undefined, journal: undefined});

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

export const NoAuthor = () => ({
  Component: Card,
  props: {
	className: 'test',
	cardData: cardDataNoImageNoAuthor,
  },
});

export const NoJournal = () => ({
  Component: Card,
  props: {
	className: 'test',
	cardData: cardDataNoImageNoAuthorNoJournal,
  },
});
