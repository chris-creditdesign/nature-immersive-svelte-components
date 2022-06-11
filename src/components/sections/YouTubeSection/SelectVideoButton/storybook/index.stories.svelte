<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import {
    headerLevelOptions,
    fontSizeOptions,
  } from "../../../../../preview-content/options.js";
  import SelectVideoButton from "../index.svelte";
  import { videoDataArray } from "../../../../../preview-content/video-data-array.js";

  let argTypes = {
    videoId: { control: "text" },
    title: { control: "text" },
    index: { control: "number" },
  };
</script>

<Meta
  title="components/sections/YouTubeSection/SelectVideoButton"
  component={SelectVideoButton}
  {argTypes}
/>

<Story
  name="Default"
  let:args
  args={{
    videoId: videoDataArray[0].videoId,
    title: videoDataArray[0].title,
    index: 0,
  }}
>
  <SelectVideoButton {...args} />
</Story>
