import ContentSubtitle from './content-simple-subtitle.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Subtitle',
  component: ContentSubtitle,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
