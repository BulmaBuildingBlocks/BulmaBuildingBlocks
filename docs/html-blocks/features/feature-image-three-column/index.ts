import FeatureImagesThreeColumns from './html.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Three Images Feature',
  component: FeatureImagesThreeColumns,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
