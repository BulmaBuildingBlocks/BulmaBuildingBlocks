import ContentSingleImage from './html.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Single Image',
  component: ContentSingleImage,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
