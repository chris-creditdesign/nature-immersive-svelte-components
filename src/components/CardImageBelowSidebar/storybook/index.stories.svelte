<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import CardImageBelowSidebar from "../index.svelte";
  import cardData from "../../../preview-content/card-data.js";
  import {
    spaceOptions,
    percentOptions,
    measureOptions,
  } from "../../../preview-content/options.js";

  let argTypes = {
    cardData: {
      control: "object",
    },
    textMinWidth: {
      control: { type: "select", options: percentOptions },
    },
    imageOnLeft: { type: "boolean" },
    sidebarSpace: {
      control: { type: "select", options: spaceOptions },
    },
    imageWidth: {
      control: {
        type: "select",
        options: measureOptions,
      },
    },
    stackSpace: {
      control: {
        type: "select",
        options: spaceOptions,
      },
    },
    relatedLinksStackSpace: {
      control: {
        type: "select",
        options: spaceOptions,
      },
    },
  };

  let {
    altText,
    caption,
    footnote,
    srcURL,
    text,
    relatedLinksHeadline,
    relatedLinks,
  } = cardData;
</script>

<Meta
  title="Cards/components/CardImageBelowSidebar"
  component={CardImageBelowSidebar}
  {argTypes}
/>

<Story
  name="Default"
  let:args
  args={{
    cardData: {
      altText,
      caption,
      footnote,
      srcURL,
      text,
      relatedLinksHeadline,
      relatedLinks,
    },
  }}
>
  <CardImageBelowSidebar {...args} />
</Story>
