<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import YouTubeCarousel from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/sections/YouTubeSection/YouTubeCarousel',
    component: YouTubeCarousel,
    argTypes: {
    videoDataArray: { control: "objet" },
    headerLevel: { control: { type: "select", options: headerLevelOptions } },
    headlineFontSize: {
      control: { type: "select", options: fontSizeOptions },
    },
    videoListLabel: { control: "text" },
  },
  });
</script>

<script>
import {
    headerLevelOptions,
    fontSizeOptions,
  } from "../../../../../preview-content/options.js";
  import LiteYouTube from "../../../../videos/LiteYouTube/index.svelte";
  import { videoDataArray } from "../../../../../preview-content/video-data-array.js";
</script>

<Story name="Default" args={{ videoDataArray, }}>
  {#snippet children(args)}
    <YouTubeCarousel {...args} />
  {/snippet}
</Story>

<Story name="With other YouTube players on page." args={{ videoDataArray, }}>
  {#snippet children(args)}
    <div class="stack">
      <LiteYouTube videoId={"kYmLQP2M-qo"} />
      <YouTubeCarousel {...args} />
    </div>
  {/snippet}
</Story>