<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Header from '../index.svelte';
  const { Story } = defineMeta({
    title: 'Components/Header',
    component: Header,
    argTypes: {
    text: { control: "text" },
    headerLevel: {
      control: {
        type: "select",
        options: headerLevelOptions,
      },
    },
    headlineFontSize: {
      control: {
        type: "select",
        options: fontSizeOptions,
      },
    },
    headlineFontWeight: {
      control: {
        type: "select",
        options: fontWeightOptions,
      },
    },
  },
  });
</script>

<script>
import {
    headerLevelOptions,
    fontSizeOptions,
    fontWeightOptions,
  } from "../../../preview-content/options.js";
</script>

<Story name="Default">
  {#snippet children(args)}
    <Header {...args} />
  {/snippet}
</Story>