import LogoDownload from "./index.svelte";
// import ViewDefault from "./view.default.svelte";
import docs from "./docs.mdx";

export default {
  title: "Logos / LogoDownload",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: LogoDownload,
  props: {
    className: "test",
    width: 50 /* default = 1 */,
    title: "Pdf download" /* default */,
  },
});

// export const Multiple = () => ({
//   Component: ViewDefault,
// });
