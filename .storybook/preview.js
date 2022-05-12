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

import "../static/css/light.css";
