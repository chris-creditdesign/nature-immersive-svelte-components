import Heading from "./index.svelte";
import docs from "./docs.mdx";

export default {
  title: "Layout components/Heading",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: Heading,
  props: {
    className: "test",
    centerMeasure: "var(--measure-big)" /* default */,
    centerSpace: "0" /* default */,
    stackSpace: "var(--s2)" /* default */,
    stackSpaceBetweenHeadAndStand: "var(--s2)" /* default */,
    stackSpaceBetweenCredits: "var(--s-3)" /* default */,
    articleData: {
      author: "Author Name",
      headline: "Headline headline headline",
      photographer: "Photographer Name",
      publishedAt: 1593734400,
      publishedAtString: "2020-07-03",
      stand: "Standfirst standfirst standfirst.",
    },
  },
});

export const NoDate = () => ({
  Component: Heading,
  props: {
    className: "test",
    centerMeasure: "var(--measure-big)" /* default */,
    centerSpace: "0" /* default */,
    stackSpace: "var(--s2)" /* default */,
    stackSpaceBetweenHeadAndStand: "var(--s2)" /* default */,
    stackSpaceBetweenCredits: "var(--s-3)" /* default */,
    articleData: {
      author: "Author Name",
      headline: "Headline headline headline",
      photographer: "Photographer Name",
      publishedAt: 0,
      publishedAtString: "",
      stand: "Standfirst standfirst standfirst.",
    },
  },
});

export const NoCredits = () => ({
  Component: Heading,
  props: {
    className: "test",
    centerMeasure: "var(--measure-big)" /* default */,
    centerSpace: "0" /* default */,
    stackSpace: "var(--s2)" /* default */,
    stackSpaceBetweenHeadAndStand: "var(--s2)" /* default */,
    stackSpaceBetweenCredits: "var(--s-3)" /* default */,
    articleData: {
      author: "",
      headline: "Headline headline headline",
      photographer: "",
      publishedAt: 0,
      publishedAtString: "",
      stand: "Standfirst standfirst standfirst.",
    },
  },
});

export const NoStackSpace = () => ({
  Component: Heading,
  props: {
    className: "test",
    centerMeasure: "var(--measure-big)" /* default */,
    centerSpace: "0" /* default */,
    stackSpace: "0",
    stackSpaceBetweenHeadAndStand: "var(--s2)" /* default */,
    stackSpaceBetweenCredits: "var(--s-3)" /* default */,
    articleData: {
      author: "Author Name",
      headline: "Headline headline headline",
      photographer: "Photographer Name",
      publishedAt: 1593734400,
      publishedAtString: "2020-07-03",
      stand: "Standfirst standfirst standfirst.",
    },
  },
});

export const NoSpaceBetweenHeadAndStand = () => ({
  Component: Heading,
  props: {
    className: "test",
    centerMeasure: "var(--measure-big)" /* default */,
    centerSpace: "0" /* default */,
    stackSpace: "var(--s2)" /* default */,
    stackSpaceBetweenHeadAndStand: "0",
    stackSpaceBetweenCredits: "var(--s-3)" /* default */,
    articleData: {
      author: "Author Name",
      headline: "Headline headline headline",
      photographer: "Photographer Name",
      publishedAt: 1593734400,
      publishedAtString: "2020-07-03",
      stand: "Standfirst standfirst standfirst.",
    },
  },
});

export const NoSpaceBetweenCredits = () => ({
  Component: Heading,
  props: {
    className: "test",
    centerMeasure: "var(--measure-big)" /* default */,
    centerSpace: "0" /* default */,
    stackSpace: "var(--s2)" /* default */,
    stackSpaceBetweenHeadAndStand: "var(--s2)" /* default */,
    stackSpaceBetweenCredits: "0",
    articleData: {
      author: "Author Name",
      headline: "Headline headline headline",
      photographer: "Photographer Name",
      publishedAt: 1593734400,
      publishedAtString: "2020-07-03",
      stand: "Standfirst standfirst standfirst.",
    },
  },
});
