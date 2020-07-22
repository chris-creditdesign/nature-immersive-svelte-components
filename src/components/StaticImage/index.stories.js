import StaticImage from "./view.default.svelte";
import StaticImageWithCards from "./view.cards.svelte";
import ViewConstrained from "./view.constrained.svelte";
import docs from "./docs.mdx";

export default {
  title: "Layout components/StaticImage",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: StaticImage,
  props: {
    className: "test",
    justifyContent: "center" /* default */,
    textWidth: "2fr" /* default */,
    imageWidth: "1fr" /* default */,
    gridGap: "var(--s3)" /* default */,
    rootMargin: "-50% 0px -50% 0px" /* default */,
    steps: [
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
    ],
  },
});

export const ConstrainedWidth = () => ({
  Component: ViewConstrained,
  props: {
    className: "test",
    justifyContent: "center" /* default */,
    textWidth: "2fr" /* default */,
    imageWidth: "1fr" /* default */,
    gridGap: "var(--s3)" /* default */,
    rootMargin: "-50% 0px -50% 0px" /* default */,
    steps: [
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
    ],
  },
});

export const WithCards = () => ({
  Component: StaticImageWithCards,
  props: {
    className: "test",
    justifyContent: "center" /* default */,
    textWidth: "2fr" /* default */,
    imageWidth: "1fr" /* default */,
    gridGap: "var(--s3)" /* default */,
    rootMargin: "-50% 0px -50% 0px" /* default */,
    steps: [
      {
        headline: "Section 1",
        altText: "This is the alt text",
        caption: "This is the caption",
        srcURL: "img/static-a-graphic-small.jpg",
        content: [
          {
            authorName: "Author Name <i>et al</i>.",
            journal: "Journal Name",
            headline: "Title of paper",
            href: "https://www.nature.com",
            text:
              "Summary of paper ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
          },
          {
            authorName: "Author Name <i>et al</i>.",
            journal: "Journal Name",
            headline: "Title of paper",
            href: "https://www.nature.com",
            text:
              "Summary of paper ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
          },
          {
            authorName: "Author Name <i>et al</i>.",
            journal: "Journal Name",
            headline: "Title of paper",
            href: "https://www.nature.com",
            text:
              "Summary of paper ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
          },
        ],
      },
      {
        headline: "Section 2",
        altText: "This is the alt text",
        caption: "This is the caption",
        srcURL: "img/static-b-graphic-small.jpg",
        content: [
          {
            authorName: "Author Name <i>et al</i>.",
            journal: "Journal Name",
            headline: "Title of paper",
            href: "https://www.nature.com",
            text:
              "Summary of paper ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
          },
          {
            authorName: "Author Name <i>et al</i>.",
            journal: "Journal Name",
            headline: "Title of paper",
            href: "https://www.nature.com",
            text:
              "Summary of paper ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
          },
          {
            authorName: "Author Name <i>et al</i>.",
            journal: "Journal Name",
            headline: "Title of paper",
            href: "https://www.nature.com",
            text:
              "Summary of paper ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
          },
        ],
      },
      {
        headline: "Section 3",
        altText: "This is the alt text",
        caption: "This is the caption",
        srcURL: "img/static-c-graphic-small.jpg",
        content: [
          {
            authorName: "Author Name <i>et al</i>.",
            journal: "Journal Name",
            headline: "Title of paper",
            href: "https://www.nature.com",
            text:
              "Summary of paper ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
          },
          {
            authorName: "Author Name <i>et al</i>.",
            journal: "Journal Name",
            headline: "Title of paper",
            href: "https://www.nature.com",
            text:
              "Summary of paper ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
          },
          {
            authorName: "Author Name <i>et al</i>.",
            journal: "Journal Name",
            headline: "Title of paper",
            href: "https://www.nature.com",
            text:
              "Summary of paper ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
          },
        ],
      },
      {
        headline: "Section 4",
        altText: "This is the alt text",
        caption: "This is the caption",
        srcURL: "img/static-d-graphic-small.jpg",
        content: [
          {
            authorName: "Author Name <i>et al</i>.",
            journal: "Journal Name",
            headline: "Title of paper",
            href: "https://www.nature.com",
            text:
              "Summary of paper ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
          },
          {
            authorName: "Author Name <i>et al</i>.",
            journal: "Journal Name",
            headline: "Title of paper",
            href: "https://www.nature.com",
            text:
              "Summary of paper ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
          },
          {
            authorName: "Author Name <i>et al</i>.",
            journal: "Journal Name",
            headline: "Title of paper",
            href: "https://www.nature.com",
            text:
              "Summary of paper ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
          },
        ],
      },
      {
        headline: "Section 5",
        altText: "This is the alt text",
        caption: "This is the caption",
        srcURL: "img/static-e-graphic-small.jpg",
        content: [
          {
            authorName: "Author Name <i>et al</i>.",
            journal: "Journal Name",
            headline: "Title of paper",
            href: "https://www.nature.com",
            text:
              "Summary of paper ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
          },
          {
            authorName: "Author Name <i>et al</i>.",
            journal: "Journal Name",
            headline: "Title of paper",
            href: "https://www.nature.com",
            text:
              "Summary of paper ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
          },
          {
            authorName: "Author Name <i>et al</i>.",
            journal: "Journal Name",
            headline: "Title of paper",
            href: "https://www.nature.com",
            text:
              "Summary of paper ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
          },
        ],
      },
    ],
  },
});

