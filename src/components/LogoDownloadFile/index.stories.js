import LogoDownloadFile from "./index.svelte";
import ViewDefault from "./view.default.svelte";
import docs from "./docs.mdx";

export default {
  title: "Logos / LogoDownloadFile",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: LogoDownloadFile,
  props: {
    className: "test",
    height: 10 /* default = 1 */,
    title: "Email" /* default */,
  },
});

export const Multiple = () => ({
  Component: ViewDefault,
});
