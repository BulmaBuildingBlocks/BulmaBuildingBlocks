import HeaderSimpleLogoLeft from './header-simple-logo-left.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Navbar with Logo Left',
  component: HeaderSimpleLogoLeft,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
