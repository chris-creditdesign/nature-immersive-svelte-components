<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import CardBox from "../index.svelte";
  import CardSideImageBox from "../../CardSideImageBox/index.svelte";
  import cardData from "../../../preview-content/card-data.js";
  import {
    headerLevelOptions,
    fontSizeOptions,
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
    headerLevel: { control: { type: "select", options: headerLevelOptions } },
    headlineFontSize: {
      control: { type: "select", options: fontSizeOptions },
    },
    id: { control: "text" },
    stackSpace: { control: { type: "select", options: spaceOptions } },
    theme: { control: { type: "select", options: themeOptions } },
  };
</script>

<Meta title="Cards/CardBox" component={CardBox} {argTypes} />

<Template let:args>
  <CardBox {...args} />
</Template>

<Story
  name="Default"
  let:args
  args={{ cardData, className: "example-class", id: "example-id" }}
>
  <div style="max-width: var(--measure)">
    <CardBox {...args} />
  </div>
</Story>

<Story
  name="With card inserted"
  let:args
  args={{ cardData, className: "example-class", id: "example-id" }}
>
  <div style="max-width: var(--measure)">
    <CardBox {...args}>
      <CardSideImageBox {cardData} theme="" />
    </CardBox>
  </div>
</Story>

<Story
  name="Full width"
  args={{ cardData, className: "example-class", id: "example-id" }}
/>
