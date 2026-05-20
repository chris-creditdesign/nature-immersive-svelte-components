import type { Preview } from '@storybook/svelte';
import '../static/css/light.css';

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      classTarget: 'body',
      stylePreview: true,
    },
    options: {
      storySort: {
        order: ['Intro', ['Welcome', '*'], 'Pages', '*'],
      },
    },
  },
};

export default preview;

