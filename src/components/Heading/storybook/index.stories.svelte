<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import Heading from "../index.svelte";
  import articleData from "../../../preview-content/article-data.js";
  import {
    spaceOptions,
    measureOptions,
  } from "../../../preview-content/options.js";

  let { author, headline, photographer, publishedAt, stand } = articleData;

  let argTypes = {
    articleData: { control: "object" },
    className: { control: "text" },
    maxWidth: { control: { type: "select", options: measureOptions } },
    centerSpace: {
      control: {
        type: "select",
        options: spaceOptions,
      },
    },
    headAndCreditsStackSpace: {
      control: {
        type: "select",
        options: spaceOptions,
      },
    },
    headStandStackSpace: {
      control: {
        type: "select",
        options: spaceOptions,
      },
    },
    creditsStackSpace: {
      control: {
        type: "select",
        options: spaceOptions,
      },
    },
  };
</script>

<Meta
  title="Components/Heading"
  component={Heading}
  {argTypes}
  parameters={{
    layout: "fullscreen",
  }}
/>

<Template let:args>
  <Heading {...args} />
</Template>

<Story
  name="Default"
  args={{
    articleData: { author, headline, photographer, publishedAt, stand },
    className: "test",
  }}
/>
