<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import LogoChevron from "../index.svelte";
</script>

<Meta
  title="Logos/LogoChevron"
  component={LogoChevron}
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
  }}
>
  <LogoChevron {...args} />
</Story>
