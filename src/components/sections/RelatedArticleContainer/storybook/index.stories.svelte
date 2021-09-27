<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import RelatedArticleContainer from "../index.svelte";

  import {
    spaceOptions,
    measureOptions,
    headerLevelOptions,
    fontSizeOptions,
  } from "../../../../preview-content/options.js";

  let cardData1 = {
    altText: "This is the alt text",
    srcURL: "img/image.jpg",
    headline: "Headline consectetur ipsum dolor sit amet",
    href: "https://www.nature.com",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus.",
  };

  let cardData2 = {
    altText: "This is the alt text",
    srcURL: "img/image.jpg",
    headline: "Headline adipisicing",
    href: "https://www.nature.com",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  };

  let cardData3 = {
    altText: "This is the alt text",
    srcURL: "img/image.jpg",
    headline: "Headline",
    href: "https://www.nature.com",
    text: "Lorem ipsum dolor sit amet",
  };

  let argTypes = {
    headline: {
      control: "text",
    },
    stand: {
      control: "text",
    },
    relatedArticleFlexBasis: {
      control: {
        type: "select",
        options: measureOptions,
      },
    },
    relatedArticleFlexGap: {
      control: {
        type: "select",
        options: spaceOptions,
      },
    },
    relatedArticles: {
      control: "object",
    },
    headerLevel: { control: { type: "select", options: headerLevelOptions } },
    headlineFontSize: {
      control: { type: "select", options: fontSizeOptions },
    },
  };
</script>

<Meta
  title="components/sections/RelatedArticleContainer"
  component={RelatedArticleContainer}
  {argTypes}
/>

<Template let:args>
  <RelatedArticleContainer {...args} />
</Template>

<Story
  name="Default"
  let:args
  args={{
    relatedArticles: [cardData1, cardData2, cardData3],
    headline: "Related articles",
    stand: "",
    relatedArticleFlexBasis: "",
    relatedArticleFlexGap: "",
    cardHeaderLevel: "h3",
    cardHeadlineFontSize: "big-1",
  }}
>
  <RelatedArticleContainer {...args} />
</Story>

<Story
  name="With standfirst"
  let:args
  args={{
    relatedArticles: [cardData1, cardData2, cardData3],
    headline: "Related articles",
    stand:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    relatedArticleFlexBasis: "",
    relatedArticleFlexGap: "",
    cardHeaderLevel: "h3",
    cardHeadlineFontSize: "big-1",
  }}
>
  <RelatedArticleContainer {...args} />
</Story>

<Story
  name="Many articles"
  let:args
  args={{
    relatedArticles: [
      cardData1,
      cardData2,
      cardData3,
      cardData1,
      cardData2,
      cardData3,
      cardData1,
      cardData2,
      cardData3,
    ],
    headline: "Related articles",
    stand: "",
    relatedArticleFlexBasis: "",
    relatedArticleFlexGap: "",
    cardHeaderLevel: "h3",
    cardHeadlineFontSize: "big-1",
  }}
>
  <RelatedArticleContainer {...args} />
</Story>

<Story
  name="One article"
  let:args
  args={{
    relatedArticles: [cardData1],
    headline: "Related articles",
    stand: "",
    relatedArticleFlexBasis: "",
    relatedArticleFlexGap: "",
    cardHeaderLevel: "h3",
    cardHeadlineFontSize: "big-1",
  }}
>
  <RelatedArticleContainer {...args} />
</Story>

<Story
  name="No headline"
  let:args
  args={{
    relatedArticles: [cardData1, cardData2, cardData3],
    headline: "",
    stand: "",
    relatedArticleFlexBasis: "",
    relatedArticleFlexGap: "",
    cardHeaderLevel: "h3",
    cardHeadlineFontSize: "big-1",
  }}
>
  <RelatedArticleContainer {...args} />
</Story>
