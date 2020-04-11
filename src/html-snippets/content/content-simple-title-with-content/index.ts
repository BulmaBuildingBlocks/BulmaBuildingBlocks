import ContentTitleWithContent from './content-simple-title-with-content.vue';
import Model from './model';
import { Snippet } from '~/types/Snippet';

const component: Snippet = {
  title: 'Title with Content',
  component: ContentTitleWithContent,
  color: 'white',
  content: new Model()
};

export default component;
