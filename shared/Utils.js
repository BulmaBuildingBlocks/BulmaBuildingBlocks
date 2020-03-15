"use strict";
exports.__esModule = true;
exports.getTranslationsFromString = function (content) {
    return content.match(/\$t\([",'].*[",'].*\/\*[\r,\n, ,\S]*?\*\/.?\)/gm) || [];
};
exports.sanitizeMessage = function (message) {
    var replacements = [
        { from: /\s\s+/g, to: ' ' },
        { from: '/*', to: '' },
        { from: '*/', to: '' },
        { from: /\[/g, to: '<' },
        { from: /\]/g, to: '>' },
        { from: /"/g, to: '\\"' }
    ];
    replacements.forEach(function (replacement) {
        message = message.replace(replacement.from, replacement.to);
    });
    return message.trim();
};
exports.getTranslationObject = function (matches) {
    var translations = {};
    matches.forEach(function (translation) {
        var idMatch = translation.match(/'\S*'/);
        var messageMatch = translation.match(/\/\*[\S\s]*\*\//);
        if (idMatch && messageMatch) {
            var id = idMatch[0].replace(/[\\']/g, '');
            var defaultMessage = messageMatch[0];
            translations[id] = exports.sanitizeMessage(defaultMessage);
        }
    });
    return translations;
};
