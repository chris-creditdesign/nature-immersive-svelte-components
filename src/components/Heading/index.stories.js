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
