import ContentSubtitleRight from './content-simple-subtitle-right.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Subtitle Right',
  component: ContentSubtitleRight,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
