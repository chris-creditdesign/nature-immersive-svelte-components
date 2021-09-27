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

import "../static/css/fonts.css";
import "../static/css/font-size.css";
import "../static/css/custom-props.css";
import "../static/css/light-theme.css";
import "../static/css/dark-theme.css";
import "../static/css/index.css";
import "../static/css/buttons.css";
import "../static/css/themes.css";
import "../static/css/modifiers.css";
import "../static/css/utilities.css";
import "../static/css/storybook-fixes.css";
