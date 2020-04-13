import FeatureIconThreeColumnsMedia from './feature-icon-three-column-media.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Three Icons Media Feature',
  component: FeatureIconThreeColumnsMedia,
  color: 'white',
  content: new Model()
};

export default component;
