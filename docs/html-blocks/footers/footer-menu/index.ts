import FooterMenu from './html.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Simple Footer Menu Vertical',
  component: FooterMenu,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
