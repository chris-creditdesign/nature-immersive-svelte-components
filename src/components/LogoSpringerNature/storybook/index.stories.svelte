<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import LogoSpringerNature from "../index.svelte";
</script>

<Meta
  title="Logos/LogoSpringerNature"
  component={LogoSpringerNature}
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
  }}
>
  <LogoSpringerNature {...args} />
</Story>
