import ViewDefault from "./view.default.svelte";
import ImageSlider from "./view.constrained.svelte";
import docs from "./docs.mdx";

const data = {
  imageData: [
    {
      altText: "Scientific image containing duplicated regions.",
      caption: "The image that Elisabeth Bik was asked to review.",
      srcURL: "img/image-slider-test-a.jpg",
    },
    {
      altText: "Scientific image with duplicated regions outlined.",
      caption:
        "The coloured squares show the duplicated regions that Elisabeth Bik uncovered.",
      srcURL: "img/image-slider-test-b.jpg",
    },
  ],
  ratio: 0.666666667,
};

export default {
  title: "Interactive components/ImageSlider",
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
    ...data,
  },
});

export const ConstrainedWidth = () => ({
  Component: ImageSlider,
  props: {
    className: "test",
    imageData: [
      {
        altText: "Scientific image containing duplicated regions.",
        caption: "The image that Elisabeth Bik was asked to review.",
        srcURL: "img/image-slider-test-a.jpg",
      },
      {
        altText: "Scientific image with duplicated regions outlined.",
        caption:
          "The coloured squares show the duplicated regions that Elisabeth Bik uncovered.",
        srcURL: "img/image-slider-test-b.jpg",
      },
    ],
    ratio: 0.666666667 /* default = 0.5625 */,
    message: "Use the slider to reveal the hidden image:" /* default */,
    amountToReveal: 0 /* default */,
  },
});

export const StartHalfWay = () => ({
  Component: ImageSlider,
  props: {
    className: "test",
    amountToReveal: 50,
    ...data,
  },
});

const badImageData = [
  {
    altText: "Scientific image containing duplicated regions.",
    caption: "The image that Elisabeth Bik was asked to review.",
    srcURL: "img/image-slider-test-a.jpg",
  },
  {
    altText: "Scientific image with duplicated regions outlined.",
    caption:
      "The coloured squares show the duplicated regions that Elisabeth Bik uncovered.",
    srcURL: "img/xxx.jpg",
  },
];

export const ImageFailsToLoad = () => ({
  Component: ImageSlider,
  props: {
    className: "test",
    imageData: badImageData,
    ratio: data.ratio,
  },
});
