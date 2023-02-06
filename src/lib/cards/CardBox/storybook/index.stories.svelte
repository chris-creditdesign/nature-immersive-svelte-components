<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import CardBox from "../index.svelte";
  import CardSideImageBox from "../../CardSideImageBox/index.svelte";
  import cardData from "../../../../preview-content/card-data.js";
  import {
    headerLevelOptions,
    fontSizeOptions,
    spaceOptions,
    themeOptions,
  } from "../../../../preview-content/options.js";

  let argTypes = {
    boxSpace: { control: { type: "select", options: spaceOptions } },
    cardData: {
      control: "object",
    },
    cardHeaderStackSpace: {
      control: {
        type: "select",
        options: spaceOptions,
      },
    },
    className: { control: "text" },
    headerLevel: { control: { type: "select", options: headerLevelOptions } },
    headlineFontSize: {
      control: { type: "select", options: fontSizeOptions },
    },
    id: { control: "text" },
    stackSpace: { control: { type: "select", options: spaceOptions } },
    relatedLinksStackSpace: {
      control: { type: "select", options: spaceOptions },
    },
    theme: { control: { type: "select", options: themeOptions } },
  };

  let cardDataNoRelatedLinks = Object.assign({}, cardData, {
    relatedLinks: [],
  });
</script>

<Meta
  title="components/cards/CardBox"
  component={CardBox}
  {argTypes}
  parameters={{
    layout: "fullscreen",
  }}
/>

<Template let:args>
  <CardBox {...args} />
</Template>

<Story
  name="Default"
  let:args
  args={{
    cardData: cardDataNoRelatedLinks,
    cardHeaderStackSpace: "var(--s-4)",
    className: "example-class",
    headerLevel: "h2",
    headlineFontSize: "big-2",
    id: "example-id",
    stackSpace: "var(--s-1)",
    relatedLinksStackSpace: "var(--s-3)",
    theme: "invert",
  }}
>
  <CardBox {...args} />
</Story>

<Story
  name="With related links"
  let:args
  args={{
    cardData,
    cardHeaderStackSpace: "var(--s-4)",
    className: "example-class",
    headerLevel: "h2",
    headlineFontSize: "big-2",
    id: "example-id",
    stackSpace: "var(--s-1)",
    relatedLinksStackSpace: "var(--s-3)",
    theme: "invert",
  }}
>
  <CardBox {...args} />
</Story>

<Story
  name="With card inserted"
  let:args
  args={{
    cardData: cardDataNoRelatedLinks,
    cardHeaderStackSpace: "var(--s-4)",
    className: "example-class",
    headerLevel: "h2",
    headlineFontSize: "big-2",
    id: "example-id",
    stackSpace: "var(--s-1)",
    relatedLinksStackSpace: "var(--s-3)",
    theme: "invert",
  }}
>
  <CardBox {...args}>
    <CardSideImageBox {cardData} theme="" />
  </CardBox>
</Story>
