import FeatureIconThreeColumns from './html.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Three Icons Feature',
  component: FeatureIconThreeColumns,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
