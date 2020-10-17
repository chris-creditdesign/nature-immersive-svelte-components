import ViewDefault from "./index.svelte";
import CardImageBelowBox from "./view.constrained.svelte";
import cardData from "../preview-content/card-data.js";
import docs from "./docs.mdx";

const cardDataNoImage = { ...cardData, srcURL: undefined };
const cardDataNoImageNoAuthor = {
  ...cardData,
  srcURL: undefined,
  authorName: undefined,
};
const cardDataNoImageNoAuthorNoJournal = {
  ...cardData,
  srcURL: undefined,
  authorName: undefined,
  journal: undefined,
};

export default {
  title: "Layout components/Card/CardImageBelowBox",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: ViewDefault,
  props: {
    className: "test",
    cardData,
  },
});

export const ConstrainedWidth = () => ({
  Component: CardImageBelowBox,
  props: {
    className: "test",
    stackSpace: "var(--s-1)" /* default */,
    gridSpace: "var(--s-1)" /* default */,
    minWidth: "20ch" /* default - mid width of grid items */,
    cardData: {
      authorName: "Author Name <i>et al</i>.",
      journal: "<span class='test'>Journal</span> Name",
      altText: "This is the alt text",
      caption: "This is the caption",
      srcURL: "img/image.jpg",
      captionSpace: "" /* What is this? */,
      footnote: "Footnote",
      headline: "Headline",
      href: "https://www.nature.com",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
    },
  },
});

export const NoImage = () => ({
  Component: CardImageBelowBox,
  props: {
    className: "test",
    cardData: cardDataNoImage,
  },
});

export const NoAuthor = () => ({
  Component: CardImageBelowBox,
  props: {
    className: "test",
    cardData: cardDataNoImageNoAuthor,
  },
});

export const NoJournal = () => ({
  Component: CardImageBelowBox,
  props: {
    className: "test",
    cardData: cardDataNoImageNoAuthorNoJournal,
  },
});
