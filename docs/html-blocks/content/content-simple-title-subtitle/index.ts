import ContentTitleSubtitle from './content-simple-title-subtitle.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Title and Subtitle',
  component: ContentTitleSubtitle,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
