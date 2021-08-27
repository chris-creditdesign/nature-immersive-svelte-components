<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { Stack } from "creditdesign-svelte-components";
  import Video from "../index.svelte";
  import { spaceOptions } from "../../../preview-content/options.js";

  let argTypes = {
    altText: { control: "text" },
    autoplay: { control: "boolean" },
    buttonAtTop: { control: "boolean" },
    buttonOnLeft: { control: "boolean" },
    caption: { control: "text" },
    captionSpace: {
      control: {
        type: "select",
        options: spaceOptions,
      },
    },
    className: { control: "text" },
    frameRatioHeight: { control: "number" },
    frameRatioWidth: { control: "number" },
    loop: { control: "boolean" },
    pausedMessage: { control: "text" },
    playingMessage: { control: "text" },
    srcURL: { control: "text" },
  };
</script>

<Meta title="Components/Video" component={Video} {argTypes} />

<Story
  name="Default"
  let:args
  args={{
    altText: "This is the alt text",
    autoplay: true,
    buttonAtTop: false,
    buttonOnLeft: false,
    caption: "This is the caption",
    captionSpace: 0,
    className: "example-class",
    frameRatioHeight: 9,
    frameRatioWidth: 16,
    loop: true,
    pausedMessage: "Play video",
    playingMessage: "Pause video",
    srcURL: "video/video-small.jpg",
  }}
  parameters={{
    layout: "fullscreen",
  }}
>
  <Video {...args} />
</Story>

<Story
  name="Two videos on page"
  let:args
  args={{
    altText: "This is the alt text",
    autoplay: true,
    buttonAtTop: false,
    buttonOnLeft: false,
    caption: "This is the caption",
    captionSpace: 0,
    className: "example-class",
    frameRatioHeight: 9,
    frameRatioWidth: 16,
    loop: true,
    pausedMessage: "Play video",
    playingMessage: "Pause video",
    srcURL: "video/video-small.jpg",
  }}
>
  <Stack>
    <Video {...args} />
    <Video
      altText="This is the alt text"
      caption="This is the caption"
      srcURL="video/video-small.jpg"
    />
  </Stack>
</Story>
