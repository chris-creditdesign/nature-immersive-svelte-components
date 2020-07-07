import ViewDefault from "./index.svelte";
import Image from "./view.constrained.svelte";
import docs from "./docs.mdx";

export default {
  title: "Layout components/Image",
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
    srcURL: "img/image-small.jpg",
    captionSpace: "" /* What is this? */,
  },
});

export const ConstrainedWidth = () => ({
  Component: Image,
  props: {
    className: "test",
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "img/image-small.jpg",
    captionSpace: "" /* What is this? */,
  },
});
