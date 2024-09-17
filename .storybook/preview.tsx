import React from 'react';

import type { Preview } from '@storybook/react';

import '../src/app/styles/index.scss';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="light">
        <Story />
      </div>
    ),
  ],
};

export default preview;
