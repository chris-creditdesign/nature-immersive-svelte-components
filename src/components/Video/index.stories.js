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
    buttonAtTop: false /* defualt */,
    buttonOnLeft: false /* default */,
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
    buttonAtTop: false /* defualt */,
    buttonOnLeft: false /* default */,
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
    buttonAtTop: false /* defualt */,
    buttonOnLeft: false /* default */,
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
    buttonAtTop: false /* defualt */,
    buttonOnLeft: false /* default */,
  },
});

export const ButtonAtTop = () => ({
  Component: Video,
  props: {
    className: "test",
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "video/video-small.jpg",
    autoplay: true /* default */,
    loop: true /* default */,
    buttonAtTop: true,
    buttonOnLeft: false /* default */,
  },
});

export const ButtonOnLeft = () => ({
  Component: Video,
  props: {
    className: "test",
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "video/video-small.jpg",
    autoplay: true /* default */,
    loop: true /* default */,
    buttonAtTop: false /* default */,
    buttonOnLeft: true,
  },
});

export const ButtonAtTopLeft = () => ({
  Component: Video,
  props: {
    className: "test",
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "video/video-small.jpg",
    autoplay: true /* default */,
    loop: true /* default */,
    buttonAtTop: true,
    buttonOnLeft: true,
  },
});
