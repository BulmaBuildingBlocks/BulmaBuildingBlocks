import ContentSubtitle from './html.vue';
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
