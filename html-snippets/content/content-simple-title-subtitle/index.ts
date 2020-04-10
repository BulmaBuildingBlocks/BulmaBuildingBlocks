import ContentTitleSubtitle from './content-simple-title-subtitle.vue';
import Model from './model';
import { Snippet } from '~/types/Snippet';

const component: Snippet = {
  title: 'Title and Subtitle',
  component: ContentTitleSubtitle,
  color: 'white',
  content: new Model()
};

export default component;
