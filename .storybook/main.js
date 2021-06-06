module.exports = {
  stories: [
    "../src/**/*.stories.@(mdx|svelte)",
    "../src/**/storybook/*.stories.@(js|jsx|ts|tsx|svelte)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
    "storybook-dark-mode",
  ],
};
