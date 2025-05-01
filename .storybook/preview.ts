import type { Preview } from '@storybook/react';



const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    a11y: {
      element: '#root',
      config: {},
      options: {},
    },
  },
};

export default preview;
