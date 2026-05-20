<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import FadeInText from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/effects/FadeInText',
    component: FadeInText,
    argTypes: {
    className: { control: "text" },
    text: { control: "text" },
    fadeInDuration: { control: "text" },
  },
  });
</script>

<script>
import { Stack } from "creditdesign-svelte-components";
</script>

<Story name="Default" args={{ text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", fadeInDuration: "1500ms", }}>
  {#snippet children(args)}
    <FadeInText {...args} />
  {/snippet}
</Story>

<Story name="With class applied" args={{ text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", className: "font-size:big-2", fadeInDuration: "1500ms", }}>
  {#snippet children(args)}
    <FadeInText {...args} />
  {/snippet}
</Story>

<Story name="With multiple" args={{ className: "font-size:big-2 text-align:center", fadeInDuration: "1500ms", }}>
  {#snippet children(args)}
    <Stack stackSpace="50vh">
      <FadeInText {...args} text="one" />
      <FadeInText {...args} text="two" />
      <FadeInText {...args} text="three" />
      <FadeInText {...args} text="four" />
      <FadeInText {...args} text="five" />
    </Stack>
  {/snippet}
</Story>