import FeatureImagesThreeColumns from './feature-image-three-column.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Three Images Feature',
  component: FeatureImagesThreeColumns,
  color: 'white',
  content: new Model()
};

export default component;
