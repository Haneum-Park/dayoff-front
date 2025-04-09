const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    'storybook-addon-styled-component-theme/dist/preset',
  ],
  webpackFinal: async (config) => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];

    config.resolve.alias = {
      ...config.resolve.alias,
      '@page': path.resolve(__dirname, '../pages'),
      '@atom': path.resolve(__dirname, '../components/atoms'),
      '@molecule': path.resolve(__dirname, '../components/molecules'),
      '@organism': path.resolve(__dirname, '../components/organisms'),
      '@template': path.resolve(__dirname, '../components/templates'),
      '@store': path.resolve(__dirname, '../stores'),
      '@utils': path.resolve(__dirname, '../utils'),
      '@const': path.resolve(__dirname, '../consts'),
    };

    return config;
  },
};
