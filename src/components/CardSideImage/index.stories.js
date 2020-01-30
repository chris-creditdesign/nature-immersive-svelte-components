import CardSideImage from './index.svelte';
import cardData from '../preview-content/card-data.js';

const cardDataNoImage = Object.assign({}, cardData, {srcURL: undefined});
const cardDataNoAuthor = Object.assign({}, cardData, {authorName: undefined});
const cardDataNoAuthorNoJournal = Object.assign({}, cardData, {authorName: undefined, journal: undefined});

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

export const NoAuthor = () => ({
  Component: CardSideImage,
  props: {
	className: 'test',
	cardData: cardDataNoAuthor,
  },
});

export const NoJournal = () => ({
  Component: CardSideImage,
  props: {
	className: 'test',
	cardData: cardDataNoAuthorNoJournal,
  },
});