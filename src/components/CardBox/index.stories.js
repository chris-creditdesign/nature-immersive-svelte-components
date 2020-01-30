import CardBox from './index.svelte';
import cardData from '../preview-content/card-data.js';

const cardDataNoImage = Object.assign({}, cardData, {srcURL: undefined});
const cardDataNoAuthor = Object.assign({}, cardData, {authorName: undefined});
const cardDataNoAuthorNoJournal = Object.assign({}, cardData, {authorName: undefined, journal: undefined});

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

export const NoAuthor = () => ({
  Component: CardBox,
  props: {
	className: 'test',
	cardData: cardDataNoAuthor,
  },
});

export const NoJournal = () => ({
  Component: CardBox,
  props: {
	className: 'test',
	cardData: cardDataNoAuthorNoJournal,
  },
});