export const ImageAtTop = () => ({
  Component: ViewConstrained,
  props: {
    className: "test",
    justifyContent: "flex-start",
    textWidth: "2fr" /* default */,
    imageWidth: "1fr" /* default */,
    gridGap: "var(--s3)" /* default */,
    rootMargin: "-50% 0px -50% 0px" /* default */,
    steps: [
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
    ],
  },
});

export const ImageAtBottom = () => ({
  Component: ViewConstrained,
  props: {
    className: "test",
    justifyContent: "flex-end",
    textWidth: "2fr" /* default */,
    imageWidth: "1fr" /* default */,
    gridGap: "var(--s3)" /* default */,
    rootMargin: "-50% 0px -50% 0px" /* default */,
    steps: [
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
    ],
  },
});

export const SetMaxWidthForImage = () => ({
  Component: ViewConstrained,
  props: {
    className: "test",
    justifyContent: "center",
    textWidth: "2fr" /* default */,
    imageWidth: "min(1fr, 600px)",
    gridGap: "var(--s3)" /* default */,
    rootMargin: "-50% 0px -50% 0px" /* default */,
    steps: [
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
    ],
  },
});

export const TriggerOnChangeTextEnter = () => ({
  Component: ViewConstrained,
  props: {
    className: "test",
    justifyContent: "center",
    textWidth: "2fr" /* default */,
    imageWidth: "1fr" /* default */,
    gridGap: "var(--s3)" /* default */,
    rootMargin: "0px",
    steps: [
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
    ],
  },
});

export const ExtraWideGap = () => ({
  Component: ViewConstrained,
  props: {
    className: "test",
    justifyContent: "center" /* default */,
    textWidth: "2fr" /* default */,
    imageWidth: "1fr" /* default */,
    gridGap: "var(--s6)" /* default */,
    rootMargin: "-50% 0px -50% 0px" /* default */,
    steps: [
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
    ],
  },
});

export const ThinTextWidth = () => ({
  Component: ViewConstrained,
  props: {
    className: "test",
    justifyContent: "center" /* default */,
    textWidth: "1fr" /* default */,
    imageWidth: "1fr" /* default */,
    gridGap: "var(--s3)" /* default */,
    rootMargin: "-50% 0px -50% 0px" /* default */,
    steps: [
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
    ],
  },
});
