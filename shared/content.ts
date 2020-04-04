export enum ContentType {
  Title,
  FeatureTitle,
  SmallDescription,
  Paragraph,
  Image,
  Button,
  Text
}

const format = (string: string, args: { [x: string]: string }): string => {
  for (const k in args) {
    string = string.replace('{' + k + '}', args[k]);
  }
  return string;
};

const content: Map<ContentType, string> = new Map([
  [ContentType.Title, 'Title'],
  [ContentType.FeatureTitle, `Feature {appendText}`],
  [
    ContentType.SmallDescription,
    '<p>Objectively cultivate stand-alone experiences whereas collaborative scenarios.</p>'
  ]
]);

export const getContent = (type: ContentType, appendText?: number | string): string | undefined => {
  if (appendText) {
    return format(content.get(type) || '', { appendText: appendText.toString() });
  }

  return content.get(type);
};
