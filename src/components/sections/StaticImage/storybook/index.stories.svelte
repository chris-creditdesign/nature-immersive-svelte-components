<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import StaticImage from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/sections/StaticImage',
    component: StaticImage,
    argTypes: {
    className: {
      control: "text",
    },
    gridGap: {
      control: {
        type: "select",
        options: spaceOptions,
      },
    },
    imageWidth: {
      control: "text",
    },
    justifyContent: {
      control: {
        type: "select",
        options: justifyContentOptions,
      },
    },
    imageOnLeft: {
      control: "boolean",
    },
    rootMargin: {
      control: "text",
    },
    steps: {
      control: "object",
    },
    textWidth: {
      control: "text",
    },
    stepMinHeight: {
      control: {
        type: "select",
        options: heightOptions,
      },
    },
    stepMarginBottom: {
      control: {
        type: "select",
        options: spaceOptions,
      },
    },
  },
    parameters: {
    layout: "fullscreen",
  },
  });
</script>

<script>
import ExampleComponent from "../components/ExampleComponent.svelte";
  import ExampleComponentWithCards from "../components/ExampleComponentWithCards.svelte";
  import {
    spaceOptions,
    justifyContentOptions,
    heightOptions,
  } from "../../../../preview-content/options.js";
  import {
    basicStepsWithCards,
    basicStepsWithParagraph,
  } from "../../../../preview-content/static-image-data.js";
  let stepsWithParagraph = basicStepsWithParagraph.map((d) => {
    let { text, altText, caption, srcURL } = d;
    let stepComponent = ExampleComponent;
    let stepContent = text;
    return { stepComponent, stepContent, altText, caption, srcURL };
  });
  let stepsWithCards = basicStepsWithCards.map((d) => {
    let { cards, headline, altText, caption, srcURL } = d;
    let stepComponent = ExampleComponentWithCards;
    let stepContent = { cards, headline };
    return { stepComponent, stepContent, altText, caption, srcURL };
  });
</script>

<Story name="Default" args={{ steps: stepsWithParagraph, className: "example-class", gridGap: "var(--s3)", justifyContent: "center", imageOnLeft: false, rootMargin: "-50% 0px -50% 0px", imageWidth: "1fr", textWidth: "2fr", stepMinHeight: "100vh", stepMarginBottom: "var(--s4)", }}>
  {#snippet children(args)}
    <StaticImage {...args} />
  {/snippet}
</Story>

<Story name="With cards" args={{ steps: stepsWithCards, className: "example-class", gridGap: "var(--s3)", justifyContent: "center", imageOnLeft: false, rootMargin: "-50% 0px -50% 0px", imageWidth: "1fr", textWidth: "2fr", stepMinHeight: "100vh", stepMarginBottom: "var(--s4)", }}>
  {#snippet children(args)}
    <StaticImage {...args} />
  {/snippet}
</Story>

<Story name="Fixed width for image column" args={{ steps: stepsWithParagraph, className: "example-class", gridGap: "var(--s3)", justifyContent: "center", imageOnLeft: false, rootMargin: "-50% 0px -50% 0px", imageWidth: "300px", textWidth: "2fr", stepMinHeight: "100vh", stepMarginBottom: "var(--s4)", }}>
  {#snippet children(args)}
    <StaticImage {...args} />
  {/snippet}
</Story>

<Story name="Multiple static images">
  <StaticImage steps={stepsWithParagraph} />
  <StaticImage steps={stepsWithCards} imageOnLeft={true} />
</Story>