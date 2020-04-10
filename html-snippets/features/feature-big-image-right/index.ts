import FeatureBigImageLeft from './feature-big-image-right.vue';
import Model from './model';
import { Snippet } from '~/types/Snippet';

const component: Snippet = {
  title: 'Big Image Left',
  component: FeatureBigImageLeft,
  color: 'white',
  content: new Model()
};

export default component;
