import ContentSubtitleLeft from './content-simple-subtitle-left.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Subtitle Left',
  component: ContentSubtitleLeft,
  color: 'white',
  content: new Model()
};

export default component;
