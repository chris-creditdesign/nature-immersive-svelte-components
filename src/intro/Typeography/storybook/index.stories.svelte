<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Typography from '../index.svelte';
  const { Story } = defineMeta({
    title: 'Intro/Typography',
    component: Typography,
    parameters: {
    controls: { hideNoControlsWarning: true },
  },
  });
</script>

<Story name="Harding font">
  <Typography />
</Story>

<Story name="Graphik Nature l Web font">
  <div class="font-family:sans-serif">
    <Typography />
  </div>
</Story>