import FeatureIconThreeColumnsMedia from './html.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Three Icons Media Feature',
  component: FeatureIconThreeColumnsMedia,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
