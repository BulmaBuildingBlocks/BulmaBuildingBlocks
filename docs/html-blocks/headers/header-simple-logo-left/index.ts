import HeaderExSimpleLogoLeft from './header-simple-logo-left.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Navbar with Logo Left',
  component: HeaderExSimpleLogoLeft,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
