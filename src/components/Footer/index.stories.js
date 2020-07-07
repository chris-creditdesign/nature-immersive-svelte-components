import Footer from "./index.svelte";
import docs from "./docs.mdx";

export default {
  title: "Layout components/Footer",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: Footer,
});
