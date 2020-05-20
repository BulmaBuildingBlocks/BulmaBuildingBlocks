import FooterSimpleMenu from './html.vue';
import Model from './model';
import { Block } from '~/html-blocks/types';

const component: Block = {
  title: 'Simple Footer Menu',
  component: FooterSimpleMenu,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
