import FeatureBigImageLeft from './html.vue';
import Model from './model';
import { Block } from '~/html-blocks/types';

const component: Block = {
  title: 'Big Image Left',
  component: FeatureBigImageLeft,
  color: 'white',
  container: true,
  content: new Model()
};

export default component;
