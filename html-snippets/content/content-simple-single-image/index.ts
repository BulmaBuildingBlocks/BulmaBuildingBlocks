import ContentSingleImage from './content-simple-single-image.vue';
import { Snippet } from '~/types/Snippet';
import { ContentType, getContent } from '~/shared/content';

const component: Snippet = {
  title: 'Single Image',
  component: ContentSingleImage,
  color: 'white',
  content: {
    title: getContent(ContentType.Title),
    subtitle: getContent(ContentType.Subtitle),
    image: getContent(ContentType.Images, 1),
    navButtons: [
      {
        type: ContentType.LinkButton,
        content: getContent(ContentType.LinkButton, {
          text: 'About',
          class: 'button is-white'
        })
      },
      {
        type: ContentType.LinkButton,
        content: getContent(ContentType.LinkButton, {
          text: 'Shop',
          class: 'button is-primary'
        })
      }
    ]
  }
};

export default component;
