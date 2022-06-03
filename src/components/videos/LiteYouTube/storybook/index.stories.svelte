<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { Stack } from "creditdesign-svelte-components";
  import LiteYouTube from "../index.svelte";

  let argTypes = {
    videoId: { control: "text" },
    videoRatioHeight: { control: "number" },
    videoRatioWidth: { control: "number" },
  };
</script>

<Meta
  title="components/videos/LiteYouTube"
  component={LiteYouTube}
  {argTypes}
/>

<Story
  name="Default"
  let:args
  args={{
    videoId: "kYmLQP2M-qo",
    videoRatioHeight: 9,
    videoRatioWidth: 16,
  }}
>
  <LiteYouTube {...args} />
</Story>

<Story name="Multiple videos">
  <Stack>
    <LiteYouTube videoId={"kYmLQP2M-qo"} />
    <LiteYouTube videoId={"K09xzIQ8zsg"} />
    <LiteYouTube videoId={"vponeaNiewE"} />
    <LiteYouTube videoId={"5AXApBbj1ps"} />
  </Stack>
</Story>
