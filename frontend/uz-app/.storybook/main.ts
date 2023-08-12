const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon',
  ],
  features: {
    emotionAlias: false,
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(
          __dirname,
          '../tsconfig.json'
        ),
      })
    );
    return config;
  },
};
export default config;
