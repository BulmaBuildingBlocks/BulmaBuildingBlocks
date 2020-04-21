import ContentSubtitleLeft from './html.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Subtitle Left',
  component: ContentSubtitleLeft,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
