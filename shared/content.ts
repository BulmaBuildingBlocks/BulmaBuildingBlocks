export enum ContentType {
  Logo = 'Logo',
  BasicLogo = 'BasicLogo',
  Title = 'Title',
  Subtitle = 'Subtitle',
  FeatureTitle = 'FeatureTitle',
  SmallDescription = 'SmallDescription',
  Paragraph = 'Paragraph',
  Paragraphs = 'Paragraphs',
  Icons = 'Icons',
  Backgrounds = 'Backgrounds',
  Images = 'Images',
  LinkButton = 'LinkButton'
}

const content: Map<ContentType, string | string[]> = new Map();

const contentData: { [x: string]: string | string[] } = {
  Logo: `<a href=""><img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /></a>`,
  BasicLogo: `<a href=""><img src="https://bulma.io/images/bulma-type.png" alt="" style="height: 30px;" /></a>`,
  Title: 'Bulma Building Blocks',
  Subtitle: 'Helping to create beautiful websites',
  FeatureTitle: [
    `Feature 1`,
    `Feature 2`,
    `Feature 3`,
    `Feature 4`,
    `Feature 5`,
    `Feature 6`,
    `Feature 7`,
    `Feature 8`
  ],
  SmallDescription: '<p>Objectively cultivate stand-alone experiences whereas collaborative scenarios.</p>',
  Paragraph: `<p>
                Continually leverage other's state of the art imperatives before orthogonal experiences. Completely
                administrate highly efficient sources via go forward customer service. Appropriately parallel task
                high-quality "outside the box" thinking through bleeding-edge systems. Globally revolutionize
                collaborative bandwidth via B2C intellectual capital.
              </p>`,
  Paragraphs: `<p>
                Continually leverage other's state of the art imperatives before orthogonal experiences. Completely
                administrate highly efficient sources via go forward customer service. Appropriately parallel task
                high-quality "outside the box" thinking through bleeding-edge systems. Globally revolutionize
                collaborative bandwidth via B2C intellectual capital.
              </p>
              <p>
                Enthusiastically exploit multimedia based web-readiness whereas scalable quality vectors. Objectively
                morph professional models through focused niches. Authoritatively impact collaborative interfaces before
                distributed leadership.
              </p>`,
  Icons: [
    `<img src="${require(`~/assets/icons/1.svg`)}" />`,
    `<img src="${require(`~/assets/icons/2.svg`)}" />`,
    `<img src="${require(`~/assets/icons/3.svg`)}" />`,
    `<img src="${require(`~/assets/icons/4.svg`)}" />`,
    `<img src="${require(`~/assets/icons/5.svg`)}" />`,
    `<img src="${require(`~/assets/icons/6.svg`)}" />`
  ],
  Backgrounds: [
    `<img src="${require(`~/assets/images/Background 1.jpg`)}" />`,
    `<img src="${require(`~/assets/images/Background 2.jpg`)}" />`,
    `<img src="${require(`~/assets/images/Background 3.jpg`)}" />`,
    `<img src="${require(`~/assets/images/Background 4.jpg`)}" />`,
    `<img src="${require(`~/assets/images/Background 5.jpg`)}" />`,
    `<img src="${require(`~/assets/images/Background 6.jpg`)}" />`
  ],
  Images: [
    `<img src="${require(`~/assets/images/Scene Living Room.svg`)}" />`,
    `<img src="${require(`~/assets/images/Scene Plants.svg`)}" />`,
    `<img src="${require(`~/assets/images/Scene Whiteboard.svg`)}" />`,
    `<img src="${require(`~/assets/images/Scene Wireframe.svg`)}" />`,
    `<img src="${require(`~/assets/images/Scene Living Room Background.svg`)}" />`,
    `<img src="${require(`~/assets/images/Scene Plants Background.svg`)}" />`,
    `<img src="${require(`~/assets/images/Scene Whiteboard Background.svg`)}" />`,
    `<img src="${require(`~/assets/images/Scene Wireframe Background.svg`)}" />`
  ],
  LinkButton: `<a class="{class}" href="">{text}</a>`
};

type ContentTypeStrings = keyof typeof ContentType;

Object.keys(contentData).forEach((key: string) => {
  content.set(ContentType[key as ContentTypeStrings], contentData[key]);
});

interface FormatProps {
  [x: string]: string;
}

const format = (string: string, args: FormatProps): string => {
  for (const k in args) {
    string = string.replace('{' + k + '}', args[k]);
  }
  return string;
};

export const getContent = (type: ContentType, param?: number | FormatProps): string | string[] => {
  const contentText = content.get(type) || '';

  // If array get the index of the array
  if (Array.isArray(contentText) && typeof param === 'number') {
    return contentText[param - 1];
  }

  // If string and param exists run the replacement script
  if (typeof contentText === 'string' && typeof param === 'object') {
    return format(contentText, param);
  }

  return contentText;
};
