<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import {
    headerLevelOptions,
    fontSizeOptions,
  } from "../../../../../preview-content/options.js";
  import VideoInfo from "../index.svelte";
  import { videoDataArray } from "../../../../../preview-content/video-data-array.js";

  let argTypes = {
    videoData: { control: "objet" },
    headerLevel: { control: { type: "select", options: headerLevelOptions } },
    headlineFontSize: {
      control: { type: "select", options: fontSizeOptions },
    },
    className: { control: "text" },
  };
</script>

<style>
  .container {
    max-width: 300px;
  }

  .test {
    background-color: cornflowerblue;
    height: 600px;
    width: 100px;
  }
</style>

<Meta
  title="components/sections/YouTubeSection/VideoInfo"
  component={VideoInfo}
  {argTypes}
/>

<Story
  name="Default"
  let:args
  args={{
    videoData: videoDataArray[0],
    headerLevel: "h2",
    headlineFontSize: "big-1",
    className: "test",
  }}
>
  <VideoInfo {...args} />
</Story>

<Story
  name="Next to tall item"
  let:args
  args={{
    videoData: videoDataArray[0],
    headerLevel: "h2",
    headlineFontSize: "big-1",
    className: "test",
  }}
>
  <div class="cluster">
    <div class="container">
      <VideoInfo {...args} />
    </div>
    <div class="test" />
  </div>
</Story>
