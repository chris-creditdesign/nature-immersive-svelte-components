import YouTube from "./view.default.svelte";
import ViewConstrained from "./view.constrained.svelte";
import ViewMultiple from "./view.multiple.svelte";
import docs from "./docs.mdx";

export default {
  title: "Layout components/YouTube",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: YouTube,
  props: {
    videoId: "kYmLQP2M-qo",
    videoRatioHeight: 9 /* default */,
    videoRatioWidth: 16 /* default */,
  },
});

export const ConstrainedWidth = () => ({
  Component: ViewConstrained,
  props: {
    videoId: "kYmLQP2M-qo",
    videoRatioHeight: 9 /* default */,
    videoRatioWidth: 16 /* default */,
  },
});

export const MultipleVideos = () => ({
  Component: ViewMultiple,
});

export const Error = () => ({
  Component: ViewConstrained,
  props: {
    videoId: "12334",
    videoRatioHeight: 9 /* default */,
    videoRatioWidth: 16 /* default */,
  },
});
