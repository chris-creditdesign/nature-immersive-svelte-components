import ViewDefault from "./view.default.svelte";
import ViewCards from "./view.cards.svelte";

const stepsBasic = [
  {
    text:
      "A: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis neque vero earum. Voluptatum corporis modi eveniet reprehenderit laboriosam? Ad vero, magni soluta maiores veniam incidunt rem earumdistinctio velit tenetur?",
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "img/static-a-graphic-small.jpg",
  },
  {
    text:
      "B: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis neque vero earum. Voluptatum corporis modi eveniet reprehenderit laboriosam? Ad vero, magni soluta maiores veniam incidunt rem earumdistinctio velit tenetur?",
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "img/static-b-graphic-small.jpg",
  },
  {
    text:
      "C: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis neque vero earum. Voluptatum corporis modi eveniet reprehenderit laboriosam? Ad vero, magni soluta maiores veniam incidunt rem earumdistinctio velit tenetur?",
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "img/static-c-graphic-small.jpg",
  },
  {
    text:
      "D: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis neque vero earum. Voluptatum corporis modi eveniet reprehenderit laboriosam? Ad vero, magni soluta maiores veniam incidunt rem earumdistinctio velit tenetur?",
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "img/static-d-graphic-small.jpg",
  },
  {
    text:
      "E: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis neque vero earum. Voluptatum corporis modi eveniet reprehenderit laboriosam? Ad vero, magni soluta maiores veniam incidunt rem earumdistinctio velit tenetur?",
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "img/static-e-graphic-small.jpg",
  },
];

let cardData = {
  authorName: "Author Name <i>et al</i>.",
  journal: "Journal Name",
  headline: "Title of paper",
  href: "https://www.nature.com",
  text:
    "Summary of paper ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
};

const stepsCards = [
  {
    headline: "Section 1",
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "img/static-a-graphic-small.jpg",
    content: [cardData, cardData, cardData],
  },
  {
    headline: "Section 2",
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "img/static-b-graphic-small.jpg",
    content: [cardData, cardData, cardData],
  },
  {
    headline: "Section 3",
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "img/static-c-graphic-small.jpg",
    content: [cardData, cardData, cardData],
  },
  {
    headline: "Section 4",
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "img/static-d-graphic-small.jpg",
    content: [cardData, cardData, cardData],
  },
  {
    headline: "Section 5",
    altText: "This is the alt text",
    caption: "This is the caption",
    srcURL: "img/static-e-graphic-small.jpg",
    content: [cardData, cardData, cardData],
  },
];

export default {
  title: "Layout components/StaticImage",
};

export const Default = () => ({
  Component: ViewDefault,
  props: { className: "test", steps: stepsBasic },
});

export const WithCards = () => ({
  Component: ViewCards,
  props: { className: "test", steps: stepsCards },
});
