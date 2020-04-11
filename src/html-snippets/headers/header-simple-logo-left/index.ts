import HeaderExSimpleLogoLeft from './header-simple-logo-left.vue';
import Model from './model';
import { Snippet } from '~/types/Snippet';

const component: Snippet = {
  title: 'Navbar with Logo Left',
  component: HeaderExSimpleLogoLeft,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
