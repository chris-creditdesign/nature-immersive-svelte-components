<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import Card from "../index.svelte";
  import CardSideImageBox from "../../CardSideImageBox/index.svelte";
  import cardData from "../../../../preview-content/card-data.js";
  import {
    headerLevelOptions,
    fontSizeOptions,
    spaceOptions,
    themeOptions,
  } from "../../../../preview-content/options.js";

  let argTypes = {
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
  title="components/cards/Card"
  component={Card}
  {argTypes}
  parameters={{
    layout: "fullscreen",
  }}
/>

<Template let:args>
  <Card {...args} />
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
    theme: "",
  }}
>
  <Card {...args} />
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
    theme: "",
  }}
>
  <Card {...args} />
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
    theme: "",
  }}
>
  <Card {...args}>
    <CardSideImageBox cardData={cardDataNoRelatedLinks} theme="invert" />
  </Card>
</Story>
