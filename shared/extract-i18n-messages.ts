/* eslint-disable */
/* tslint:disable */

import fs from 'fs';
import path from 'path';
import glob from 'glob';
import { I18N } from '../shared/config';
import { getTranslationObject, getTranslationsFromString } from './Utils';

const basePath: string = path.resolve(process.cwd());

const run = (): void => {
  glob(path.join(basePath, '**/*.vue'), (_err: any, files: string[]) => {
    const supportedLocales: string[] = I18N.locales.map((x: { code: string }) => x.code);
    const defaultLocale: string = I18N.defaultLocale;
    let translations: any = {};

    /**
     * go through all *.vue files end extract the translation object $t('foo') -> {id: 'foo'}
     */
    files.forEach((file: string) => {
      const content = fs.readFileSync(file).toString();
      const matches: string[] = getTranslationsFromString(content);

      if (matches) {
        translations = { ...translations, ...getTranslationObject(matches) };
      }
    });

    /**
     * analyze and write languages files
     */
    supportedLocales.forEach((locale: string) => {
      const i18nFilePath: string = path.join(basePath, 'lang', `${locale}.json`);

      const i18nFile = fs.existsSync(i18nFilePath) ? fs.readFileSync(i18nFilePath).toString() : null;

      const i18nFileObject: any = i18nFile ? JSON.parse(i18nFile) : {};

      (Object as any).keys(i18nFileObject).forEach((key: string) => {
        i18nFileObject[key] = i18nFileObject[key].replace(/\n/g, '\\n').replace(/"/g, '\\"');
      });

      const newI18nObject: any =
        locale === defaultLocale
          ? (Object as any).assign({}, i18nFileObject, translations)
          : (Object as any).assign({}, translations, i18nFileObject);

      /**
       * sort entries
       */
      const sortedKeys: string[] = (Object as any).keys(newI18nObject).sort();
      const sortedEntries: string[] = sortedKeys.map((key: string) => {
        return `"${key}": "${newI18nObject[key]}"`;
      });

      fs.writeFileSync(path.join(basePath, 'lang', `${locale}.json`), `{\n  ${sortedEntries.join(',\n  ')}\n}\n`);

      // eslint-disable-next-line no-console
      console.info(`wrote lang/${locale}.json`);
    });

    // eslint-disable-next-line no-console
    console.info('lang extraction finished');
  });
};

run();
