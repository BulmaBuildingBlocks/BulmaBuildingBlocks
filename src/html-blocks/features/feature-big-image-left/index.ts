import FeatureBigImageRight from './feature-big-image-left.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Big Image Right',
  component: FeatureBigImageRight,
  color: 'white',
  content: new Model()
};

export default component;
