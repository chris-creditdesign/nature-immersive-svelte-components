<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import { Stack } from "creditdesign-svelte-components";
  import FadeInText from "../index.svelte";

  let argTypes = {
    className: { control: "text" },
    text: { control: "text" },
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
  }}
>
  <FadeInText {...args} />
</Story>

<Story
  name="With multiple"
  let:args
  args={{
    className: "font-size:big-2 text-align:center",
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
