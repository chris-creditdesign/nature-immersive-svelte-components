<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import ChevronIcon from "../index.svelte";
</script>

<Meta
  title="components/icons/ChevronIcon"
  component={ChevronIcon}
  argTypes={{
    className: { control: "text" },
    height: { control: { type: "range", min: 0.5, max: 10, step: 0.1 } },
  }}
/>

<Story
  name="Default"
  let:args
  args={{
    className: "example-class",
    height: 1,
  }}
>
  <ChevronIcon {...args} />
</Story>
