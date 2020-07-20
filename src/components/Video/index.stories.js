import ViewDefault from "./index.svelte";
import Video from "./view.constrained.svelte";
import docs from "./docs.mdx";

export default {
  title: "Layout components/Video",
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
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "video/video-small.jpg",
    autoplay: true /* default */,
    loop: true /* default */,
  },
});

export const ConstrainedWidth = () => ({
  Component: Video,
  props: {
    className: "test",
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "video/video-small.jpg",
    autoplay: true /* default */,
    loop: true /* default */,
  },
});

export const NoAutoplay = () => ({
  Component: Video,
  props: {
    className: "test",
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "video/video-small.jpg",
    autoplay: false,
    loop: true /* default */,
  },
});

export const NoLoop = () => ({
  Component: Video,
  props: {
    className: "test",
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "video/video-small.jpg",
    autoplay: true /* default */,
    loop: false,
  },
});
