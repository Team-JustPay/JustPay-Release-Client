import path from 'path';

import type { StorybookConfig } from '@storybook/react-webpack5';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    path.dirname(require.resolve(path.join('@storybook/addon-links', 'package.json'))),
    path.dirname(require.resolve(path.join('@storybook/addon-essentials', 'package.json'))),
    path.dirname(require.resolve(path.join('@storybook/preset-create-react-app', 'package.json'))),
    path.dirname(require.resolve(path.join('@storybook/addon-interactions', 'package.json'))),
  ],
  framework: {
    name: path.dirname(require.resolve(path.join('@storybook/react-webpack5', 'package.json'))),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};

export default config;
