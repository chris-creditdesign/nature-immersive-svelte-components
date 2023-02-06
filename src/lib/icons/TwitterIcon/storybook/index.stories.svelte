<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import TwitterIcon from "../index.svelte";
</script>

<Meta
  title="components/icons/TwitterIcon"
  component={TwitterIcon}
  argTypes={{
    className: { control: "text" },
    height: { control: { type: "range", min: 0.5, max: 10, step: 0.1 } },
    title: { control: "text" },
  }}
/>

<Story
  name="Default"
  let:args
  args={{
    className: "example-class",
    height: 1,
    title: "Twitter",
  }}
>
  <TwitterIcon {...args} />
</Story>
