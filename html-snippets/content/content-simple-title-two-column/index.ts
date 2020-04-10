import ContentTitleTwoColumn from './content-simple-title-two-column.vue';
import Model from './model';
import { Snippet } from '~/types/Snippet';

const component: Snippet = {
  title: 'Title Two Columns',
  component: ContentTitleTwoColumn,
  color: 'white',
  content: new Model()
};

export default component;
