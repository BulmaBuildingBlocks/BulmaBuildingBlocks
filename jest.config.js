module.exports = {
  preset: 'ts-jest',
  rootDir: './',
  testRegex: '.spec.ts$',
  setupFilesAfterEnv: ['<rootDir>/docs/plugins/vue-imports.ts'],
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
    '^@/(.*)$': '<rootDir>/docs/$1',
    '^~/(.*)$': '<rootDir>/docs/$1',
    '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub'
  },
  moduleFileExtensions: ['js', 'vue', 'ts', 'json', 'scss', 'node', 'html'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(ts|spec.ts)$': 'ts-jest',
    '.*\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  collectCoverage: true,
  collectCoverageFrom: [
    './docs/**/*.ts',
    './docs/**/*.vue',
    '!**/html-blocks/**',
    '!**/node_modules/**'
  ],
  coverageReporters: ['html', 'text-summary'],
  verbose: true,
  globals: {
    NODE_ENV: 'test',
    window: true,
    vue: true
  }
};
