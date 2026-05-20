<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CardImageBelowSidebar from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/cards/components/CardImageBelowSidebar',
    component: CardImageBelowSidebar,
    argTypes: {
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
  },
  });
</script>

<script>
import cardData from "../../../../../preview-content/card-data.js";
  import {
    spaceOptions,
    percentOptions,
    measureOptions,
  } from "../../../../../preview-content/options.js";
  let cardDataNoRelatedLinks = Object.assign({}, cardData, {
    relatedLinks: [],
  });
</script>

<Story name="Default" args={{ cardData: cardDataNoRelatedLinks, textMinWidth: "50%", imageOnLeft: true, sidebarSpace: "var(--s-1)", imageWidth: "var(--s7)", stackSpace: "var(--s-1)", relatedLinksStackSpace: "var(--s-3)", }}>
  {#snippet children(args)}
    <CardImageBelowSidebar {...args} />
  {/snippet}
</Story>

<Story name="With related links" args={{ cardData, textMinWidth: "50%", imageOnLeft: true, sidebarSpace: "var(--s-1)", imageWidth: "var(--s7)", stackSpace: "var(--s-1)", relatedLinksStackSpace: "var(--s-3)", }}>
  {#snippet children(args)}
    <CardImageBelowSidebar {...args} />
  {/snippet}
</Story>