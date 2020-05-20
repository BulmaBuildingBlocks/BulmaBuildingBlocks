import FeatureSimpleFourColumns from './html.vue';
import Model from './model';
import { Block } from '~/html-blocks/types';

const component: Block = {
  title: 'Four Column Feature',
  component: FeatureSimpleFourColumns,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
