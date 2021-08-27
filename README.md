# Nature immersive svelte components

> Colection of svelte components used to build @naturenews immersive articles

Config based on the [sveltejs/component-template](https://github.com/sveltejs/component-template)

Preview the compontents in a [Storybook](https://storybook.js.org/) here: https://chris-creditdesign.github.io/nature-immersive-svelte-components

## Setting up

- Run `npm init`

## Preview

- Run `npm run storybook`

## Build docs

- Run `build-storybook` to build a static version of Storybook in the docs folder to publish on github pages.

## Consuming components

Your package.json has a `"svelte"` field pointing to `src/index.js`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`). **This is recommended.**

For everyone else, `npm run build` will bundle your component's source code into a plain JavaScript module (`dist/index.mjs`) and a UMD script (`dist/index.js`). This will happen automatically when you publish your component to npm, courtesy of the `prepublishOnly` hook in package.json.

## TODO:

- Caption space for image
- Footer links
- Check for intersectionObserver before implementing StaticImage
- Implement grid above-min function
- High res images onMount // and/or lazyLoad / intersection observer
- Add stories for Layout Switcher
- Static Image - remove image container on mobile
- Focus states for header links
- NoJS state for StaticImage section
- Set font sizes to values [https://www.smashingmagazine.com/2018/05/css-custom-properties-strategy-guide/]()
- LayoutGrid above min

## References

- [prefers-reduced-motion](https://developers.google.com/web/updates/2019/03/prefers-reduced-motion)
- [svelte use:action to lazy load images](https://svelte.dev/repl/26ba12b3fbd146eaaefc8b024a826da7?version=3.5.1)
- [svelte use:action](https://svelte.dev/docs#use_action)
- [Lazy Loading Images and Video](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video)
- [DOMException: The play() request was interrupted](https://developers.google.com/web/updates/2017/06/play-request-was-interrupted)
- [svelte media query demo](https://codesandbox.io/s/6y2l0yxo53)
- [A Strategy Guide To CSS Custom Properties](https://www.smashingmagazine.com/2018/05/css-custom-properties-strategy-guide/)
- [HTMLImageElement.decode](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decode)
