import VideoButton from "./view.default.svelte";
import docs from "./docs.mdx";

export default {
  title: "Interactive components/VideoButton",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: VideoButton,
  props: {
    className: "test",
    paused: true /* default */,
    playingMessage: "Pause video" /* default */,
    pausedMessage: "Play video" /* default */,
  },
});
