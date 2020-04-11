import FeatureImagesThreeColumns from './feature-image-three-column.vue';
import Model from './model';
import { Snippet } from '~/types/Snippet';

const component: Snippet = {
  title: 'Three Images Feature',
  component: FeatureImagesThreeColumns,
  color: 'white',
  content: new Model()
};

export default component;
