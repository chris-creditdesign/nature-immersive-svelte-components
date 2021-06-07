<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import Card from "../index.svelte";
  import CardSideImageBox from "../../CardSideImageBox/index.svelte";
  import cardData from "../../../preview-content/card-data.js";
  import {
    headerLevelOptions,
    fontSizeOptions,
    spaceOptions,
    themeOptions,
  } from "../../../preview-content/options.js";

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
</script>

<Meta title="Cards/Card" component={Card} {argTypes} />

<Template let:args>
  <Card {...args} />
</Template>

<Story
  name="Default"
  let:args
  args={{ cardData, className: "example-class", id: "example-id" }}
>
  <div style="max-width: var(--measure)">
    <Card {...args} />
  </div>
</Story>

<Story
  name="With card inserted"
  let:args
  args={{ cardData, className: "example-class", id: "example-id" }}
>
  <div style="max-width: var(--measure)">
    <Card {...args}>
      <CardSideImageBox {cardData} theme="invert" />
    </Card>
  </div>
</Story>

<Story
  name="Full width"
  args={{ cardData, className: "example-class", id: "example-id" }}
/>
