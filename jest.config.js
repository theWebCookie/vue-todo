module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  globals: {
    'vue-jest': {
      resources: {
        scss: ['./__mocks__/css-mocks.scss'],
      },
    },
  },
};
