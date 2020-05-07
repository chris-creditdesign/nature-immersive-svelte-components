import ViewDefault from "./view.default.svelte";

let content = [
  {
    type: "text",
    data:
      "<p class='drop-cap'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti numquam officia architecto modi! Labore natus error nisi earum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti numquam officia architecto modi! Labore natus error nisi earum.</p>",
  },
  {
    type: "text",
    data:
      "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti numquam officia architecto modi! Labore natus error nisi earum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti numquam officia architecto modi! Labore natus error nisi earum.</p>",
  },
];

let contentImage = [
  content[1],
  {
    type: "image",
    data: {
      altText: "This is the alt text",
      caption: "This is the caption",
      srcURL: "img/image-small.jpg",
    },
  },
  content[1],
];

//   {
//     type: "image",
//     srcURL: images["covering-climate-now-logo"].srcURL,
//     altText: images["covering-climate-now-logo"].altText,
//     caption: images["covering-climate-now-logo"].caption,
//     imageSize: "logo",
//   },
//   {
//     type: "text",
//     content: textSegments["rodriguez-is"],
//   },
//   {
//     type: "text",
//     content: textSegments["this-new-activism"],
//   },
//   {
//     type: "text",
//     content: textSegments["whatever-they-decide"],
//   },
// ];

export default {
  title: "Layout components/TextSection",
};

export const Default = () => ({
  Component: ViewDefault,
  props: { content: [content[0], content[1], content[1]] },
});

export const LargerSpaceBetween = () => ({
  Component: ViewDefault,
  props: {
    content: [content[0], content[1], content[1]],
    textSectionStackSpace: "var(--s3)",
  },
});

export const ColumnWidthImage = () => ({
  Component: ViewDefault,
  props: { content: contentImage },
});
