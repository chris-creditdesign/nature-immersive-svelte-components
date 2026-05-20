<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import YouTubeButton from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/buttons/YouTubeButton',
    component: YouTubeButton,
    argTypes: {
    message: { control: "text" },
  },
  });
</script>

<Story name="Default" args={{ message: "Play video", }}>
  {#snippet children(args)}
    <div>
      <YouTubeButton {...args} />
    </div>
  {/snippet}
</Story>