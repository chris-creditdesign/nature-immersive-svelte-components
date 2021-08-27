<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import Image from "../index.svelte";
</script>

<Meta
  title="Components/Image"
  component={Image}
  argTypes={{
    altText: { control: "text" },
    caption: { control: "text" },
    className: { control: "text" },
    srcURL: { control: "text" },
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
  }}
>
  <Image {...args} />
</Story>
