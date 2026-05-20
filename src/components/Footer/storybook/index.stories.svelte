<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Footer from '../index.svelte';
  const { Story } = defineMeta({
    title: 'components/Footer',
    component: Footer,
    parameters: {
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
  },
  });
</script>

<Story name="Default">
  <Footer />
</Story>