<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import { Center, Stack } from "creditdesign-svelte-components";
  import CoverBackgroundVideo from "../index.svelte";
  import Heading from "../../Heading/index.svelte";
  import articleData from "../../../preview-content/article-data.js";
  import {
    spaceOptions,
    heightOptions,
  } from "../../../preview-content/options.js";

  let argTypes = {
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
  };
</script>

<Meta
  title="Sections/CoverBackgroundVideo"
  component={CoverBackgroundVideo}
  {argTypes}
  parameters={{
    layout: "fullscreen",
  }}
/>

<Template let:args>
  <CoverBackgroundVideo {...args} />
</Template>

<Story
  name="Default"
  let:args
  args={{
    srcURL: "video/video-small.jpg",
    alt: "This is the alt text",
  }}
>
  <CoverBackgroundVideo {...args} />
</Story>

<Story
  name="With Heading"
  let:args
  args={{
    srcURL: "video/video-small.jpg",
    alt: "This is the alt text",
  }}
>
  <CoverBackgroundVideo {...args}>
    <Heading {articleData} />
  </CoverBackgroundVideo>
</Story>

<Story
  name="With text around"
  let:args
  args={{
    srcURL: "video/video-small.jpg",
    alt: "This is the alt text",
  }}
>
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
</Story>
