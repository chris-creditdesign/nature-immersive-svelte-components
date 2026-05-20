<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  const { Story } = defineMeta({
    title: 'components/sections/YouTubeSection',
  });
</script>

<script>
import VideoCard from "../VideoCard/index.svelte";
  import YouTubeCarousel from "../YouTubeCarousel/index.svelte";
  import { videoDataArray } from "../../../../preview-content/video-data-array.js";
</script>

<Story name="Default">
  <div class="stack" style="--stack-space--component: var(--s2);">
    <div
      class="center stack"
      style="--center-measure--component: var(--measure-big);"
    >
      <h2>The top ten</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>

    {#each videoDataArray as videoData, i}
      <VideoCard {videoData} videoOnLeft={i % 2 !== 0} />
    {/each}

    <div
      class="center stack"
      style="--center-measure--component: var(--measure-big);"
    >
      <h2>The runners up</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <YouTubeCarousel {videoDataArray} />
    </div>
  </div>
</Story>