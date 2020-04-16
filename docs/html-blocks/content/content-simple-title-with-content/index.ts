import ContentTitleWithContent from './content-simple-title-with-content.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Title with Content',
  component: ContentTitleWithContent,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
