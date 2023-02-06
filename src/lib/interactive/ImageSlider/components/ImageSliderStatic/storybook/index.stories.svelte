<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import ImageSliderStatic from "../index.svelte";

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
</script>

<Meta
  title="components/interactive/ImageSlider/components/ImageSliderStatic"
  component={ImageSliderStatic}
  argTypes={{
    imageData: { control: "object" },
    className: { control: "text" },
  }}
/>

<Story name="Default" let:args args={{ imageData, className: "example-class" }}>
  <ImageSliderStatic {...args} />
</Story>
