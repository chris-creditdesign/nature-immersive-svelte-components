<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import LiteYouTube from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/videos/LiteYouTube',
    component: LiteYouTube,
    argTypes: {
    videoId: { control: "text" },
    videoRatioHeight: { control: "number" },
    videoRatioWidth: { control: "number" },
    playVideoRequested: { control: "boolean" },
    autoplay: { control: "boolean" },
  },
  });
</script>

<script>
import { Stack } from "creditdesign-svelte-components";
</script>

<Story name="Default" args={{ videoId: "kYmLQP2M-qo", videoRatioHeight: 9, videoRatioWidth: 16, playVideoRequested: false, autoplay: true, }}>
  {#snippet children(args)}
    <LiteYouTube {...args} />
  {/snippet}
</Story>

<Story name="Multiple videos">
  <Stack>
    <LiteYouTube videoId={"kYmLQP2M-qo"} />
    <LiteYouTube videoId={"K09xzIQ8zsg"} />
    <LiteYouTube videoId={"vponeaNiewE"} />
    <LiteYouTube videoId={"5AXApBbj1ps"} />
  </Stack>
</Story>

<Story name="Play video requested">
  <LiteYouTube videoId={"kYmLQP2M-qo"} playVideoRequested={true} />
</Story>

<Story name="No auto play after load">
  <LiteYouTube videoId={"kYmLQP2M-qo"} autoplay={false} />
</Story>