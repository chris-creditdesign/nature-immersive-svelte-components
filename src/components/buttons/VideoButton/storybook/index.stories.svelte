<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import VideoButton from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/buttons/VideoButton',
    component: VideoButton,
    argTypes: {
    className: { control: "text" },
    paused: { control: "boolean" },
    pausedMessage: { control: "text" },
    playingMessage: { control: "text" },
    disabled: { control: "boolean" },
  },
  });
</script>

<script>
import { action } from "@storybook/addon-actions";
  let paused = $state(false);
  let handleClick = () => {
    paused = !paused;
    action("click")();
  };
</script>

<Story name="Default" args={{ className: "example-class", pausedMessage: "Play video", playingMessage: "Pause video", paused: true, theme: "", disabled: false, }}>
  {#snippet children(args)}
    <div style="padding: var(--s3);background-color: #999">
      <VideoButton {...args} {paused} on:click={handleClick} />
    </div>
  {/snippet}
</Story>