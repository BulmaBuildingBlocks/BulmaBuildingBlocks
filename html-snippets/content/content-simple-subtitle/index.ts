import ContentSubtitle from './content-simple-subtitle.vue';
import Model from './model';
import { Snippet } from '~/types/Snippet';

const component: Snippet = {
  title: 'Subtitle',
  component: ContentSubtitle,
  color: 'white',
  content: new Model()
};

export default component;
