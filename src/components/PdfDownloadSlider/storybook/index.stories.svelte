<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import articleData from "../../../preview-content/article-data.js";
  import PdfDownloadSlider from "../index.svelte";

  let { doi } = articleData;

  let cardData = {
    headline: "Headline headline headline",
    srcURL: "img/image-small.jpg",
    text: "Download a pdf of headline headline headline.",
  };
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
</style>

<Meta
  title="Components/PdfDownloadSlider"
  component={PdfDownloadSlider}
  argTypes={{
    articleData: { control: "object" },
    cardData: { control: "object" },
    wideEnough: { control: "boolean" },
  }}
  parameters={{
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
  }}
/>

<Story
  name="Default"
  let:args
  args={{
    articleData: { doi },
    cardData,
  }}
>
  <div class="container">
    <a href="https://www.nature.com">Previous focusable item</a>
    <PdfDownloadSlider {...args} />
    <a href="https://www.nature.com">Next focusable item</a>
  </div>
</Story>
