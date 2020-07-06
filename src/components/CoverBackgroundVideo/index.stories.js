import ViewDefault from "./view.default.svelte";
import ViewWithText from "./view.with-text.svelte";
import articleData from "../preview-content/article-data.js";

export default {
  title: "Layout components/CoverBackgroundVideo",
};

export const Default = () => ({
  Component: ViewDefault,
  props: {
    srcURL: "video/video-small.jpg",
    alt: "This is the alt text",
    articleData,
  },
});

export const HalfHeight = () => ({
  Component: ViewDefault,
  props: {
    srcURL: "video/video-small.jpg",
    alt: "This is the alt text",
    coverHeight: "50vh",
    articleData,
  },
});

export const WithText = () => ({
  Component: ViewWithText,
  props: {
    srcURL: "video/video-small.jpg",
    alt: "This is the alt text",
    coverHeight: "50vh",
    articleData,
  },
});
