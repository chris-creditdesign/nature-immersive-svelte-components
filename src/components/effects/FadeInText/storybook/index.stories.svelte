<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import { Stack } from "creditdesign-svelte-components";
  import FadeInText from "../index.svelte";

  let argTypes = {
    className: { control: "text" },
    text: { control: "text" },
    fadeInDuration: { control: "text" },
  };
</script>

<Meta title="components/effects/FadeInText" component={FadeInText} {argTypes} />

<Template let:args>
  <FadeInText {...args} />
</Template>

<Story
  name="Default"
  let:args
  args={{
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fadeInDuration: "1500ms",
  }}
>
  <FadeInText {...args} />
</Story>

<Story
  name="With class applied"
  let:args
  args={{
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    className: "font-size:big-2",
    fadeInDuration: "1500ms",
  }}
>
  <FadeInText {...args} />
</Story>

<Story
  name="With multiple"
  let:args
  args={{
    className: "font-size:big-2 text-align:center",
    fadeInDuration: "1500ms",
  }}
>
  <Stack stackSpace="50vh">
    <FadeInText {...args} text="one" />
    <FadeInText {...args} text="two" />
    <FadeInText {...args} text="three" />
    <FadeInText {...args} text="four" />
    <FadeInText {...args} text="five" />
  </Stack>
</Story>
