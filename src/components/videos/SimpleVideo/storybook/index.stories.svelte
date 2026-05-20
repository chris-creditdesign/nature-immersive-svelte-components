<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SimpleVideo from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/videos/SimpleVideo',
    component: SimpleVideo,
    argTypes: {
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
  },
  });
</script>

<script>
import { Stack } from "creditdesign-svelte-components";
  import { spaceOptions } from "../../../../preview-content/options.js";
</script>

<Story name="Default" args={{ altText: "This is the alt text", autoplay: true, buttonAtTop: false, buttonOnLeft: false, caption: "This is the caption", captionSpace: 0, className: "example-class", frameRatioHeight: 9, frameRatioWidth: 16, loop: true, pausedMessage: "Play video", playingMessage: "Pause video", srcURL: "video/video-small.jpg", }} parameters={{ layout: "fullscreen", }}>
  {#snippet children(args)}
    <SimpleVideo {...args} />
  {/snippet}
</Story>

<Story name="Two videos on page" args={{ altText: "This is the alt text", autoplay: true, buttonAtTop: false, buttonOnLeft: false, caption: "This is the caption", captionSpace: 0, className: "example-class", frameRatioHeight: 9, frameRatioWidth: 16, loop: true, pausedMessage: "Play video", playingMessage: "Pause video", srcURL: "video/video-small.jpg", }} parameters={{ layout: "fullscreen", }}>
  {#snippet children(args)}
    <Stack>
      <SimpleVideo {...args} />
      <SimpleVideo
        altText="This is the alt text"
        caption="This is the caption"
        srcURL="video/video-small.jpg"
      />
    </Stack>
  {/snippet}
</Story>