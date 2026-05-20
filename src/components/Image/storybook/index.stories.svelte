<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Image from '../index.svelte';
  const { Story } = defineMeta({
    title: 'Components/Image',
    component: Image,
    argTypes: {
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
  },
    parameters: {
    layout: "fullscreen",
  },
  });
</script>

<script>
import { spaceOptions } from "../../../preview-content/options.js";
</script>

<Story name="Default" args={{ className: "example-class", altText: "This is the alt text.", caption: "This is the caption", srcURL: "img/image-small.jpg", captionSpace: 0, }}>
  {#snippet children(args)}
    <Image {...args} />
  {/snippet}
</Story>