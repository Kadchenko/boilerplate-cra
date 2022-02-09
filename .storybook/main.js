const path = require('path');

module.exports = {
  // because of https://github.com/chakra-ui/chakra-ui/issues/5328
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src/'),
      '@config': path.resolve(__dirname, '../src/config/'),
      '@api': path.resolve(__dirname, '../src/api/'),
      '@assets': path.resolve(__dirname, '../src/assets/'),
      '@components': path.resolve(__dirname, '../src/components/'),
      '@common': path.resolve(__dirname, '../src/components/common'),
      '@layouts': path.resolve(__dirname, '../src/layouts/'),
      '@pages': path.resolve(__dirname, '../src/pages/'),
      '@router': path.resolve(__dirname, '../src/router/'),
      '@store': path.resolve(__dirname, '../src/store/'),
      '@hooks': path.resolve(__dirname, '../src/hooks/'),
      '@helpers': path.resolve(__dirname, '../src/helpers/'),
      '@styled': path.resolve(__dirname, '../src/styled/'),
      '@utils': path.resolve(__dirname, '../src/utils/'),
      '@services': path.resolve(__dirname, '../src/services/')
    }
    return config;
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ]
};
