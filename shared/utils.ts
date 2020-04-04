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
