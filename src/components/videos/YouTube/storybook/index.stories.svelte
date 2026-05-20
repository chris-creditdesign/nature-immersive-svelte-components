<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import YouTube from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/videos/YouTube',
    component: YouTube,
    argTypes: {
    videoId: { control: "text" },
    videoRatioHeight: { control: "number" },
    videoRatioWidth: { control: "number" },
  },
  });
</script>

<script>
import { Stack } from "creditdesign-svelte-components";
</script>

<Story name="Default" args={{ videoId: "kYmLQP2M-qo", videoRatioHeight: 9, videoRatioWidth: 16, }}>
  {#snippet children(args)}
    <YouTube {...args} />
  {/snippet}
</Story>

<Story name="Multiple videos">
  <Stack>
    <YouTube videoId={"kYmLQP2M-qo"} />
    <YouTube videoId={"K09xzIQ8zsg"} />
    <YouTube videoId={"vponeaNiewE"} />
    <YouTube videoId={"5AXApBbj1ps"} />
  </Stack>
</Story>