<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Card from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/cards/Card',
    component: Card,
    argTypes: {
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
  },
    parameters: {
    layout: "fullscreen",
  },
  });
</script>

<script>
import CardSideImageBox from "../../CardSideImageBox/index.svelte";
  import cardData from "../../../../preview-content/card-data.js";
  import {
    headerLevelOptions,
    fontSizeOptions,
    spaceOptions,
    themeOptions,
  } from "../../../../preview-content/options.js";
  let cardDataNoRelatedLinks = Object.assign({}, cardData, {
    relatedLinks: [],
  });
</script>

<Story name="Default" args={{ cardData: cardDataNoRelatedLinks, cardHeaderStackSpace: "var(--s-4)", className: "example-class", headerLevel: "h2", headlineFontSize: "big-2", id: "example-id", stackSpace: "var(--s-1)", relatedLinksStackSpace: "var(--s-3)", theme: "", }}>
  {#snippet children(args)}
    <Card {...args} />
  {/snippet}
</Story>

<Story name="With related links" args={{ cardData, cardHeaderStackSpace: "var(--s-4)", className: "example-class", headerLevel: "h2", headlineFontSize: "big-2", id: "example-id", stackSpace: "var(--s-1)", relatedLinksStackSpace: "var(--s-3)", theme: "", }}>
  {#snippet children(args)}
    <Card {...args} />
  {/snippet}
</Story>

<Story name="With card inserted" args={{ cardData: cardDataNoRelatedLinks, cardHeaderStackSpace: "var(--s-4)", className: "example-class", headerLevel: "h2", headlineFontSize: "big-2", id: "example-id", stackSpace: "var(--s-1)", relatedLinksStackSpace: "var(--s-3)", theme: "", }}>
  {#snippet children(args)}
    <Card {...args}>
      <CardSideImageBox cardData={cardDataNoRelatedLinks} theme="invert" />
    </Card>
  {/snippet}
</Story>