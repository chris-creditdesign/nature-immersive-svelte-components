<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CardSideImageBox from '../../CardSideImageBox/index.svelte';
  const { Story } = defineMeta({
    title: 'components/cards/CardSideImageBox',
    component: CardSideImageBox,
    argTypes: {
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
  },
    parameters: {
    layout: "fullscreen",
  },
  });
</script>

<script>
import cardData from "../../../../preview-content/card-data.js";
  import {
    fontSizeOptions,
    headerLevelOptions,
    measureOptions,
    percentOptions,
    spaceOptions,
    themeOptions,
  } from "../../../../preview-content/options.js";
  let cardDataNoRelatedLinks = Object.assign({}, cardData, {
    relatedLinks: [],
  });
</script>

<Story name="Default" args={{ cardData: cardDataNoRelatedLinks, cardHeaderStackSpace: "var(--s-4)", className: "example-class", headerLevel: "h2", headlineFontSize: "big-2", id: "example-id", textMinWidth: "50%", imageOnLeft: true, sidebarSpace: "var(--s-1)", imageWidth: "var(--s7)", stackSpace: "var(--s-1)", relatedLinksStackSpace: "var(--s-3)", theme: "invert", }}>
  {#snippet children(args)}
    <CardSideImageBox {...args} />
  {/snippet}
</Story>

<Story name="With related links" args={{ cardData, cardHeaderStackSpace: "var(--s-4)", className: "example-class", headerLevel: "h2", headlineFontSize: "big-2", id: "example-id", textMinWidth: "50%", imageOnLeft: true, sidebarSpace: "var(--s-1)", imageWidth: "var(--s7)", stackSpace: "var(--s-1)", relatedLinksStackSpace: "var(--s-3)", theme: "invert", }}>
  {#snippet children(args)}
    <CardSideImageBox {...args} />
  {/snippet}
</Story>

<Story name="With card inserted" args={{ cardData: cardDataNoRelatedLinks, cardHeaderStackSpace: "var(--s-4)", className: "example-class", headerLevel: "h2", headlineFontSize: "big-2", id: "example-id", textMinWidth: "50%", imageOnLeft: true, sidebarSpace: "var(--s-1)", imageWidth: "var(--s7)", stackSpace: "var(--s-1)", relatedLinksStackSpace: "var(--s-3)", theme: "invert", }}>
  {#snippet children(args)}
    <CardSideImageBox {...args}>
      <CardSideImageBox {cardData} theme="" />
    </CardSideImageBox>
  {/snippet}
</Story>