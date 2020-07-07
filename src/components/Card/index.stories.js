import ViewDefault from "./index.svelte";
import Card from "./view.constrained.svelte";
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
  title: "Layout components/Card/Card",
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
  Component: Card,
  props: {
    className: "test",
    stackSpace: "var(--s-1)" /* default */,
    cardData: {
      authorName: "Author Name <i>et al</i>.",
      journal: "Journal Name",
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
  Component: Card,
  props: {
    className: "test",
    cardData: cardDataNoImage,
  },
});

export const NoAuthor = () => ({
  Component: Card,
  props: {
    className: "test",
    cardData: cardDataNoImageNoAuthor,
  },
});

export const NoJournal = () => ({
  Component: Card,
  props: {
    className: "test",
    cardData: cardDataNoImageNoAuthorNoJournal,
  },
});
