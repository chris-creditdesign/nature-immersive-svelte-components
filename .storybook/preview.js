export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    classTarget: "body",
    stylePreview: true,
  },
  options: {
    storySort: {
      order: ["Intro", ["Welcome", "*"], "Pages", "*"],
    },
  },
};

import "../node_modules/creditdesign-svelte-components/index.css";
import "../src/css/fonts.css";
import "../src/css/font-size.css";
import "../src/css/custom-props.css";
import "../src/css/light-theme.css";
import "../src/css/dark-theme.css";
import "../src/css/index.css";
import "../src/css/buttons.css";
import "../src/css/themes.css";
import "../src/css/modifiers.css";
import "../src/css/utilities.css";
import "../src/css/storybook-fixes.css";
