import HeaderMenuCenter from './html.vue';
import Model from './model';
import { Block } from '~/html-blocks/types';

const component: Block = {
  title: 'Navbar Centered',
  component: HeaderMenuCenter,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
