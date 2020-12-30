import {
  withKnobs,
  object,
  select,
  text,
  boolean,
} from "@storybook/addon-knobs";
import CardSideImage from "./index.svelte";
import cardData from "../preview-content/card-data.js";
import {
  fontSizeOptions,
  headerLevelOptions,
  measureOptions,
  percentOptions,
  spaceOptions,
} from "../preview-content/options.js";
import docs from "./docs.mdx";

export default {
  title: "Layout components/Card/CardSideImage",
  parameters: {
    docs: {
      page: docs,
    },
    knobs: {
      escapeHTML: false,
    },
  },
};

export const Default = () => ({
  Component: CardSideImage,
  decorators: [withKnobs],
  props: {
    cardData: object("cardData", { ...cardData }),
    cardHeaderStackSpace: select(
      "cardHeaderStackSpace",
      spaceOptions,
      "var(--s-4)"
    ),
    className: text("className", "card-class"),
    sidebarContentMinWidth: select(
      "sidebarContentMinWidth",
      percentOptions,
      "50%"
    ),
    headerLevel: select("headerLevel", headerLevelOptions, "h2"),
    headlineFontSize: select("headlineFontSize", fontSizeOptions, "big-2"),
    id: text("id", "card-id"),
    sidebarOnLeft: boolean("sidebarOnLeft", true),
    sidebarSpace: select("sidebarSpace", spaceOptions, "var(--s-1)"),
    sidebarWidth: select("sidebarWidth", measureOptions, "var(--s7)"),
    stackSpace: select("stackSpace", spaceOptions, "var(--s-1)"),
  },
});

// export const ConstrainedWidth = () => ({
//   Component: CardSideImage,
//   props: {
//     className: "test",
//     id: "test",
//     headerLevel: "h2" /* default */,
//     stackSpace: "var(--s-1)" /* default */,
//     cardData: {
//       subHead: "Author Name <i>et al</i>.",
//       eyebrow: "Journal Name",
//       altText: "This is the alt text",
//       caption: "This is the caption",
//       srcURL: "img/image.jpg",
//       captionSpace: "" /* What is this? */,
//       footnote: "Footnote",
//       headline: "Headline",
//       href: "https://www.nature.com",
//       text:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href='https://www.nature.com'>Read more.</a>",
//     },
//   },
// });

// export const NoLink = () => ({
//   Component: CardSideImage,
//   props: {
//     className: "test",
//     id: "test",
//     headerLevel: "h2" /* default */,
//     stackSpace: "var(--s-1)" /* default */,
//     cardData: {
//       subHead: "Author Name <i>et al</i>.",
//       eyebrow: "Journal Name",
//       altText: "This is the alt text",
//       caption: "This is the caption",
//       srcURL: "img/image.jpg",
//       captionSpace: "" /* What is this? */,
//       footnote: "Footnote",
//       headline: "Headline",
//       href: undefined,
//       text:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href='https://www.nature.com'>Read more.</a>",
//     },
//   },
// });

// export const HeaderLevelThree = () => ({
//   Component: CardSideImage,
//   props: {
//     className: "test",
//     id: "test",
//     headerLevel: "h3",
//     stackSpace: "var(--s-1)" /* default */,
//     cardData: {
//       subHead: "Author Name <i>et al</i>.",
//       eyebrow: "Journal Name",
//       altText: "This is the alt text",
//       caption: "This is the caption",
//       srcURL: "img/image.jpg",
//       captionSpace: "" /* What is this? */,
//       footnote: "Footnote",
//       headline: "Headline",
//       href: "https://www.nature.com",
//       text:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href='https://www.nature.com'>Read more.</a>",
//     },
//   },
// });

// export const NoImage = () => ({
//   Component: CardSideImage,
//   props: {
//     className: "test",
//     cardData: cardDataNoImage,
//   },
// });

// export const NoAuthor = () => ({
//   Component: CardSideImage,
//   props: {
//     className: "test",
//     cardData: cardDataNoAuthor,
//   },
// });

// export const NoJournal = () => ({
//   Component: CardSideImage,
//   props: {
//     className: "test",
//     cardData: cardDataNoAuthorNoJournal,
//   },
// });
