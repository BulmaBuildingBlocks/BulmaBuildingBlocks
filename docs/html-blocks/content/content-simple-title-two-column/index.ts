import ContentTitleTwoColumn from './content-simple-title-two-column.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Title Two Columns',
  component: ContentTitleTwoColumn,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
