import ViewDefault from './view.default.svelte';

const data = {
	altText: "This is the alt text",
	caption: "This is the caption",
	srcURL: "img/image.jpg",
	captionSpace: "",
	altText: "This is the alt text",
	caption: "This is the caption",
	footnote: "Footnote",
	headline: "Headline",
	href: "https://www.nature.com",
	srcURL: "img/image.jpg",
	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
}

export default {
  title: 'Layout components/Card/CardSideImage',
};

export const Default = () => ({
  Component: ViewDefault,
  props: { className: 'test',
	altText: data.altText,
	caption: data.caption,
	srcURL: data.srcURL,
	captionSpace: data.captionSpace,
	altText: data.altText,
	caption: data.caption,
	footnote: data.footnote,
	headline: data.headline,
	href: data.href,
	text: data.text,
  },
});

export const NoImage = () => ({
  Component: ViewDefault,
  props: { className: 'test',
	altText: data.altText,
	caption: data.caption,
	captionSpace: data.captionSpace,
	altText: data.altText,
	caption: data.caption,
	footnote: data.footnote,
	headline: data.headline,
	href: data.href,
	text: data.text,
  },
});
