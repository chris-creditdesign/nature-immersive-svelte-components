import ViewDefault from "./index.svelte";
import CardSideImage from "./view.constrained.svelte";
import cardData from "../preview-content/card-data.js";
import docs from "./docs.mdx";

const cardDataNoImage = { ...cardData, srcURL: undefined };
const cardDataNoAuthor = { ...cardData, subHead: undefined };
const cardDataNoAuthorNoJournal = {
  ...cardData,
  subHead: undefined,
  eyebrow: undefined,
};

export default {
  title: "Layout components/Card/CardSideImage",
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
  Component: CardSideImage,
  props: {
    className: "test",
    id: "test",
    stackSpace: "var(--s-1)" /* default */,
    cardData: {
      subHead: "Author Name <i>et al</i>.",
      eyebrow: "Journal Name",
      altText: "This is the alt text",
      caption: "This is the caption",
      srcURL: "img/image.jpg",
      captionSpace: "" /* What is this? */,
      footnote: "Footnote",
      headline: "Headline",
      href: "https://www.nature.com",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href='https://www.nature.com'>Read more.</a>",
    },
  },
});

export const NoLink = () => ({
  Component: CardSideImage,
  props: {
    className: "test",
    id: "test",
    stackSpace: "var(--s-1)" /* default */,
    cardData: {
      subHead: "Author Name <i>et al</i>.",
      eyebrow: "Journal Name",
      altText: "This is the alt text",
      caption: "This is the caption",
      srcURL: "img/image.jpg",
      captionSpace: "" /* What is this? */,
      footnote: "Footnote",
      headline: "Headline",
      href: undefined,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href='https://www.nature.com'>Read more.</a>",
    },
  },
});

export const NoImage = () => ({
  Component: CardSideImage,
  props: {
    className: "test",
    cardData: cardDataNoImage,
  },
});

export const NoAuthor = () => ({
  Component: CardSideImage,
  props: {
    className: "test",
    cardData: cardDataNoAuthor,
  },
});

export const NoJournal = () => ({
  Component: CardSideImage,
  props: {
    className: "test",
    cardData: cardDataNoAuthorNoJournal,
  },
});
