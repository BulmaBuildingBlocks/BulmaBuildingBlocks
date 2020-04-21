import FeatureSimpleFourColumns from './feature-simple-four-columns';
import FeatureSimpleSixColumns from './feature-simple-six-columns';
import FeatureSimpleEightColumns from './feature-simple-eight-column';
import FeatureIconThreeColumns from './feature-icon-three-column';
import FeatureIconFourColumns from './feature-icon-four-column';
import FeatureImagesThreeColumns from './feature-image-three-column';
import FeatureIconThreeColumnsMedia from './feature-icon-three-column-media';
import FeatureIconSixColumnsMedia from './feature-icon-six-column-media';
import FeatureBigImageLeft from './feature-big-image-left';
import FeatureBigImageRight from './feature-big-image-right';
import { Block } from '~/types/Block';

const blocks: Block[] = [
  FeatureBigImageLeft,
  FeatureBigImageRight,
  FeatureIconThreeColumns,
  FeatureIconFourColumns,
  FeatureImagesThreeColumns,
  FeatureIconThreeColumnsMedia,
  FeatureIconSixColumnsMedia,
  FeatureSimpleFourColumns,
  FeatureSimpleSixColumns,
  FeatureSimpleEightColumns
];

export default blocks;
