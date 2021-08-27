<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import ImageSliderCanvas from "../index.svelte";

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

  const loadedImages = imageData.map((elem) => {
    let thisImage = new Image();
    thisImage.src = elem.srcURL;
    thisImage.decode();
    return thisImage;
  });
</script>

<Meta
  title="components/interactive/ImageSlider/components/ImageSliderCanvas"
  component={ImageSliderCanvas}
  argTypes={{
    altText: { control: "text" },
    imageA: { control: "none" },
    imageB: { control: "none" },
    ratio: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
    amountToReveal: { control: { type: "range", min: 0, max: 100, step: 1 } },
  }}
/>

<Story
  name="Default"
  let:args
  args={{
    imageA: loadedImages[0],
    imageB: loadedImages[1],
  }}
>
  <ImageSliderCanvas {...args} />
</Story>
