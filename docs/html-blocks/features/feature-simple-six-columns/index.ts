import FeatureSimpleSixColumns from './html.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Six Column Feature',
  component: FeatureSimpleSixColumns,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
