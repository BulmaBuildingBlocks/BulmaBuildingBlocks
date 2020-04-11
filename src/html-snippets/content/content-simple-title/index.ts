import ContentTitle from './content-simple-title.vue';
import Model from './model';
import { Snippet } from '~/types/Snippet';

const component: Snippet = {
  title: 'Title',
  component: ContentTitle,
  color: 'white',
  content: new Model()
};

export default component;
