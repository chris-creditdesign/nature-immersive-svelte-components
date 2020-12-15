import ViewDefault from "./index.svelte";
import Video from "./view.constrained.svelte";
import ViewTwoVideos from "./view.two-videos.svelte";
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
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "video/video-small.jpg",
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
    playingMessage: "Pause video" /* defualt */,
    pausedMessage: "Play video" /* defualt */,
    frameRatioHeight: 9 /* default */,
    frameRatioWidth: 16 /* default */,
    captionSpace: 0 /* defalut */,
  },
});

export const WithCaptionSpace = () => ({
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
    playingMessage: "Pause video" /* defualt */,
    pausedMessage: "Play video" /* defualt */,
    frameRatioHeight: 9 /* default */,
    frameRatioWidth: 16 /* default */,
    captionSpace: "var(--s3)",
  },
});

export const NoAutoplay = () => ({
  Component: Video,
  props: {
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "video/video-small.jpg",
    autoplay: false,
  },
});

export const NoLoop = () => ({
  Component: Video,
  props: {
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "video/video-small.jpg",
    loop: false,
    pausedMessage: "Resume video",
  },
});

export const ButtonAtTop = () => ({
  Component: Video,
  props: {
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "video/video-small.jpg",
    buttonAtTop: true,
  },
});

export const ButtonOnLeft = () => ({
  Component: Video,
  props: {
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "video/video-small.jpg",
    buttonOnLeft: true,
  },
});

export const ButtonAtTopLeft = () => ({
  Component: Video,
  props: {
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "video/video-small.jpg",
    buttonAtTop: true,
    buttonOnLeft: true,
  },
});

export const TwoVideosOnPage = () => ({
  Component: ViewTwoVideos,
  props: {
    className: "test",
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "video/video-small.jpg",
  },
});
