<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import YouTubeButton from "../index.svelte";
</script>

<Meta
  title="components/buttons/YouTubeButton"
  component={YouTubeButton}
  argTypes={{
    message: { control: "text" },
  }}
/>

<Story
  name="Default"
  let:args
  args={{
    message: "Play video",
  }}
>
  <div>
    <YouTubeButton {...args} />
  </div>
</Story>
