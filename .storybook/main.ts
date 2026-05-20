import type { StorybookConfig } from '@storybook/svelte-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(svelte)',
    '../src/**/storybook/*.stories.@(js|jsx|ts|tsx|svelte)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/svelte-vite',
    options: {},
  },
  staticDirs: ['../static'],
};

export default config;

