<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import CardImageBelowBox from "../index.svelte";
  import CardSideImageBox from "../../CardSideImageBox/index.svelte";
  import cardData from "../../../preview-content/card-data.js";
  import {
    fontSizeOptions,
    headerLevelOptions,
    measureOptions,
    percentOptions,
    spaceOptions,
    themeOptions,
  } from "../../../preview-content/options.js";

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
    textMinWidth: {
      control: { type: "select", options: percentOptions },
    },
    headerLevel: { control: { type: "select", options: headerLevelOptions } },
    headlineFontSize: {
      control: { type: "select", options: fontSizeOptions },
    },
    id: { control: "text" },
    imageOnLeft: { control: "boolean" },
    sidebarSpace: { control: { type: "select", options: spaceOptions } },
    imageWidth: { control: { type: "select", options: measureOptions } },
    stackSpace: { control: { type: "select", options: spaceOptions } },
    relatedLinksStackSpace: {
      control: { type: "select", options: spaceOptions },
    },
    theme: { control: { type: "select", options: themeOptions } },
  };
</script>

<Meta
  title="Cards/CardImageBelowBox"
  component={CardImageBelowBox}
  {argTypes}
/>

<Template let:args>
  <CardImageBelowBox {...args} />
</Template>

<Story
  name="Default"
  let:args
  args={{ cardData, className: "example-class", id: "example-id" }}
>
  <div style="max-width: var(--measure)">
    <CardImageBelowBox {...args} />
  </div>
</Story>

<Story
  name="With card inserted"
  let:args
  args={{ cardData, className: "example-class", id: "example-id" }}
>
  <div style="max-width: var(--measure)">
    <CardImageBelowBox {...args}>
      <CardSideImageBox {cardData} theme="" />
    </CardImageBelowBox>
  </div>
</Story>

<Story
  name="Full width"
  args={{ cardData, className: "example-class", id: "example-id" }}
/>
