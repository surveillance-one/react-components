import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
addParameters({
  options: {
    theme: themes.dark,
  },
});
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
