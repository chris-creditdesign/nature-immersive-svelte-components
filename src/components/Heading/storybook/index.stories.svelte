<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Heading from '../index.svelte';
  const { Story } = defineMeta({
    title: 'Components/Heading',
    component: Heading,
    argTypes: {
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
  },
    parameters: {
    layout: "fullscreen",
  },
  });
</script>

<script>
import articleData from "../../../preview-content/article-data.js";
  import {
    spaceOptions,
    measureOptions,
  } from "../../../preview-content/options.js";
  let { author, headline, photographer, publishedAt, stand } = articleData;
</script>

<Story name="Default" args={{ articleData: { author, headline, photographer, publishedAt, stand }, className: "test", }}>
  {#snippet children(args)}
    <Heading {...args} />
  {/snippet}
</Story>