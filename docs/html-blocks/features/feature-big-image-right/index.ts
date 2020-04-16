import FeatureBigImageLeft from './feature-big-image-right.vue';
import Model from './model';
import { Block } from '~/types/Block';

const component: Block = {
  title: 'Big Image Left',
  component: FeatureBigImageLeft,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
