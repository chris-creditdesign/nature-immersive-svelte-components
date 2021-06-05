<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import LogoDownloadFile from "../index.svelte";
</script>

<Meta
  title="Logos/LogoDownloadFile"
  component={LogoDownloadFile}
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
  <LogoDownloadFile {...args} />
</Story>
