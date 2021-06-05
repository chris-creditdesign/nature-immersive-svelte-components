<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import LogoDownload from "../index.svelte";
</script>

<Meta
  title="Logos/LogoDownload"
  component={LogoDownload}
  argTypes={{
    title: { control: "text" },
    width: { control: { type: "range", min: 5, max: 100, step: 1 } },
  }}
/>

<Story name="Default" let:args>
  <LogoDownload {...args} />
</Story>
