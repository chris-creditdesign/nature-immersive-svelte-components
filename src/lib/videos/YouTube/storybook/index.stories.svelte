<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { Stack } from "creditdesign-svelte-components";
  import YouTube from "../index.svelte";

  let argTypes = {
    videoId: { control: "text" },
    videoRatioHeight: { control: "number" },
    videoRatioWidth: { control: "number" },
  };
</script>

<Meta title="components/videos/YouTube" component={YouTube} {argTypes} />

<Story
  name="Default"
  let:args
  args={{
    videoId: "kYmLQP2M-qo",
    videoRatioHeight: 9,
    videoRatioWidth: 16,
  }}
>
  <YouTube {...args} />
</Story>

<Story name="Multiple videos">
  <Stack>
    <YouTube videoId={"kYmLQP2M-qo"} />
    <YouTube videoId={"K09xzIQ8zsg"} />
    <YouTube videoId={"vponeaNiewE"} />
    <YouTube videoId={"5AXApBbj1ps"} />
  </Stack>
</Story>
