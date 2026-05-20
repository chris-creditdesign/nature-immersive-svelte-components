<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CardHeadline from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/cards/components/CardHeadline',
    component: CardHeadline,
    argTypes: {
    cardData: {
      control: "object",
    },
    headerLevel: { control: { type: "select", options: headerLevelOptions } },
    headlineFontSize: {
      control: { type: "select", options: fontSizeOptions },
    },
    id: { control: "text" },
  },
  });
</script>

<script>
import cardData from "../../../../../preview-content/card-data.js";
  import {
    headerLevelOptions,
    fontSizeOptions,
  } from "../../../../../preview-content/options.js";
  let { href } = cardData;
</script>

<Story name="Default" args={{ cardData: { href }, headerLevel: "h2", headlineFontSize: "big-2", id: "example-id", }}>
  {#snippet children(args)}
    <CardHeadline {...args}>Headline</CardHeadline>
  {/snippet}
</Story>

<Story name="With link" args={{ cardData: { href }, headerLevel: "h2", headlineFontSize: "big-2", id: "example-id", }}>
  {#snippet children(args)}
    <CardHeadline {...args}>
      <a href="https://www.nature.com">Headline </a>
    </CardHeadline>
  {/snippet}
</Story>