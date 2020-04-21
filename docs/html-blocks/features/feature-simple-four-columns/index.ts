import FeatureSimpleFourColumns from './feature-simple-four-column.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Four Column Feature',
  component: FeatureSimpleFourColumns,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
