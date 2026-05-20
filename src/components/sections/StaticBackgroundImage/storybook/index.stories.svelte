<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import StaticBackgroundImage from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/sections/StaticBackgroundImage',
    component: StaticBackgroundImage,
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

<Story name="Default" args={{ srcURL: "img/image-small.jpg", alt: "This is the alt text", coverSpace: "var(--s0)", coverHeight: "100vh", }}>
  {#snippet children(args)}
    <StaticBackgroundImage {...args} />
  {/snippet}
</Story>

<Story name="With Heading" args={{ srcURL: "img/image-small.jpg", alt: "This is the alt text", coverSpace: "var(--s0)", coverHeight: "100vh", }}>
  {#snippet children(args)}
    <StaticBackgroundImage {...args}>
      <Heading {articleData} />
    </StaticBackgroundImage>
  {/snippet}
</Story>

<Story name="With text around" args={{ srcURL: "img/image-small.jpg", alt: "This is the alt text", coverSpace: "var(--s0)", coverHeight: "100vh", }}>
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

      <StaticBackgroundImage {...args}>
        <Heading {articleData} />
      </StaticBackgroundImage>

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

<Story name="With text around but no heading" args={{ srcURL: "img/image-small.jpg", alt: "This is the alt text", coverSpace: "var(--s0)", coverHeight: "100vh", }}>
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

      <StaticBackgroundImage {...args} />

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