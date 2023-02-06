<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import CardHeadline from "../index.svelte";
  import cardData from "../../../../../preview-content/card-data.js";
  import {
    headerLevelOptions,
    fontSizeOptions,
  } from "../../../../../preview-content/options.js";

  let argTypes = {
    cardData: {
      control: "object",
    },
    headerLevel: { control: { type: "select", options: headerLevelOptions } },
    headlineFontSize: {
      control: { type: "select", options: fontSizeOptions },
    },
    id: { control: "text" },
  };

  let { href } = cardData;
</script>

<Meta
  title="components/cards/components/CardHeadline"
  component={CardHeadline}
  {argTypes}
/>

<Story
  name="Default"
  let:args
  args={{
    cardData: { href },
    headerLevel: "h2",
    headlineFontSize: "big-2",
    id: "example-id",
  }}
>
  <CardHeadline {...args}>Headline</CardHeadline>
</Story>

<Story
  name="With link"
  let:args
  args={{
    cardData: { href },
    headerLevel: "h2",
    headlineFontSize: "big-2",
    id: "example-id",
  }}
>
  <CardHeadline {...args}>
    <a href="https://www.nature.com">Headline </a>
  </CardHeadline>
</Story>
