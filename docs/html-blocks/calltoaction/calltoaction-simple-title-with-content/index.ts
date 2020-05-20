import ContentTitleWithContent from './html.vue';
import Model from './model';
import { Block } from '~/html-blocks/types';

const component: Block = {
  title: 'Title with Content',
  component: ContentTitleWithContent,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
