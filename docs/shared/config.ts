import { Options } from 'prettier';
import parserHtml from 'prettier/parser-html';
import en from '../lang/en.json';
import fr from '../lang/fr.json';
import es from '../lang/es.json';

export const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-UK',
      name: 'English',
      file: 'en.json'
    },
    {
      code: 'fr',
      iso: 'fr-FR',
      name: 'Français',
      file: 'fr.json'
    },
    {
      code: 'es',
      iso: 'es-ES',
      name: 'Español',
      file: 'es.json'
    }
  ],
  defaultLocale: 'en',
  lazy: true,
  langDir: 'lang/',
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, fr, es }
  }
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
