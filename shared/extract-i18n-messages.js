"use strict";
/* eslint-disable */
/* tslint:disable */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var glob_1 = __importDefault(require("glob"));
var config_1 = require("~/shared/config");
var Utils_1 = require("./Utils");
var basePath = path_1["default"].resolve(process.cwd());
var run = function () {
    glob_1["default"](path_1["default"].join(basePath, '**/*.vue'), function (_err, files) {
        var supportedLocales = config_1.I18N.locales.map(function (x) { return x.code; });
        var defaultLocale = config_1.I18N.defaultLocale;
        var translations = {};
        /**
         * go through all *.vue files end extract the translation object $t('foo') -> {id: 'foo'}
         */
        files.forEach(function (file) {
            var content = fs_1["default"].readFileSync(file).toString();
            var matches = Utils_1.getTranslationsFromString(content);
            if (matches) {
                translations = __assign(__assign({}, translations), Utils_1.getTranslationObject(matches));
            }
        });
        /**
         * analyze and write languages files
         */
        supportedLocales.forEach(function (locale) {
            var i18nFilePath = path_1["default"].join(basePath, 'lang', locale + ".json");
            var i18nFile = fs_1["default"].existsSync(i18nFilePath) ? fs_1["default"].readFileSync(i18nFilePath).toString() : null;
            var i18nFileObject = i18nFile ? JSON.parse(i18nFile) : {};
            Object.keys(i18nFileObject).forEach(function (key) {
                i18nFileObject[key] = i18nFileObject[key].replace(/\n/g, '\\n').replace(/"/g, '\\"');
            });
            var newI18nObject = locale === defaultLocale
                ? Object.assign({}, i18nFileObject, translations)
                : Object.assign({}, translations, i18nFileObject);
            /**
             * sort entries
             */
            var sortedKeys = Object.keys(newI18nObject).sort();
            var sortedEntries = sortedKeys.map(function (key) {
                return "\"" + key + "\": \"" + newI18nObject[key] + "\"";
            });
            fs_1["default"].writeFileSync(path_1["default"].join(basePath, 'lang', locale + ".json"), "{\n  " + sortedEntries.join(',\n  ') + "\n}\n");
            // eslint-disable-next-line no-console
            console.info("wrote lang/" + locale + ".json");
        });
        // eslint-disable-next-line no-console
        console.info('lang extraction finished');
    });
};
run();
