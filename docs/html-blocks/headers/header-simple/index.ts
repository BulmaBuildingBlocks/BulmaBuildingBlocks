import HeaderSimple from './html.vue';
import Model from './model';
import { Block } from '~/html-blocks/types';

const component: Block = {
  title: 'Navbar with Simple Nav',
  component: HeaderSimple,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
