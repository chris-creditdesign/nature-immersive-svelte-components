import ViewDefault from "./view.default.svelte";

const data = {
  imageData: [
    {
      altText: "Scientific image containing duplicated regions.",
      caption: "The image that Elisabeth Bik was asked to review.",
      srcURL: "img/static-a-graphic.jpg",
    },
    {
      altText: "Scientific image with duplicated regions outlined.",
      caption:
        "The coloured squares show the duplicated regions that Elisabeth Bik uncovered.",
      srcURL: "img/static-b-graphic.jpg",
    },
  ],
  ratio: 1.5,
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

const badImageData = [
  {
    altText: "Scientific image containing duplicated regions.",
    caption: "The image that Elisabeth Bik was asked to review.",
    srcURL: "img/static-a-graphic.jpg",
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

