<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import VideoCard from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/sections/YouTubeSection/VideoCard',
    component: VideoCard,
    argTypes: {
    videoData: { control: "objet" },
    headerLevel: { control: { type: "select", options: headerLevelOptions } },
    headlineFontSize: {
      control: { type: "select", options: fontSizeOptions },
    },
    videoOnLeft: { control: "boolean" },
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

<Story name="Default" args={{ videoData: videoDataArray[0], headerLevel: "h2", headlineFontSize: "big-1", videoOnLeft: false, }}>
  {#snippet children(args)}
    <VideoCard {...args} />
  {/snippet}
</Story>