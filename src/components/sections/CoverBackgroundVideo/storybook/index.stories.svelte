<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CoverBackgroundVideo from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/sections/CoverBackgroundVideo',
    component: CoverBackgroundVideo,
    argTypes: {
    srcURL: { control: "text" },
    alt: { control: "text" },
    coverSpace: {
      control: {
        type: "select",
        options: spaceOptions,
      },
    },
    coverHeight: {
      control: {
        type: "select",
        options: heightOptions,
      },
    },
  },
    parameters: {
    layout: "fullscreen",
  },
  });
</script>

<script>
import { Center, Stack } from "creditdesign-svelte-components";
  import Heading from "../../../Heading/index.svelte";
  import articleData from "../../../../preview-content/article-data.js";
  import {
    spaceOptions,
    heightOptions,
  } from "../../../../preview-content/options.js";
</script>

<Story name="Default" args={{ srcURL: "video/video-small.jpg", alt: "This is the alt text", coverSpace: "var(--s0)", coverHeight: "100vh", buttonClassName: "", buttonPausedMessage: "Play video", buttonPlayingMessage: "Pause video", buttonTheme: "", }}>
  {#snippet children(args)}
    <CoverBackgroundVideo {...args} />
  {/snippet}
</Story>

<Story name="With Heading" args={{ srcURL: "video/video-small.jpg", alt: "This is the alt text", coverSpace: "var(--s0)", coverHeight: "100vh", buttonClassName: "", buttonPausedMessage: "Play video", buttonPlayingMessage: "Pause video", buttonTheme: "", }}>
  {#snippet children(args)}
    <CoverBackgroundVideo {...args}>
      <Heading {articleData} />
    </CoverBackgroundVideo>
  {/snippet}
</Story>

<Story name="With text around" args={{ srcURL: "video/video-small.jpg", alt: "This is the alt text", coverSpace: "var(--s0)", coverHeight: "100vh", buttonClassName: "", buttonPausedMessage: "Play video", buttonPlayingMessage: "Pause video", buttonTheme: "", }}>
  {#snippet children(args)}
    <Stack stackSpace="var(--s3)">
      <Center>
        <Stack stackSpace="var(--s0)">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
            vero repellat nostrum iure incidunt eligendi quasi architecto officia
            odio eos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
            vero repellat nostrum iure incidunt eligendi quasi architecto officia
            odio eos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
            vero repellat nostrum iure incidunt eligendi quasi architecto officia
            odio eos!
          </p>
        </Stack>
      </Center>

      <CoverBackgroundVideo {...args}>
        <Heading {articleData} />
      </CoverBackgroundVideo>

      <Center>
        <Stack stackSpace="var(--s0)">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
            vero repellat nostrum iure incidunt eligendi quasi architecto officia
            odio eos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
            vero repellat nostrum iure incidunt eligendi quasi architecto officia
            odio eos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quidem temporibus beatae amet facilis, qui est praesentium laborum! Id
            vero repellat nostrum iure incidunt eligendi quasi architecto officia
            odio eos!
          </p>
        </Stack>
      </Center>
    </Stack>
  {/snippet}
</Story>