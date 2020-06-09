import ViewDefault from "./view.default.svelte";

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
};

export const Default = () => ({
  Component: ViewDefault,
  props: {
    className: "test",
    ...data,
  },
});

export const StartHalfWay = () => ({
  Component: ViewDefault,
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
  Component: ViewDefault,
  props: {
    className: "test",
	imageData: badImageData,
	ratio: data.ratio,
  },
});

