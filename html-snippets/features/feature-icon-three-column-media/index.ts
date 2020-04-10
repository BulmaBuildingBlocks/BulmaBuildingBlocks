import FeatureIconThreeColumnsMedia from './feature-icon-three-column-media.vue';
import Model from './model';
import { Snippet } from '~/types/Snippet';

const component: Snippet = {
  title: 'Three Icons Media Feature',
  component: FeatureIconThreeColumnsMedia,
  color: 'white',
  content: new Model()
};

export default component;
