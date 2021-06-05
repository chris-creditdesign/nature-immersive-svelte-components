<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import ImageSlider from "../index.svelte";

  const imageData = [
    {
      altText: "Scientific image containing duplicated regions.",
      caption: "The image that Elisabeth Bik was asked to review.",
      srcURL: "img/image-slider-test-a.jpg",
    },
    {
      altText: "Scientific image with duplicated regions outlined.",
      caption:
        "The coloured squares show the duplicated regions that Elisabeth Bik uncovered.",
      srcURL: "img/image-slider-test-b.jpg",
    },
  ];

  const badImageData = [
    {
      altText: "Scientific image containing duplicated regions.",
      caption: "The image that Elisabeth Bik was asked to review.",
      srcURL: "img/image-slider-test-a.jpg",
    },
    {
      altText: "Scientific image with duplicated regions outlined.",
      caption:
        "The coloured squares show the duplicated regions that Elisabeth Bik uncovered.",
      srcURL: "img/bad-url.jpg",
    },
  ];
</script>

<Meta
  title="Interactive components/ImageSlider"
  component={ImageSlider}
  argTypes={{
    altText: { control: "text" },
    amountToReveal: { control: { type: "range", min: 0, max: 100, step: 1 } },
    imageData: { control: "object" },
    message: { control: "text" },
  }}
/>

<Template let:args>
  <ImageSlider {...args} />
</Template>

<Story
  name="Default"
  let:args
  args={{
    imageData,
    message: "Use the slider to reveal the hidden image:",
    amountToReveal: 0,
  }}
>
  <div style="max-width: var(--measure)">
    <ImageSlider {...args} />
  </div>
</Story>

<Story
  name="Bad image"
  let:args
  args={{
    imageData: badImageData,
    message: "Use the slider to reveal the hidden image:",
    amountToReveal: 0,
  }}
>
  <div style="max-width: var(--measure)">
    <ImageSlider {...args} />
  </div>
</Story>

<Story
  name="Start half way"
  let:args
  args={{
    imageData,
    message: "Use the slider to reveal the hidden image:",
    amountToReveal: 50,
  }}
>
  <div style="max-width: var(--measure)">
    <ImageSlider {...args} />
  </div>
</Story>

<Story
  name="Full width"
  args={{
    imageData,
    message: "Use the slider to reveal the hidden image:",
    amountToReveal: 0,
  }}
/>
