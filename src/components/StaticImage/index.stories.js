import ViewDefault from './view.default.svelte';

const steps = [
	{
		text: "A: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis neque vero earum. Voluptatum corporis modi eveniet reprehenderit laboriosam? Ad vero, magni soluta maiores veniam incidunt rem earumdistinctio velit tenetur?",
		altText: "This is the alt text",
		caption: "This is the caption",
		srcURL: "img/static-a-graphic-small.jpg",
	},
	{
		text: "B: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis neque vero earum. Voluptatum corporis modi eveniet reprehenderit laboriosam? Ad vero, magni soluta maiores veniam incidunt rem earumdistinctio velit tenetur?",
		altText: "This is the alt text",
		caption: "This is the caption",
		srcURL: "img/static-b-graphic-small.jpg",
	},
	{
		text: "C: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis neque vero earum. Voluptatum corporis modi eveniet reprehenderit laboriosam? Ad vero, magni soluta maiores veniam incidunt rem earumdistinctio velit tenetur?",
		altText: "This is the alt text",
		caption: "This is the caption",
		srcURL: "img/static-c-graphic-small.jpg",
	},
	{
		text: "D: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis neque vero earum. Voluptatum corporis modi eveniet reprehenderit laboriosam? Ad vero, magni soluta maiores veniam incidunt rem earumdistinctio velit tenetur?",
		altText: "This is the alt text",
		caption: "This is the caption",
		srcURL: "img/static-d-graphic-small.jpg",
	},
	{
		text: "E: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis neque vero earum. Voluptatum corporis modi eveniet reprehenderit laboriosam? Ad vero, magni soluta maiores veniam incidunt rem earumdistinctio velit tenetur?",
		altText: "This is the alt text",
		caption: "This is the caption",
		srcURL: "img/static-e-graphic-small.jpg",
	},
]

export default {
  title: 'Layout components/StaticImage',
};

export const Default = () => ({
  Component: ViewDefault,
  props: { className: 'test', steps },
});
