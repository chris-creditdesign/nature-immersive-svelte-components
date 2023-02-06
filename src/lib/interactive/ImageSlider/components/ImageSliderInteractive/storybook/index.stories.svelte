<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import ImageSliderInteractive from "../index.svelte";

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
    thisImage.alt = elem.altText;
    thisImage.decode();
    return thisImage;
  });
</script>

<Meta
  title="components/interactive/ImageSlider/components/ImageSliderInteractive"
  component={ImageSliderInteractive}
  argTypes={{
    altText: { control: "text" },
    amountToReveal: { control: { type: "range", min: 0, max: 100, step: 1 } },
    imageA: { control: "none" },
    imageB: { control: "none" },
    message: { control: "text" },
    className: { control: "text" },
  }}
/>

<Story
  name="Default"
  let:args
  args={{
    imageA: loadedImages[0],
    imageB: loadedImages[1],
    className: "example-class",
  }}
>
  <ImageSliderInteractive {...args} />
</Story>
