import CoverBackgroundVideo from "./view.default.svelte";
import ViewWithText from "./view.with-text.svelte";
import docs from "./docs.mdx";

export default {
  title: "Layout components/CoverBackgroundVideo",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: CoverBackgroundVideo,
  props: {
    srcURL: "video/video-small.jpg",
    alt: "This is the alt text",
    coverSpace: "1rem" /* default */,
    coverHeight: "100vh" /* default */,
  },
});

export const HalfHeight = () => ({
  Component: CoverBackgroundVideo,
  props: {
    srcURL: "video/video-small.jpg",
    alt: "This is the alt text",
    coverHeight: "50vh",
  },
});

export const WithText = () => ({
  Component: ViewWithText,
  props: {
    srcURL: "video/video-small.jpg",
    alt: "This is the alt text",
    coverHeight: "50vh",
  },
});
