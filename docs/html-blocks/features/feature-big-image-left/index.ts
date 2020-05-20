import FeatureBigImageRight from './html.vue';
import Model from './model';
import { Block } from '~/html-blocks/types';

const component: Block = {
  title: 'Big Image Right',
  component: FeatureBigImageRight,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
