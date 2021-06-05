<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import { Stack, Grid } from "creditdesign-svelte-components";
  import TextSection from "../index.svelte";
  import Card from "../../Card/index.svelte";
  import CardBox from "../../CardBox/index.svelte";
  import CardSideImage from "../../CardSideImage/index.svelte";
  import CardSideImageBox from "../../CardSideImageBox/index.svelte";
  import cardData from "../../../preview-content/card-data.js";
  import {
    spaceOptions,
    measureOptions,
  } from "../../../preview-content/options.js";

  let content = [
    {
      type: "text",
      data:
        "<p class='drop-cap'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti numquam officia architecto modi! Labore natus error nisi earum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti numquam officia architecto modi! Labore natus error nisi earum.</p>",
    },
    {
      type: "text",
      data:
        "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti numquam officia architecto modi! Labore natus error nisi earum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti numquam officia architecto modi! Labore natus error nisi earum.</p>",
    },
    {
      type: "image",
      data: {
        altText: "This is the alt text",
        caption: "This is the caption",
        srcURL: "img/image-small.jpg",
      },
    },
  ];

  let contentImage = [
    content[1],
    {
      type: "image",
      data: {
        altText: "This is the alt text",
        caption: "This is the caption",
        srcURL: "img/image-small.jpg",
      },
    },
    content[1],
  ];

  let argTypes = {
    centerMeasure: {
      control: {
        type: "select",
        options: measureOptions,
      },
    },
    centerSpace: {
      control: {
        type: "select",
        options: spaceOptions,
      },
    },
    content: {
      control: "object",
    },
    textSectionStackSpace: {
      control: { type: "select", options: spaceOptions },
    },
  };
</script>

<Meta
  title="Layout components/TextSection"
  component={TextSection}
  {argTypes}
/>

<Template let:args>
  <TextSection {...args} />
</Template>

<Story
  name="Default"
  let:args
  args={{ content: [content[0], content[1], content[1]] }}
/>

<Story
  name="With Image"
  let:args
  args={{ content: [content[0], content[2], content[1], content[1]] }}
/>
