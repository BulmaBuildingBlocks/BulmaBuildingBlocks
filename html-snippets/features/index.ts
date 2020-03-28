import FeatureSimpleSixColumns from '~/html-snippets/features/feature-simple-six-column.vue';
import FeatureSimpleEightColumns from '~/html-snippets/features/feature-simple-eight-column.vue';
import FeatureIconThreeColumns from '~/html-snippets/features/feature-icon-three-column.vue';
import FeatureImagesThreeColumns from '~/html-snippets/features/feature-image-three-column.vue';
import FeatureIconThreeColumnsMedia from '~/html-snippets/features/feature-icon-three-column-media.vue';
import FeatureBigImageLeft from '~/html-snippets/features/feature-big-image-left.vue';
import FeatureBigImageRight from '~/html-snippets/features/feature-big-image-right.vue';

const components = [
  {
    title: 'Six Column Feature',
    component: FeatureSimpleSixColumns,
    color: 'white'
  },
  {
    title: 'Eight Column Feature',
    component: FeatureSimpleEightColumns,
    color: 'white'
  },
  {
    title: 'Three Icons Feature',
    component: FeatureIconThreeColumns,
    color: 'white'
  },
  {
    title: 'Three Images Feature',
    component: FeatureImagesThreeColumns,
    color: 'white'
  },
  {
    title: 'Three Icons Media Feature',
    component: FeatureIconThreeColumnsMedia,
    color: 'white'
  },
  {
    title: 'Big Image Left',
    component: FeatureBigImageLeft,
    color: 'white'
  },
  {
    title: 'Big Image Right',
    component: FeatureBigImageRight,
    color: 'white'
  }
];

export default components;