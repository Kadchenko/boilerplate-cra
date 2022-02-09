const path = require('path');
const BabelRcPlugin = require('@jackwilsdon/craco-use-babelrc');
const { compilerOptions } = require('./tsconfig.paths.json');
const { pathsToModuleNameMapper } = require('ts-jest');
const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/'});

module.exports = {
  plugins: [
    { plugin: BabelRcPlugin },
  ],
  jest: {
    configure: {
      preset: 'ts-jest',
      moduleNameMapper,
    }
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@api': path.resolve(__dirname, './src/api/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@layouts': path.resolve(__dirname, './src/layouts/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@router': path.resolve(__dirname, './src/router/'),
      '@store': path.resolve(__dirname, './src/store/'),
      '@hooks': path.resolve(__dirname, './src/hooks/'),
      '@helpers': path.resolve(__dirname, './src/helpers/'),
      '@styled': path.resolve(__dirname, './src/styled/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
      '@services': path.resolve(__dirname, './src/services/')
    }
  }
};
