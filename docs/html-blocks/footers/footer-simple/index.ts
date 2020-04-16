import FooterSimple from './footer-simple.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Simple Footer',
  component: FooterSimple,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
