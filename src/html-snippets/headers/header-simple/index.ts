import HeaderExSimple from './header-simple.vue';
import Model from './model';
import { Snippet } from '~/types/Snippet';

const component: Snippet = {
  title: 'Navbar with Simple Nav',
  component: HeaderExSimple,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
