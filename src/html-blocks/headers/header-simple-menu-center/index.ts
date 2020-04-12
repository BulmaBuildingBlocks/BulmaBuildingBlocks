import HeaderExMenuCenter from './header-simple-menu-center.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Navbar Centered',
  component: HeaderExMenuCenter,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
