#!/bin/sh

cat node_modules/creditdesign-svelte-components/index.css \
src/css/fonts.css \
src/css/font-size.css \
src/css/custom-props.css \
src/css/light-theme.css \
src/css/index.css \
src/css/buttons.css \
src/css/themes.css \
src/css/modifiers.css \
src/css/utilities.css \
src/css/storybook-fixes.css > static/css/light.css

cat node_modules/creditdesign-svelte-components/index.css \
src/css/fonts.css \
src/css/font-size.css \
src/css/custom-props.css \
src/css/dark-theme.css \
src/css/index.css \
src/css/buttons.css \
src/css/themes.css \
src/css/modifiers.css \
src/css/utilities.css \
src/css/storybook-fixes.css > static/css/dark.css