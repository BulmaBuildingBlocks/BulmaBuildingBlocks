import FeatureIconFourColumns from './feature-icon-four-column.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Four Icons Feature',
  component: FeatureIconFourColumns,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
