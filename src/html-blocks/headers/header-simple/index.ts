import HeaderExSimple from './header-simple.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Navbar with Simple Nav',
  component: HeaderExSimple,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
