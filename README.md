# Nature immersive svelte components

> Colection of svelte components used to build @naturenews immersiev articles

Config based on the [sveltejs/component-template](https://github.com/sveltejs/component-template)

## Setting up

To install dependencies:

	npm install

To view components [Storybook](https://storybook.js.org/):

	npm run storybook

## Consuming components

Your package.json has a `"svelte"` field pointing to `src/index.js`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`). **This is recommended.**

For everyone else, `npm run build` will bundle your component's source code into a plain JavaScript module (`dist/index.mjs`) and a UMD script (`dist/index.js`). This will happen automatically when you publish your component to npm, courtesy of the `prepublishOnly` hook in package.json.

## Data passed to components

### Article data

- twitterHandle
- title
- description
- headline
- stand
- author
- photographer
- articleURL
- immersiveURL
- doi
- pdfAvailable
- altPdfAvailable
- altPdfBlurb
- publishedAt
- publishedAtString

## TODO: 

- Implement grid above-min function
- High res images onMount // and/or lazyLoad?
- Caption space for image
- Add GALinks
- Add stories for Layout Switcher
- Proper transitions for menu button
- SM image url in Head component