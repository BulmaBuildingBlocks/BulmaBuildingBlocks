import ContentSubtitleLeft from './content-simple-subtitle-left.vue';
import Model from './model';
import { Snippet } from '~/types/Snippet';

const component: Snippet = {
  title: 'Subtitle Left',
  component: ContentSubtitleLeft,
  color: 'white',
  content: new Model()
};

export default component;
