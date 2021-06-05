<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import RelatedArticleContainer from "../index.svelte";

  import {
    spaceOptions,
    measureOptions,
  } from "../../../preview-content/options.js";

  let cardData1 = {
    altText: "This is the alt text",
    srcURL: "img/image.jpg",
    headline: "Headline consectetur ipsum dolor sit amet",
    href: "https://www.nature.com",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus.",
  };

  let cardData2 = {
    altText: "This is the alt text",
    srcURL: "img/image.jpg",
    headline: "Headline adipisicing",
    href: "https://www.nature.com",
    text:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
  };
</script>

<Meta
  title="components/RelatedArticleContainer"
  component={RelatedArticleContainer}
  {argTypes}
/>

<Template let:args>
  <RelatedArticleContainer {...args} />
</Template>

<Story
  name="Default"
  let:args
  args={{ relatedArticles: [cardData1, cardData2, cardData3] }}
>
  <div style="max-width: var(--measure)">
    <RelatedArticleContainer {...args} />
  </div>
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
  }}
>
  <div style="max-width: var(--measure)">
    <RelatedArticleContainer {...args} />
  </div>
</Story>

<Story
  name="One article"
  let:args
  args={{
    relatedArticles: [cardData1],
  }}
>
  <div style="max-width: var(--measure)">
    <RelatedArticleContainer {...args} />
  </div>
</Story>

<Story
  name="No headline"
  let:args
  args={{ relatedArticles: [cardData1, cardData2, cardData3], headline: "" }}
>
  <div style="max-width: var(--measure)">
    <RelatedArticleContainer {...args} />
  </div>
</Story>

<Story
  name="Full width"
  args={{ relatedArticles: [cardData1, cardData2, cardData3] }}
/>
