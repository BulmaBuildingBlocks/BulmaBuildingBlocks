import ContentSingleImage from './content-simple-single-image.vue';
import Model from './model';
import { Snippet } from '~/types/Snippet';

const component: Snippet = {
  title: 'Single Image',
  component: ContentSingleImage,
  color: 'white',
  content: new Model()
};

export default component;
