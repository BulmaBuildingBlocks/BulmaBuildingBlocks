import FeatureBigImageRight from './feature-big-image-left.vue';
import Model from './model';
import { Snippet } from '~/types/Snippet';

const component: Snippet = {
  title: 'Big Image Right',
  component: FeatureBigImageRight,
  color: 'white',
  content: new Model()
};

export default component;
