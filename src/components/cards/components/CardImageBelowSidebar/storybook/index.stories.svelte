<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import CardImageBelowSidebar from "../index.svelte";
  import cardData from "../../../../../preview-content/card-data.js";
  import {
    spaceOptions,
    percentOptions,
    measureOptions,
  } from "../../../../../preview-content/options.js";

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

  let cardDataNoRelatedLinks = Object.assign({}, cardData, {
    relatedLinks: [],
  });
</script>

<Meta
  title="components/cards/components/CardImageBelowSidebar"
  component={CardImageBelowSidebar}
  {argTypes}
/>

<Story
  name="Default"
  let:args
  args={{
    cardData: cardDataNoRelatedLinks,
    textMinWidth: "50%",
    imageOnLeft: true,
    sidebarSpace: "var(--s-1)",
    imageWidth: "var(--s7)",
    stackSpace: "var(--s-1)",
    relatedLinksStackSpace: "var(--s-3)",
  }}
>
  <CardImageBelowSidebar {...args} />
</Story>

<Story
  name="With related links"
  let:args
  args={{
    cardData,
    textMinWidth: "50%",
    imageOnLeft: true,
    sidebarSpace: "var(--s-1)",
    imageWidth: "var(--s7)",
    stackSpace: "var(--s-1)",
    relatedLinksStackSpace: "var(--s-3)",
  }}
>
  <CardImageBelowSidebar {...args} />
</Story>
