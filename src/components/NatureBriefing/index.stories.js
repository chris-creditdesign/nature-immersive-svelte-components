import NatureBriefing from "./index.svelte";
import docs from "./docs.mdx";

export default {
  title: "Layout components / NatureBriefing",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: NatureBriefing,
});
