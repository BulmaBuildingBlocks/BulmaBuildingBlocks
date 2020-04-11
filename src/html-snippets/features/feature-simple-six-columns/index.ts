import FeatureSimpleSixColumns from './feature-simple-six-column.vue';
import Model from './model';
import { Snippet } from '~/types/Snippet';

const component: Snippet = {
  title: 'Six Column Feature',
  component: FeatureSimpleSixColumns,
  color: 'white',
  content: new Model()
};

export default component;
