import HeaderExSimpleLogoMiddle from './header-simple-logo-middle.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Navbar with Logo Center',
  component: HeaderExSimpleLogoMiddle,
  color: 'white',
  content: new Model()
};

export default component;
