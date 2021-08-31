<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { Stack } from "creditdesign-svelte-components";
  import Video from "../index.svelte";
  import { spaceOptions } from "../../../../preview-content/options.js";

  let argTypes = {
    altText: { control: "text" },
    autoplay: { control: "boolean" },
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
    srcURL: { control: "text" },
    videoCaptionTracks: { control: "object" },
  };
</script>

<Meta title="components/videos/Video" component={Video} {argTypes} />

<Story
  name="Default"
  let:args
  args={{
    altText: "This is the alt text",
    autoplay: false,
    caption: "This is the caption",
    captionSpace: 0,
    className: "example-class",
    frameRatioHeight: 1.8,
    frameRatioWidth: 4.25,
    loop: false,
    srcURL: "video/sintel-short-small.jpg",
    videoCaptionTracks: [
      {
        label: "English",
        srclang: "en",
        defaultTrack: true,
      },
      {
        label: "Deutsch",
        srclang: "de",
        defaultTrack: false,
      },
      {
        label: "Español",
        srclang: "es",
        defaultTrack: false,
      },
    ],
  }}
  parameters={{
    layout: "fullscreen",
  }}
>
  <Video {...args} />
</Story>

<Story
  name="Autoplay on intersect"
  let:args
  args={{
    altText: "This is the alt text",
    autoplay: true,
    caption: "This is the caption",
    captionSpace: 0,
    className: "example-class",
    frameRatioHeight: 1.8,
    frameRatioWidth: 4.25,
    loop: false,
    srcURL: "video/sintel-short-small.jpg",
    videoCaptionTracks: [
      {
        label: "English",
        srclang: "en",
        defaultTrack: true,
      },
      {
        label: "Deutsch",
        srclang: "de",
        defaultTrack: false,
      },
      {
        label: "Español",
        srclang: "es",
        defaultTrack: false,
      },
    ],
  }}
  parameters={{
    layout: "fullscreen",
  }}
>
  <Stack stackSpace="var(--s4)">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
      Voluptatem veniam adipisci vero dolorum, architecto minima saepe
      laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
      modi blanditiis asperiores dignissimos!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
      Voluptatem veniam adipisci vero dolorum, architecto minima saepe
      laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
      modi blanditiis asperiores dignissimos!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
      Voluptatem veniam adipisci vero dolorum, architecto minima saepe
      laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
      modi blanditiis asperiores dignissimos!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
      Voluptatem veniam adipisci vero dolorum, architecto minima saepe
      laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
      modi blanditiis asperiores dignissimos!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
      Voluptatem veniam adipisci vero dolorum, architecto minima saepe
      laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
      modi blanditiis asperiores dignissimos!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
      Voluptatem veniam adipisci vero dolorum, architecto minima saepe
      laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
      modi blanditiis asperiores dignissimos!
    </p>
    <Video {...args} />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
      Voluptatem veniam adipisci vero dolorum, architecto minima saepe
      laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
      modi blanditiis asperiores dignissimos!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
      Voluptatem veniam adipisci vero dolorum, architecto minima saepe
      laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
      modi blanditiis asperiores dignissimos!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia.
      Voluptatem veniam adipisci vero dolorum, architecto minima saepe
      laboriosam enim, autem voluptate tempora distinctio praesentium nostrum
      modi blanditiis asperiores dignissimos!
    </p>
  </Stack>
</Story>
