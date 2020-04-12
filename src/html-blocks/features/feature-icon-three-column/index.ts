import FeatureIconThreeColumns from './feature-icon-three-column.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Three Icons Feature',
  component: FeatureIconThreeColumns,
  color: 'white',
  content: new Model()
};

export default component;
