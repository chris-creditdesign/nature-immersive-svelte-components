import ViewDefault from './view.default.svelte';

const data = {
	altText: "This is the alt text",
	caption: "This is the caption",
	srcURL: "img/image-small.jpg",
	captionSpace: "",
}

export default {
  title: 'Layout components/Image',
};

export const Default = () => ({
  Component: ViewDefault,
  props: {
		className: 'test',
		altText: data.altText,
		caption: data.caption,
		srcURL: data.srcURL,
		captionSpace: data.captionSpace,
	  },
});
