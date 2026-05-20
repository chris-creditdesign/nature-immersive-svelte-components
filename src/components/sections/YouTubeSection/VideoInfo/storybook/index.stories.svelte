<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import VideoInfo from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/sections/YouTubeSection/VideoInfo',
    component: VideoInfo,
    argTypes: {
    videoData: { control: "objet" },
    headerLevel: { control: { type: "select", options: headerLevelOptions } },
    headlineFontSize: {
      control: { type: "select", options: fontSizeOptions },
    },
    className: { control: "text" },
  },
  });
</script>

<script>
import {
    headerLevelOptions,
    fontSizeOptions,
  } from "../../../../../preview-content/options.js";
  import { videoDataArray } from "../../../../../preview-content/video-data-array.js";
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

<Story name="Default" args={{ videoData: videoDataArray[0], headerLevel: "h2", headlineFontSize: "big-1", className: "test", }}>
  {#snippet children(args)}
    <VideoInfo {...args} />
  {/snippet}
</Story>

<Story name="Next to tall item" args={{ videoData: videoDataArray[0], headerLevel: "h2", headlineFontSize: "big-1", className: "test", }}>
  {#snippet children(args)}
    <div class="cluster">
      <div class="container">
        <VideoInfo {...args} />
      </div>
      <div class="test"></div>
    </div>
  {/snippet}
</Story>