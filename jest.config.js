module.exports = {
  preset: 'ts-jest',
  rootDir: './',
  testRegex: '.spec.ts$',
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  moduleFileExtensions: ['js', 'vue', 'ts', 'json', 'scss', 'node', 'html'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(ts|test.ts)$': 'ts-jest',
    '.*\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  collectCoverage: true,
  coverageDirectory: './coverage',
  verbose: true,
  globals: {
    NODE_ENV: 'test',
    window: true,
    vue: true
  }
};
