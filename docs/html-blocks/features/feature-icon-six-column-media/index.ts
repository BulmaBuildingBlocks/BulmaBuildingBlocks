import Html from './html.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Six Icons Media Feature',
  component: Html,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
