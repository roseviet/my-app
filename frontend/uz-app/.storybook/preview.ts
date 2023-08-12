import type { Preview } from '@storybook/react';
import { theme } from '../src/config/theme';
export const preview: Preview = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  chakra: {
    theme,
  },
};

export default preview;
