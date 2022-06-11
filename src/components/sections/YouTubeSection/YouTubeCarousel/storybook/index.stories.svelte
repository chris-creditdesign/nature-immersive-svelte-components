<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import YouTubeCarousel from "../index.svelte";
  import LiteYouTube from "../../../../videos/LiteYouTube/index.svelte";
  import { videoDataArray } from "../../../../../preview-content/video-data-array.js";

  let argTypes = {
    videoDataArray: { control: "objet" },
  };
</script>

<Meta
  title="components/sections/YouTubeSection/YouTubeCarousel"
  component={YouTubeCarousel}
  {argTypes}
/>

<Story
  name="Default"
  let:args
  args={{
    videoDataArray,
  }}
>
  <YouTubeCarousel {...args} />
</Story>

<Story
  name="With other YouTube players on page."
  let:args
  args={{
    videoDataArray,
  }}
>
  <div class="stack">
    <LiteYouTube videoId={"kYmLQP2M-qo"} />
    <YouTubeCarousel {...args} />
  </div>
</Story>
