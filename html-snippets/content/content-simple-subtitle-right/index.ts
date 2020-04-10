import ContentSubtitleRight from './content-simple-subtitle-right.vue';
import Model from './model';
import { Snippet } from '~/types/Snippet';

const component: Snippet = {
  title: 'Subtitle Right',
  component: ContentSubtitleRight,
  color: 'white',
  content: new Model()
};

export default component;
