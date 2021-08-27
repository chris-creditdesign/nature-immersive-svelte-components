<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import CardHeader from "../index.svelte";
  import cardData from "../../../../../preview-content/card-data.js";
  import {
    headerLevelOptions,
    fontSizeOptions,
    spaceOptions,
  } from "../../../../../preview-content/options.js";

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
    headerLevel: { control: { type: "select", options: headerLevelOptions } },
    headlineFontSize: {
      control: { type: "select", options: fontSizeOptions },
    },
    id: { control: "text" },
  };

  let { eyebrow, subHead, headline, href } = cardData;
</script>

<Meta
  title="components/cards/components/CardHeader"
  component={CardHeader}
  {argTypes}
/>

<Story
  name="Default"
  let:args
  args={{
    cardData: { eyebrow, subHead, headline, href },
    cardHeaderStackSpace: "var(--s-4)",
    headerLevel: "h2",
    headlineFontSize: "big-2",
    id: "example-id",
  }}
>
  <CardHeader {...args} />
</Story>
