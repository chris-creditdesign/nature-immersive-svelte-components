export default {
  plugins: ['prettier-plugin-svelte'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
  svelteSortOrder: 'scripts-styles-markup',
  svelteStrictMode: false,
  svelteAllowShorthand: true,
  svelteIndentScriptAndStyle: true,
};

