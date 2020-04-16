import HeaderMenuCenter from './header-simple-menu-center.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Navbar Centered',
  component: HeaderMenuCenter,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
