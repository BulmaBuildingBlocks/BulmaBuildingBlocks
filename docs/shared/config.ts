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

export const statusColors = {
  White: 'white',
  Black: 'black',
  Light: 'light',
  Dark: 'dark',
  'Light Blue': 'primary',
  'Dark Blue': 'info',
  Green: 'success',
  Yellow: 'warning',
  Red: 'danger'
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
