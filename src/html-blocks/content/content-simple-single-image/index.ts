import ContentSingleImage from './content-simple-single-image.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Single Image',
  component: ContentSingleImage,
  color: 'white',
  content: new Model()
};

export default component;
