import ScrollytellingContainer from "./view.default.svelte";
import docs from "./docs.mdx";

export default {
  title: "Layout components/ScrollytellingContainer",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: ScrollytellingContainer,
  props: {
    className: "test",
    scrollytellingSteps: [
      {
        text:
          "<p>Step one. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>",
        data: {
          url: "img/static-a-graphic-2x.jpg",
          altText: "Image one alt text",
        },
      },
      {
        text:
          "<p>Step two. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>",
        data: {
          url: "img/static-b-graphic-2x.jpg",
          altText: "Image two alt text",
        },
      },
      {
        text:
          "<p>Step three. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>",
        data: {
          url: "img/static-c-graphic-2x.jpg",
          altText: "Image three alt text",
        },
      },
      {
        text:
          "<p>Step four. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>",
        data: {
          url: "img/static-d-graphic-2x.jpg",
          altText: "Image four alt text",
        },
      },
      {
        text:
          "<p>Step five. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>",
        data: {
          url: "img/static-e-graphic-2x.jpg",
          altText: "Image five alt text",
        },
      },
    ],
  },
});
