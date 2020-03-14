export const getTranslationsFromString = (content: string): RegExpMatchArray => {
  return content.match(/\$t\([",'].*[",'].*\/\*[\r,\n, ,\S]*?\*\/.?\)/gm) || [];
};
export const sanitizeMessage = (message: string): string => {
  const replacements: Array<{ from: string | RegExp; to: string }> = [
    { from: /\s\s+/g, to: ' ' },
    { from: '/*', to: '' },
    { from: '*/', to: '' },
    { from: /\[/g, to: '<' },
    { from: /\]/g, to: '>' },
    { from: /"/g, to: '\\"' }
  ];

  replacements.forEach((replacement: { from: string | RegExp; to: string }) => {
    message = message.replace(replacement.from, replacement.to);
  });

  return message.trim();
};

export const getTranslationObject = (matches: string[]): any => {
  const translations: any = {};

  matches.forEach((translation: string) => {
    const idMatch = translation.match(/'\S*'/);
    const messageMatch = translation.match(/\/\*[\S\s]*\*\//);

    if (idMatch && messageMatch) {
      const id: string = idMatch[0].replace(/[\\']/g, '');
      const defaultMessage: string = messageMatch[0];

      translations[id] = sanitizeMessage(defaultMessage);
    }
  });

  return translations;
};
