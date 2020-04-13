export const getTypeFromTagName = function(tagName: string): string {
  tagName = tagName.toUpperCase();
  switch (tagName) {
    case 'BUTTON':
      return 'button';
    case 'A':
      return 'button';
    case 'SECTION':
      return 'section';
    case 'HEADER':
      return 'section';
    default:
      return 'text';
  }
};

export function getRegexMatches(string: string, regex: RegExp, index: number) {
  index || (index = 1); // default to the first capturing group
  const matches = [];
  let match;
  while ((match = regex.exec(string))) {
    matches.push(match[index]);
  }
  return matches;
}
