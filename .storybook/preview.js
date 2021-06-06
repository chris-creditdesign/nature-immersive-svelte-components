export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    classTarget: "body",
    stylePreview: true,
  },
};

import "../static/css/fonts.css";
import "../static/css/custom-props.css";
import "../static/css/light-theme.css";
import "../static/css/dark-theme.css";
import "../static/css/index.css";
import "../static/css/storybook-fixes.css";
