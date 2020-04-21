import FeatureSimpleEightColumns from './html.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Eight Column Feature',
  component: FeatureSimpleEightColumns,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
