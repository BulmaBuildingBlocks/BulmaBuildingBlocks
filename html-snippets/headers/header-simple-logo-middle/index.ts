import HeaderExSimpleLogoMiddle from './header-simple-logo-middle.vue';
import Model from './model';
import { Snippet } from '~/types/Snippet';

const component: Snippet = {
  title: 'Navbar with Logo Center',
  component: HeaderExSimpleLogoMiddle,
  color: 'white',
  content: new Model()
};

export default component;
