<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import DownloadFileIcon from "../index.svelte";
</script>

<Meta
  title="components/icons/DownloadFileIcon"
  component={DownloadFileIcon}
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
  <DownloadFileIcon {...args} />
</Story>
