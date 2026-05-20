<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SelectVideoButton from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/sections/YouTubeSection/SelectVideoButton',
    component: SelectVideoButton,
    argTypes: {
    videoId: { control: "text" },
    title: { control: "text" },
    index: { control: "number" },
  },
  });
</script>

<script>
import { videoDataArray } from "../../../../../preview-content/video-data-array.js";
</script>

<Story name="Default" args={{ videoId: videoDataArray[0].videoId, title: videoDataArray[0].title, index: 0, }}>
  {#snippet children(args)}
    <SelectVideoButton {...args} />
  {/snippet}
</Story>