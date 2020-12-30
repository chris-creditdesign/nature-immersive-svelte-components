import {
  withKnobs,
  object,
  select,
  text,
  boolean,
} from "@storybook/addon-knobs";
import CardImageBelowBox from "./index.svelte";
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
  title: "Layout components/Card/CardImageBelowBox",
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
  Component: CardImageBelowBox,
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

// export const ImageOnRight = () => ({
//   Component: ViewDefault,
//   props: {
//     className: "test",
//     sidebarOnLeft: false,
//     cardData,
//   },
// });

// export const ConstrainedWidth = () => ({
//   Component: CardImageBelowBox,
//   props: {
//     className: "test",
//     id: "test",
//     headerLevel: "h2" /* default */,
//     stackSpace: "var(--s-1)" /* default */,
//     sidebarWidth: "25ch" /* default */,
//     sidebarContentMinWidth: "50%;" /* default */,
//     sidebarSpace: "var(--s-1)" /* default */,
//     sidebarOnLeft: true /* default */,
//     cardData: {
//       subHead: "Author Name <i>et al</i>.",
//       eyebrow: "<span class='test'>Journal</span> Name",
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
//   Component: CardImageBelowBox,
//   props: {
//     className: "test",
//     id: "test",
//     headerLevel: "h2" /* default */,
//     stackSpace: "var(--s-1)" /* default */,
//     sidebarWidth: "25ch" /* default */,
//     sidebarContentMinWidth: "50%;" /* default */,
//     sidebarSpace: "var(--s-1)" /* default */,
//     sidebarOnLeft: true /* default */,
//     cardData: {
//       subHead: "Author Name <i>et al</i>.",
//       eyebrow: "<span class='test'>Journal</span> Name",
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
//   Component: CardImageBelowBox,
//   props: {
//     className: "test",
//     id: "test",
//     headerLevel: "h3",
//     stackSpace: "var(--s-1)" /* default */,
//     sidebarWidth: "25ch" /* default */,
//     sidebarContentMinWidth: "50%;" /* default */,
//     sidebarSpace: "var(--s-1)" /* default */,
//     sidebarOnLeft: true /* default */,
//     cardData: {
//       subHead: "Author Name <i>et al</i>.",
//       eyebrow: "<span class='test'>Journal</span> Name",
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
//   Component: CardImageBelowBox,
//   props: {
//     className: "test",
//     cardData: {
//       subHead: "Author Name <i>et al</i>.",
//       eyebrow: "<span class='test'>Journal</span> Name",
//       altText: "This is the alt text",
//       caption: "This is the caption",
//       srcURL: undefined,
//       captionSpace: "" /* What is this? */,
//       footnote: "Footnote",
//       headline: "Headline",
//       href: "https://www.nature.com",
//       text:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
//     },
//   },
// });

// export const NoAuthor = () => ({
//   Component: CardImageBelowBox,
//   props: {
//     className: "test",
//     cardData: {
//       subHead: undefined,
//       eyebrow: "<span class='test'>Journal</span> Name",
//       altText: "This is the alt text",
//       caption: "This is the caption",
//       srcURL: "img/image.jpg",
//       captionSpace: "" /* What is this? */,
//       footnote: "Footnote",
//       headline: "Headline",
//       href: "https://www.nature.com",
//       text:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
//     },
//   },
// });

// export const NoJournal = () => ({
//   Component: CardImageBelowBox,
//   props: {
//     className: "test",
//     cardData: {
//       subHead: "Author Name <i>et al</i>.",
//       eyebrow: undefined,
//       altText: "This is the alt text",
//       caption: "This is the caption",
//       srcURL: "img/image.jpg",
//       captionSpace: "" /* What is this? */,
//       footnote: "Footnote",
//       headline: "Headline",
//       href: "https://www.nature.com",
//       text:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
//     },
//   },
// });
