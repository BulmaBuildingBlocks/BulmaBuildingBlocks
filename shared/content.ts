export enum ContentType {
  Logo = 'Logo',
  BasicLogo = 'BasicLogo',
  Title = 'Title',
  FeatureTitle = 'FeatureTitle',
  SmallDescription = 'SmallDescription',
  Paragraph = 'Paragraph',
  Icons = 'Icons',
  Backgrounds = 'Backgrounds',
  Images = 'Images',
  Button = 'Button'
}

const content: Map<ContentType, string | string[]> = new Map();

const contentData: { [x: string]: string | string[] } = {
  Logo: `<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />`,
  BasicLogo: `<img src="https://bulma.io/images/bulma-type.png" alt="" style="height: 30px;" />`,
  Title: 'Bulma Building Blocks',
  FeatureTitle: [`Feature 1`, `Feature 2`, `Feature 3`, `Feature 4`, `Feature 5`, `Feature 6`],
  SmallDescription: '<p>Objectively cultivate stand-alone experiences whereas collaborative scenarios.</p>',
  Paragraph: `<p>
            Continually leverage other's state of the art imperatives before orthogonal experiences. Completely
            administrate highly efficient sources via go forward customer service. Appropriately parallel task
            high-quality "outside the box" thinking through bleeding-edge systems. Globally revolutionize
            collaborative bandwidth via B2C intellectual capital.
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
    `<img src="${require(`~/assets/images/Background 1.png`)}" />`,
    `<img src="${require(`~/assets/images/Background 2.png`)}" />`,
    `<img src="${require(`~/assets/images/Background 3.png`)}" />`,
    `<img src="${require(`~/assets/images/Background 4.png`)}" />`,
    `<img src="${require(`~/assets/images/Background 5.png`)}" />`,
    `<img src="${require(`~/assets/images/Background 6.png`)}" />`
  ],
  Images: [
    `<img src="${require(`~/assets/images/Scene Living Room.svg`)}" />`,
    `<img src="${require(`~/assets/images/Scene Plants.svg`)}" />`,
    `<img src="${require(`~/assets/images/Scene Whiteboard.svg`)}" />`,
    `<img src="${require(`~/assets/images/Scene Wireframe.svg`)}" />`
  ]
};

type ContentTypeStrings = keyof typeof ContentType;

Object.keys(contentData).forEach((key: string) => {
  content.set(ContentType[key as ContentTypeStrings], contentData[key]);
});

export const getContent = (type: ContentType, index?: number) => {
  const contentText = content.get(type);

  if (contentText && index) {
    return contentText[index - 1];
  }

  return contentText;
};
