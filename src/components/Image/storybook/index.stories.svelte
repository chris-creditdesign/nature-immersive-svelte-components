<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import Image from "../index.svelte";

  import { spaceOptions } from "../../../preview-content/options.js";
</script>

<Meta
  title="Components/Image"
  component={Image}
  argTypes={{
    altText: { control: "text" },
    caption: { control: "text" },
    className: { control: "text" },
    srcURL: { control: "text" },
    captionSpace: {
      control: {
        type: "select",
        options: spaceOptions,
      },
    },
  }}
  parameters={{
    layout: "fullscreen",
  }}
/>

<Story
  name="Default"
  let:args
  args={{
    className: "example-class",
    altText: "This is the alt text.",
    caption: "This is the caption",
    srcURL: "img/image-small.jpg",
    captionSpace: 0,
  }}
>
  <Image {...args} />
</Story>
