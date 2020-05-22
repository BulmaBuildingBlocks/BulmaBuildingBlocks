import { Options } from 'prettier';
import parserHtml from 'prettier/parser-html';

export const config = {
  mobileBreakpoint: 1087
};

export enum Status {
  None = '',
  White = 'white',
  Black = 'black',
  Light = 'light',
  Dark = 'dark',
  Primary = 'primary',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger'
}

export const statusColorClasses = {
  [Status.None]: 'None',
  [Status.White]: 'White',
  [Status.Black]: 'Black',
  [Status.Light]: 'Light',
  [Status.Dark]: 'Dark',
  [Status.Primary]: 'Light Blue',
  [Status.Info]: 'Dark Blue',
  [Status.Success]: 'Green',
  [Status.Warning]: 'Yellow',
  [Status.Danger]: 'Red'
};

export const prettierConf: Options = {
  parser: 'html',
  semi: true,
  arrowParens: 'always',
  singleQuote: true,
  endOfLine: 'auto',
  printWidth: 120,
  htmlWhitespaceSensitivity: 'ignore',
  plugins: [parserHtml],
  jsxBracketSameLine: true
};
