import { configure } from '@storybook/svelte';

import "../static/css/index.css"
import "../static/css/light-theme.css"

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.js$/), module);
