<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import LogoTriangle from "../index.svelte";
</script>

<Meta
  title="Logos/LogoTriangle"
  component={LogoTriangle}
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
  <LogoTriangle {...args} />
</Story>
