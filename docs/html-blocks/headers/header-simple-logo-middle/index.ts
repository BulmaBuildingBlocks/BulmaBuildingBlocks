import HeaderSimpleLogoMiddle from './header-simple-logo-middle.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Navbar with Logo Center',
  component: HeaderSimpleLogoMiddle,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
