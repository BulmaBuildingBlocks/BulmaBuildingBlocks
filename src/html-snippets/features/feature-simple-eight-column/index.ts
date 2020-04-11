import FeatureSimpleEightColumns from './feature-simple-eight-column.vue';
import Model from './model';
import { Snippet } from '~/types/Snippet';

const component: Snippet = {
  title: 'Eight Column Feature',
  component: FeatureSimpleEightColumns,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
