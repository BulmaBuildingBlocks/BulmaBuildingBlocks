import HeaderExMenuCenter from './header-simple-menu-center.vue';
import Model from './model';
import { Snippet } from '~/types/Snippet';

const component: Snippet = {
  title: 'Navbar Centered',
  component: HeaderExMenuCenter,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
