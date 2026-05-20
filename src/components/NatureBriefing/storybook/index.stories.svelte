<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import NatureBriefing from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/NatureBriefing',
    component: NatureBriefing,
    parameters: {
    controls: { hideNoControlsWarning: true },
  },
  });
</script>

<Story name="Default">
  <NatureBriefing />
</Story>