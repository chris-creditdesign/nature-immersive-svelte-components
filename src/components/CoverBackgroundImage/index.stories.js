import CoverBackgroundImage from "./view.default.svelte";
import ViewWithText from "./view.with-text.svelte";
import docs from "./docs.mdx";

export default {
  title: "Layout components/CoverBackgroundImage",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: CoverBackgroundImage,
  props: {
    srcURL: "img/image-small.jpg",
    alt: "This is the alt text",
    coverSpace: "1rem" /* default */,
    coverHeight: "100vh" /* default */,
  },
});

export const HalfHeight = () => ({
  Component: CoverBackgroundImage,
  props: {
    srcURL: "img/image-small.jpg",
    alt: "This is the alt text",
    coverHeight: "50vh",
  },
});

export const WithText = () => ({
  Component: ViewWithText,
  props: {
    srcURL: "img/image-small.jpg",
    alt: "This is the alt text",
    coverHeight: "50vh",
  },
});
