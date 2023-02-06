<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import {
    headerLevelOptions,
    fontSizeOptions,
  } from "../../../../../preview-content/options.js";
  import VideoCard from "../index.svelte";
  import { videoDataArray } from "../../../../../preview-content/video-data-array.js";

  let argTypes = {
    videoData: { control: "objet" },
    headerLevel: { control: { type: "select", options: headerLevelOptions } },
    headlineFontSize: {
      control: { type: "select", options: fontSizeOptions },
    },
    videoOnLeft: { control: "boolean" },
  };
</script>

<Meta
  title="components/sections/YouTubeSection/VideoCard"
  component={VideoCard}
  {argTypes}
/>

<Story
  name="Default"
  let:args
  args={{
    videoData: videoDataArray[0],
    headerLevel: "h2",
    headlineFontSize: "big-1",
    videoOnLeft: false,
  }}
>
  <VideoCard {...args} />
</Story>
