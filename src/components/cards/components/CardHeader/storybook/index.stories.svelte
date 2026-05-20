<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CardHeader from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/cards/components/CardHeader',
    component: CardHeader,
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
    spaceOptions,
  } from "../../../../../preview-content/options.js";
  let { eyebrow, subHead, headline, href } = cardData;
</script>

<Story name="Default" args={{ cardData: { eyebrow, subHead, headline, href }, cardHeaderStackSpace: "var(--s-4)", headerLevel: "h2", headlineFontSize: "big-2", id: "example-id", }}>
  {#snippet children(args)}
    <CardHeader {...args} />
  {/snippet}
</Story>