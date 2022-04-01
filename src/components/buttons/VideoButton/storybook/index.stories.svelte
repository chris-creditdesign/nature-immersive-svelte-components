<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";
  import VideoButton from "../index.svelte";

  let paused = false;

  let handleClick = () => {
    paused = !paused;
    action("click")();
  };
</script>

<Meta
  title="components/buttons/VideoButton"
  component={VideoButton}
  argTypes={{
    className: { control: "text" },
    paused: { control: "boolean" },
    pausedMessage: { control: "text" },
    playingMessage: { control: "text" },
    disabled: { control: "boolean" },
  }}
/>

<Story
  name="Default"
  let:args
  args={{
    className: "example-class",
    pausedMessage: "Play video",
    playingMessage: "Pause video",
    paused: true,
    theme: "",
    disabled: false,
  }}
>
  <div style="padding: var(--s3);background-color: #999">
    <VideoButton {...args} {paused} on:click={handleClick} />
  </div>
</Story>
