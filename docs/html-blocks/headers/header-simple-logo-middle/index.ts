import HeaderSimpleLogoMiddle from './html.vue';
import Model from './model';
import { Block } from '~/html-blocks/types';

const component: Block = {
  title: 'Navbar with Logo Center',
  component: HeaderSimpleLogoMiddle,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
