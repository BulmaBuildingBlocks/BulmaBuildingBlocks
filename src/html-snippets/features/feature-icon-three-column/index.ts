import FeatureIconThreeColumns from './feature-icon-three-column.vue';
import Model from './model';
import { Snippet } from '~/types/Snippet';

const component: Snippet = {
  title: 'Three Icons Feature',
  component: FeatureIconThreeColumns,
  color: 'white',
  content: new Model()
};

export default component;
