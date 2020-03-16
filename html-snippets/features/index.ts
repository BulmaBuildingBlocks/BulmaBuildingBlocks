import SimpleSixColumns from '~/html-snippets/features/feature-simple-six-column.vue';
import SimpleEightColumns from '~/html-snippets/features/feature-simple-eight-column.vue';
import IconThreeColumns from '~/html-snippets/features/feature-icon-three-column.vue';
import ImagesThreeColumns from '~/html-snippets/features/feature-image-three-column.vue';
import IconThreeColumnsMedia from '~/html-snippets/features/feature-icon-three-column-media.vue';
import BigImageLeft from '~/html-snippets/features/feature-big-image-left.vue';
import BigImageRight from '~/html-snippets/features/feature-big-image-right.vue';

const components = [
  {
    name: 'Six Column Feature',
    component: SimpleSixColumns,
    color: 'white'
  },
  {
    name: 'Eight Column Feature',
    component: SimpleEightColumns,
    color: 'white'
  },
  {
    name: 'Three Icons Feature',
    component: IconThreeColumns,
    color: 'white'
  },
  {
    name: 'Three Images Feature',
    component: ImagesThreeColumns,
    color: 'white'
  },
  {
    name: 'Three Icons Media Feature',
    component: IconThreeColumnsMedia,
    color: 'white'
  },
  {
    name: 'Big Image Left',
    component: BigImageLeft,
    color: 'white'
  },
  {
    name: 'Big Image Right',
    component: BigImageRight,
    color: 'white'
  }
];

export default components;
