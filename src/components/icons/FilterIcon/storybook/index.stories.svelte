<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import FilterIcon from "../index.svelte";
</script>

<Meta
  title="components/icons/FilterIcon"
  component={FilterIcon}
  argTypes={{
    className: { control: "text" },
    height: { control: { type: "range", min: 0.5, max: 10, step: 0.1 } },
    checked: { control: "boolean" },
  }}
/>

<Story
  name="Default"
  let:args
  args={{
    className: "example-class",
    height: 1,
    checked: false,
  }}
>
  <FilterIcon {...args} />
</Story>
